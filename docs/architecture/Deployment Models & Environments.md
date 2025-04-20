---
layout: default
title: Deployment Models & Environments
parent: Architecture
nav_order: 3
---

## Deployment Models & Environments

OpenCore can be deployed in a variety of environments to suit everything from rapid prototyping to mission‑critical, geo‑distributed enterprise landscapes. Below you’ll find detailed reference architectures, recommended configurations, and trade‑off guidance for each model.

---

### 1. Single‑Server Deployment

**Use case:** Proof‑of‑concept, developer sandbox, small teams.  
**Characteristics:**  
- All services (API, web UI, RabbitMQ, MongoDB replica set) on one host  
- Minimal infrastructure overhead  
- Simple to install and manage  

**Getting Started:**  
- Clone and run the Docker Compose file from the [open-rpa/docker repo](https://github.com/open-rpa/docker).  
- Ensure MongoDB is configured as a single‑node replica set.  

**Architecture Diagram:**  
![Single‑Server Deployment](architecture/single-server-deployment.png)  

> **Pros:** Easiest to set up, minimal external dependencies.  
> **Cons:** No true high‑availability, limited horizontal scalability.

---

### 2. Cloud‑Native (Kubernetes) Deployment

**Use case:** Elastic scaling, cloud‑managed services, automated operations, for production workloads requiring fault tolerance and zero‑downtime.  
**Characteristics:**  
- All components containerized and deployed via Helm charts  
- Dedicated instances for each component across multiple hosts or VMs  
- MongoDB in a multi‑node replica set  
- RabbitMQ in clustered mode with mirrored queues  
- Leverages Kubernetes features: Deployments, StatefulSets, Services, Ingress, ConfigMaps, Secrets  
- Auto‑scaling, self‑healing

**Getting Started with Helm:**  
1. Add the OpenCore Helm repo:  
   ```bash
   helm repo add opencore https://open-rpa.github.io/helm-charts
   helm repo update
   ```  
   create/edit one or more value files according to the documentation, and deploy your entire environment using a single command
   ```bash
   helm install openflow openflow/openflow -n=production --values=./production.yaml
   ```  

**Key Considerations:**  
- **multiple node pools** you should always consider creating multiple pools to segregate high load components. For instance, always create a dedicated pool for Observability. Also consider creating one or more pools for agents and service less functions.
- **Serverless functions** - If using serverless functions, be aware how it routes traffic to remote agents, if you enable remote agent access.

**Architecture Diagram:**  
![High‑Availability Cluster](architecture/high-availability-cluster.png)  

> **Pros:** Resilient to node failures, supports rolling upgrades.  
> **Cons:** More complex to deploy and maintain; requires expertise in clustering.

---

### 3. Hybrid & Mesh Topologies

**Use case:** Geo‑distributed offices, intermittent connectivity, multi‑data‑center setups.  
**Characteristics:**  
- Local OpenCore instances at edge sites (using Docker Compose or helm chart depending on requirements), with central cluster synchronization  
- Mesh connections between instances using custom sync agents
- Local cache for critical services when WAN is unavailable  

**Recommended Pattern:**  
- Deploy lightweight agents at edge locations.  
- Deploy a full OpenCore stack at edge sites when you need autonomous operation during prolonged network outages.
- Carefully consider priority on traffic, doing sync after longer perodes of disconnect.  

**Architecture Diagram:**  
![Mesh Topology](architecture/opencore_mesh_topology.png)  

> **Pros:** Resilient in high‑latency or unreliable networks; data locality.  
> **Cons:** Increased complexity in consistency guarantees and conflict resolution.

---

### Model Comparison

| Deployment Model           | Scalability              | High Availability | Complexity | Recommended For                        |
|----------------------------|--------------------|-------------------|------------------------|----------------------------------------|
| Single‑Server              | Low                | No                | Very Low               | PoCs, individual dev environments      |
| Cloud‑Native (Kubernetes)   | Large / Elastic    | Yes               | High                   | Cloud native, auto‑scaling requirements|
| Hybrid / Mesh Topologies   | Geo‑distributed    | Yes (local & central) | High              | Edge computing, distributed enterprises|

---

## Next Steps

1. **Choose your model** based on scale and operational maturity.  
2. Review the corresponding quickstart in the respective repo:  
   - Docker: [open-rpa/docker](https://github.com/open-rpa/docker)  
   - Helm Charts: [open-rpa/helm-charts](https://github.com/open-rpa/helm-charts)  
3. Follow best practices for security and monitoring as outlined in later sections.  
4. Join the community for configuration tips and shared Helm value files.

With these reference architectures and guidance, you can rapidly deploy OpenCore in the environment that best fits your organization’s needs.