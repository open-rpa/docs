---
layout: default
title: Architecture Overview
parent: Architecture
nav_order: 2
---
# Architecture Overview

OpenCore is an extensible, event‑driven automation platform designed to connect disparate systems, orchestrate workflows, and run custom code in a reliable, scalable manner. At its core, OpenCore follows a microservices‑style architecture with clearly separated responsibilities and standard interfaces, enabling system architects to deploy it flexibly—from a single server for proof‑of‑concept to multi‑region, highly available clusters on Kubernetes.

---

## Core Components

- **OpenCore API & Web Interface**  
  A stateless service exposing gRPC, WebSocket, and REST APIs, plus the management UI. All clients (custom web apps, SDKs, agents) authenticate and communicate through this API, which enforces security, routing, and access control.

- **MongoDB Replica Set**  
  Stores events, metadata, workflow definitions, package manifests, audit logs, and history. A replica‑set configuration is required to support MongoDB change streams for real‑time event handling.

- **RabbitMQ Message Broker**  
  Manages asynchronous messaging between components. Durable queues and persistent messages ensure reliable delivery of work items and event notifications. Queues and exchanges are provisioned on‑demand via the OpenCore API. The SDK supports RPC calls, data streaming, and standard queue semantics.

- **Agents & Runtimes**  
  - **OpenRPA** – A low‑code/drag‑and‑drop RPA platform that supports the same technologies as commercial solutions, but is open‑source and free.  
  - **Node‑RED** – Instances (custom or standard) for low‑code/drag‑and‑drop API automation.  
  - **SDK agents** – Run packages as one‑off tasks or long‑running daemons in any of 11+ languages (Node.js, Python, .NET, Rust, etc.).  
  - **Desktop Assistant** – Local, interactive execution of packages.  
  - **NodeAgent** (`npx -y @openiap/nodeagent`) – Installs as a system service/daemon.  
  - **Functions** (coming soon) – Serverless deployment of individual functions in 11+ languages.

- **Monitoring & Observability (optional)**  
  Integrations with OpenTelemetry to collect metrics, traces, and logs from infrastructure, core components, and SDK‑based code.

---

## Data & Event Flow

1. **Message Queues**  
   Break processes into multiple queues when they:  
   - Span multiple workflows or code modules  
   - Involve human interaction  
   - Require rollback on failure  
   - Include long‑running tasks  
   
   Each queue can push work items to the next queue on success or failure, with per‑item overrides for complex routing.

2. **Work Items**  
   A *work item* is a unit of work or event, containing a JSON payload and optional file attachments. When a client pops a work item, it moves to the **processing** state. Clients can download, update, or delete attached files. Upon completion, the client marks the item **successful** or **failed**, providing an error message and indicating whether it’s a **Business Error** (non‑retryable) or an **Application Error** (retryable per the queue’s policy).

3. **Database Operations**  
   All clients can perform CRUD operations on the database. Each record has an ACL defining read, write, and delete permissions. While per‑object ACLs are supported, using roles (including nested roles) is recommended for easier management.  
   All collections maintain version history for every insert, update, and delete—enabling audit trails and recovery of deleted items without snapshots.  
   File attachments are stored in GridFS and inherit the same ACL model. For advanced versioning, OpenCore includes a built‑in Git server.

---

## Reference Topologies

### Single‑Node / Proof‑of‑Concept  
All components co‑located on one server or VM:  
![OpenCore with Traefik](architecture/opencore_with_traefik.png)  
Deploy with Docker Compose; see our [example repo](https://github.com/open-rpa/docker).

### Production‑Ready Kubernetes  
Highly available clusters using Helm charts:  
![OpenCore with Monitoring](architecture/opencore_with_monitoring.png)  
See our [Helm Charts repo](https://github.com/open-rpa/helm-charts) for customizable values, secrets management, and multi‑zone configurations. We recommend pairing with the [official Traefik Helm chart](https://helm.traefik.io/traefik).

---

## Scalability & High Availability

- **Stateless API nodes** can be scaled horizontally behind a load balancer  
- **RabbitMQ cluster** with mirrored queues ensures message durability  
- **MongoDB replica set** provides fail‑over and read scaling  
- **MongoDB sharded cluster** enables data sharding across multiple replica sets  
- **Agent pools** can autoscale based on queue depth or CPU usage  
- **Mesh & Geo‑distributed** deployments support intermittent connectivity via federation

---

By modularizing responsibilities and adopting industry‑standard components (MongoDB, RabbitMQ, Kubernetes), OpenCore gives you the flexibility to tailor deployments to your organization’s infrastructure, performance, and resilience requirements. System architects can leverage this architecture to integrate OpenCore seamlessly into enterprise landscapes and ensure reliable, scalable automation.
```