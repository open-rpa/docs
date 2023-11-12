{% include _layout.md %}
The HD robot solution, if using FreeRDP requires [2013 C++ Redistributable](https://www.microsoft.com/en-us/download/details.aspx?id=40784) to be installed.

A "base robot" will use between 200 and 350 mb RAM depending on the amount of workflows, detectors etc. your current user has access too.
On most common hardware the robot should not be using any CPU while idle, but on some low-end computers it's not uncommon to see a 2-4% CPU usage even when the robot is idle ( if this is the case for you, do NOT use windows detectors )
Using the designer will greatly increase your RAM usage, and not all ram will be released again. Do NOT run the robot with the designer open in production. If you robot start using more than 3 GB ram while working in the designer, restart it, and start thinking about splitting up your workflows to smaller units of work.
The amount of RAM being used will vary GREATLY depending on how you allocate variables, what you store in them, and weather you build small fast executing workflows or create big complex workflows that can run for a long time. Some types of data will get released in the current scope ( sequence ) other data will only be released after the workflow ends. Minimize the amount of data you send between workflows and NEVER send data table or data rows between workflows ( a data row contains a link to the data table you WILL be sending the entire data table )
If a workflow goes though a list of something, consider using work items and workitemqueues for better overview of the work done, and to force your self into thinking in smaller units of work. You can split up work items between multiple robots and/or workflows by "pushing" work items between queues.

If you enable a click or element detector the robot will be monitoring every mouse click on the computer, and on very low-end computers this can give a few milliseconds delay on clicks and show a little CPU usage on the robot. But most pc this is a non-issue.

The robot, if not configured on offline mode, will require a working network connection to start. Once in sync with [OpenFlow](https://github.com/open-rpa/openflow) it will function even if the network goes a wait for a short periods of time.
The robot uses WebSocket's to connect with [OpenFlow](https://github.com/open-rpa/openflow), if using a firewall that does layer 4 inspection or if you are using a proxy server, be sure to check this supports WebSocket's. 

If you are using [app.openiap.io](https://app.openiap.io) be aware that this is running in Google Cloud, so for people in certain countries, this can be an issue. 

If you are hit by any of the last two issues, either use the robot in offline mode, or create your own installation of [OpenFlow](https://github.com/open-rpa/openflow), in another network or On-premise. The are a guides on how to create demo setups on [OpenFlow](https://github.com/open-rpa/openflow)'s GitHub page