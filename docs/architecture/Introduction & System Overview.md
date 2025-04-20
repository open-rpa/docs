---
layout: default
title: Introduction & System Overview
parent: What Is OpenCore
nav_order: 1
---
## What Is OpenCore?

OpenCore is an open‑source, extensible, event‑driven automation platform designed to help organizations build, orchestrate, and monitor complex business processes. At its heart, OpenCore provides:

- **A robust, pluggable architecture** that lets you mix and match components—database, messaging broker, API layer, and agent runtimes—to meet your scalability and security requirements.  
- **Native support for multiple languages** (Node.js, Python, .NET, Go, Java, Rust, etc.) so you can write custom logic in the language that best fits your needs.  
- **First‑class event streaming** with durable queues and change‑stream–enabled databases, ensuring reliable delivery and true horizontal scale.  
- **An integrated Web UI and REST/gRPC API** for managing your processes, agents, and deployments—making it easy to hook into existing toolchains.  

OpenCore lets you package your business logic into “agents”—self‑contained bundles that include both package definitions and your code. Agents can run once and exit, or operate as daemons reacting to incoming events.

---

## Key Components

![OpenCore Component Overview](architecture/overview.png)

1. **API & Web Interface**  
   - Exposes REST and gRPC endpoints for automation workflows, package management, and monitoring.  
   - Provides a single pane of glass for designing, deploying, and observing your processes.  

2. **Database (MongoDB Replica Set)**  
   - Stores process definitions, package metadata, and event histories.  
   - Uses change streams for real‑time event propagation.  

3. **Messaging Layer (RabbitMQ or AMQP‑compatible Broker)**  
   - Handles durable queues, exchanges, and priorities for event routing.  
   - Supports geo‑distributed and mesh topologies for high‑availability and offline resilience.  

4. **Agents & Packages**  
   - Agents run your code in a controlled environment; packages bundle code plus metadata.  
   - Supports both single‑run tasks and long‑lived daemons.  

5. **Connectors & Integrations**  
   - Built‑in adapters for databases, cloud services, message queues, and more.  
   - Plugin SDK for developing custom connectors in your preferred language.

---

## Typical Use Cases

- **Business Process Automation:** Combine Robotic Process Automation, low‑code API workflows, and full‑code modules seamlessly—enabling fast prototyping and iterative improvements across every part of the process.  
- **Workflow Orchestration:** Chain together microservices, database actions, and third‑party APIs with fault tolerance and retry policies.  
- **Data Integration:** Move and transform data between heterogeneous systems in real time.  
- **Event‑Driven Automation:** Trigger business processes based on database change streams or messaging events.  
- **Edge & Distributed Scenarios:** Run agents on remote or offline nodes and synchronize when networks recover.  

---

## Key Benefits

| Benefit            | Description                                                                                                                       |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| **Flexibility**    | Pluggable architecture lets you choose the components and languages that fit your stack.                                          |
| **Reliability**    | Durable queues, replica‑set databases, and built‑in retry policies ensure robust process execution.                                |
| **Scalability**    | Runs in Docker or Kubernetes (via our Helm charts) for seamless horizontal and vertical scaling.                                   |
| **Security**       | TLS‑encrypted channels, JWT‑based authentication, RBAC and ACLs on every object, plus robust audit logging to meet compliance.    |
| **Open Standards** | Leverages open‑standard protocols everywhere, and the entire stack is built with well‑known, battle‑hardened open‑source components to avoid vendor lock‑in. |

---

## Next Steps

To dive deeper into how OpenCore is structured and how its components interact, see the [Architecture](Architecture Overview) guide. From there, you can explore deployment models, security best practices, and how to extend the platform for your specific needs.