---
layout: default
title: Agents Page
parent: What Is OpenCore
nav_order: 14
---
# Agents Page

## Term Definition
An agent is the name for a machine or desktop that is running the [agent runtime](https://github.com/openiap/nodeagent).
A package is some code and a project.json file uploaded as a .tgz file to OpenFlow. These files are then downloaded and executed by agents.
Assistant is a cross-platform Electron app that a user can run to allow running packages on demand in the user's context. 

## Agent Capabilities
Agents are an application layer that can handle preparing and running source code written in multiple languages, and run it either on-demand, on a schedule, or as daemons (for instance, a webserver).
In theory, there is no limit to the amount of programming languages that could be supported, but at the time of this writing, agents can handle PowerShell, NodeJS/TypeScript, .NET, Jupyter Notebooks, and Python.
The agent will watch for package updates and automatically kill any packages running and update them when needed. The agent can also send the console output from any package to other agents or the web interface for easy remote monitoring. The agent can send detailed performance and monitoring data to an OpenTelemetry collector. The agent can do port forwarding to other agents for easy remote debugging/troubleshooting.
The agent can function as an extension of a work item queue and automatically execute packages for each work item added to the queue. This makes the process fully automated, and you simply need to read an environment variable to get and read and, if needed, update the filename containing the payload. 
Most examples on the [OpenIAP GitHub repo](https://github.com/openiap/) will show how to do this yourself to get full control over the process. For instance, if you need more control over the permissions on work items, you need to "take control" over the process and queues.

## Agent Runtimes
### Docker/Kubernetes/OpenShift
Agents can be started inside Docker/Kubernetes/OpenShift using OpenFlow.
When we do that, you can decide if any packages that will be running on the agent need to expose a web interface. If so, it will create an ingress route to the agent using the slug name. For instance, if you create an agent and it gets assigned the slug name `dawn-cloud-223c` and you are accessing an OpenFlow instance running at `app.openiap.io`. Once a package starts exposing a website/API, you can access that on https://dawn-cloud-223c.app.openiap.io.
Agents in Kubernetes/OpenShift can also be configured to auto-assign one or more persistent storage volumes. This is handy when running services or code that needs to persist data that may not be suitable to be stored inside the OpenFlow database. Be careful to back up this data.
All packages started on an agent will share the same credentials, so it is vital to always run agents with a user that does not have access to any sensitive data.
All packages will be configured to talk to the same OpenFlow instances, i.e., you cannot have multiple packages that are connected to different OpenFlow instances. (Well, you can, but it's not supported and not recommended.)
OpenIAP offers images with and without Chromium installed, for web automation inside agents. But you are free to create your own images if you have special demands. For instance, if it takes a long time to install all dependencies and you need fast startup times, it can be very handy to have a separate image with all those pre-installed. This is what OpenIAP does with the Node-RED image. Node-RED is simply a package referencing the Node-RED npm module, and is deployed as a package. But the Node-RED image has the package pre-loaded for faster startup.
### NodeAgent / Daemon
Agents can be installed as a daemon on Windows, MacOS, and Linux (even Raspberry Pi OS).
The agent requires NodeJS 14 or higher (18 or 20 recommended right now) to be pre-installed. Once installed, you can install the agent using the NPX command-line tool. The agent will run as a local system on Windows, and root on MacOS and Linux. You are free to change this to an unprivileged user, with access to its own profile data, and the network.
The agent will store all configuration and packages inside the .openiap folder in the profile/home folder.
Running an agent as a daemon is a handy way to run agents/packages that need access outside Docker/Kubernetes. If you are running OpenFlow in the cloud and need to run code on-premise, or if OpenFlow is running on a separate VLAN, you can install an agent on a machine where a package needs access to data not all packages need access to.
Another use could be access to special or more powerful hardware. Most things in OpenFlow require almost no resources, so it can be beneficial to offload heavy workloads to hardware you have already purchased, to save on cloud costs. Or maybe you need to run heavy Machine Learning or LLM training/inference, and decided to rent GPUs at a different cloud provider like RunPod, or need access to Google TPUs for TensorFlow workloads, but want to keep your Kubernetes cluster somewhere else or in a different region.
### Assistant
The assistant application is designed to run on a user's desktop. This way, the user can run any package you have given them access to. The package will then run inside the assistant in the user's context, and has access to any files or application the user has. This can be handy for doing assisted RPA (Robotic Process Automation), but anything is possible in code. Common use cases would be loading/processing files, generating reports, or simply creating a library of handy scripts that can help the users be more productive. As in all other cases, you can easily share, update, monitor, and control each agent and packages.
Though not the main use cases, you can also do both ad hoc runs, schedule, and start daemons remotely on an agent running inside an assistant, but be aware, the user is always able to close/kill the assistant or stop any running job.

## Packages
Packages are just the name for a .tgz file and a corresponding package.json file. The code you add to a package can be anything from a simple script to full-blown applications. Some applications are even created as n-tier applications with different application layers (different packages) dynamically scaled across many agents. 
You can easily scale both simple scripts and complex applications across many agents when needed or keep everyone on one if that makes more sense.

The package.json is used as a normal package.json for NodeJS/TypeScript packages, and as a placeholder for the settings in any other type of project. Inside it, you must have something like the below:
```json
"main": "index.js",
"openiap": {
        "language": "nodejs",
        "typescript": true,
        "daemon": false,
        "chromium": false,
        "ports": [
            {"port": 3000, "portname": "web", "protocol": "TCP", "web": true}
        ]
    }
```
- `main - The file to execute. This can be Python, PowerShell, or any other supported language and will also define how the agent prepares the environment before executing the main file.
- `language` - Tells the agent which runtime to use when executing the code.
- `typescript` - Not used at the moment, but is intended to be used when TypeScript has not been compiled and is run using ts-node.
- `daemon` - Is used by the agent and OpenFlow to determine if this is a never-ending process (like something listening on a port, or waiting on events).
- `chromium` - Used by OpenFlow to control which packages to show for an agent. Will only allow this package to run on agents that have a Chrome or Chromium browser.
- `ports` - Define any ports this package might be listening on.
    - `If port is left empty, a random free port will be used.
    If the port is already in use, a new free port number will be used, and injected as an environment variable into the host using the portname.
    - `portname` is how we reference the port externally.
    - `protocol` is always TCP (UDP might be added later).
    - `web` is used on Docker/Kubernetes to tell the agent this port can be shared with other packages for web traffic. In that case, port should always be left blank (or it might be ignored).

### NodeJS/TypeScript
Whenever a package is downloaded or updated, the agent will prepare the environment before running the main entry point.
For NodeJS, this means running `npm install` in the project folder.

### Python
Currently, this can run in two modes, but the latter will be retired at some point, in favor of using virtual environments for everything.
When `language` in package.json has been set to Python and "main" points to a Python file, you can add a conda.yaml (or environment.yaml) file next to the package.json file.
Whenever a package is downloaded or updated, the agent will then search for Conda or MicroMamba and use that to create/update a Python environment. This way, you can define both the version of Python you want and whatever packages are needed for your Python project. Can include a `name:` in the file, but this name will be changed by the agent during install/update, so do not depend on a specific name.
Older project examples did not use an environment.yaml. If the agent does not find one but sees a requirements.txt file instead, it will call `pip install -r requirements.txt` in the project folder. Please do not depend on this system, as this is deprecated; it's just documented here while all example projects are being updated.

### JupyterLab
This is still in early beta.
A special package has been created that allows provisioning multiple JupyterLab instances, each with its own separated Python environment, and automatically syncs any data inside the lab.
This is intended for data scientists and AI/LLM developers that need a well-known environment that also allows easy scaling and more easy access to data stored in OpenFlow.
Once matured more, this will most likely be migrated into the main node agent package, so it will become a standard feature of agents running anywhere in any environment.

### PowerShell
When the `language` in package.json is set to `powershell` and `main` points to a `.ps1` file, the agent will run the PowerShell script using `pwsh` on Linux, MacOS, and Windows, and will fall back to `powershell.exe` on Windows if `pwsh` is not found.

### .NET
.NET version 6 and higher is supported as well. For now, only csproj projects are supported and are only supported on Docker/Kubernetes using a special [agent image](https://hub.docker.com/r/openiap/dotnetagent).
NodeAgent and Assistant support might come later if there is demand for this.
The package will be called using dotnet run in the package folder. This will automatically ensure all needed NuGet packages are downloaded and installed.

### Node-RED
Since Node-RED is such an important part of the solution, it deserves to be mentioned separately. Before version 1.5, OpenRPA and Node-RED were the only ways to run code. Both are low-code solutions, serving two very different purposes.

If all you want is to run Node-RED inside Docker/Kubernetes/OpenShift, you can simply select it from the dropdown list of images when creating an agent. This image is essentially a normal NodeAgent with the Node-RED package preloaded for faster startup times.

If you want to run what we previously referred to as "remote Node-REDs," you will now use NodeAgent instead of PM2. Simply fork or clone the [Node-RED agent](https://github.com/openiap/noderedagent) package and deploy it into your OpenFlow. You can now schedule that on any agent.

The old approach would set up PM2 to keep Node-RED running, but we can accomplish this using NodeAgent now. This also allows for better remote management and monitoring, centralized updating, remote debugging using port forwarding, and much more. So, the functionality is still there, just deployed a little differently.
