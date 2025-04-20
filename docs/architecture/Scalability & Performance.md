---
layout: default
title: Scalability & Performance
parent: Architecture
nav_order: 7
---
## Scalability & Performance

OpenCore’s architecture is designed to grow with your organization’s demands. From development environments to mission‑critical production workloads, it supports both horizontal and vertical scaling to ensure reliable performance under varying conditions.

### Scaling Architecture

MongoDB (and, in some cases, agents with persistent storage) is the only stateful component of the stack. This design makes scaling up or down any other component—including your code and workflows—very easy and fully automatable. Everything can be scaled out behind load balancers, message queues, and work‑item queues without worrying about shared state.

This separation enables near‑linear throughput improvements by adding more stateless instances to handle increased request rates or workload processing.

### Horizontal Scaling

To scale horizontally:

1. **Service Replication**  
   Docker Compose and Helm Charts allow you to change the replica count for any component.  
2. **Agent Replication**  
   All cloud agents support updating replica counts for easy scaling.  
3. **Serverless Functions**  
   When serverless functions are enabled, the OpenCore load balancer will automatically scale agents from zero to an unlimited number of replicas based on performance metrics. This ensures optimal utilization of your infrastructure by only using CPU and memory when code is actually invoked.

![OpenCore Scaled Deployment](architecture/opencore_scaled.png)

#### Best Practices

- Run as many workflows as possible in cloud agents, using remote agents only when necessary to maximize scalability.  
- Monitor queue lengths and scale workers up or down based on backlog to meet SLAs.

### Vertical Scaling

Although we always prioritize horizontal scaling, vertical scaling may be required in certain scenarios:

- **Increase Node Resources**  
  Allocate more CPU, memory, or disk I/O to individual API servers or agent workers. Create dedicated node pools for workloads that require higher resource capacity to optimize costs.  
- **Optimize the Database**  
  MongoDB replica set members generally benefit from additional RAM compared to other node pools.  
- **Observability Components**  
  Collect performance data and logs alongside your workload, or create a dedicated node pool for observability services if you anticipate high data volumes.

Vertical scaling is ideal for smaller deployments or when infrastructure budgets limit the number of nodes—for example, in single‑host Docker installations.

### Performance Testing

Validate performance in your environment by:

1. **Defining Workload Profiles**  
   Simulate real‑world usage patterns (message rates, payload sizes, concurrency).  
2. **Using Benchmark Tools**  
   Drive traffic with frameworks like Locust or JMeter against the OpenCore API and queues.  
3. **Collecting Key Metrics**  
   - **Throughput:** Events or requests processed per second  
   - **Latency:** End‑to‑end processing time  
   - **Resource Utilization:** CPU, memory, disk I/O for each component  
4. **Analyzing Bottlenecks**  
   Identify and scale or optimize components where latency spikes or resource saturation occurs.

### Tuning & Optimization

Apply these best practices to maximize performance:

- **Database Indexing**  
  Ensure MongoDB collections have indexes for your most common query patterns. For licensed customers, we offer an AI‑assisted Index Optimization Wizard.  
- **Connection Pooling**  
  Tune connection pools for both the database and message broker to match your workload. Avoid too many connections, which consume RAM, while also avoiding too few, which force costly ad‑hoc connection creation.  
- **Caching**  
  When running multiple API nodes, enable an in‑memory cache (e.g., Redis) for OpenCore. This will greatly improve performance at the cost of additional RAM. Monitor cache usage and adjust accordingly.  
- **Asynchronous Processing**  
  Offload non‑critical tasks (logging, metrics emission) to background workers or separate queues.  
- **Configuration Parameters**  
  Adjust OpenCore’s thread pools, HTTP timeouts, maximum query sizes, and rate limiters to match your usage. Misconfigured rate limiting, for instance, can allow a single client to overwhelm the platform.

### High Availability & Fault Tolerance

OpenCore provides built‑in resilience features:

- **MongoDB Replica Sets**  
  Protect against primary node failure with automated failover. For high database usage, consider a shared cluster to save disk space and increase throughput.  
- **Graceful Worker Shutdown**  
  Agent workers complete in‑flight tasks before terminating. They should listen for SIGINT signals, clean up appropriately, and shut down gracefully to prevent dropped work items.  
- **Automatic Recovery**  
  In containerized or Kubernetes setups, failed pods are automatically restarted. Monitor pods to avoid unnoticed restart loops.

Combining scaling strategies with high‑availability configurations ensures OpenCore can deliver the performance and resilience required for enterprise workloads.