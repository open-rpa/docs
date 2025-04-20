---
layout: default
title: Monitoring, Logging & Observability
parent: Architecture
nav_order: 8
---

# Monitoring, Logging & Observability

OpenCore and all client libraries expose performance data, logs, and traces using the OpenTelemetry standard. You can also push custom metrics, spans, and logs from any SDK to capture application‑specific insights.

## 1. Enable the OpenTelemetry Collector

Before collecting any data, deploy the OpenTelemetry Collector alongside your OpenCore services. In your Helm chart (or Enterprise Edition Docker Compose file), enable and expose the collector:

```yaml
exporter:
  enabled: true
  exposed: true
```

This will install the OpenTelemetry Collector and make its endpoints available to receive telemetry from OpenCore and its SDKs.  
**Note:** Running OpenCore on Kubernetes requires an Enterprise license.

## 2. Choose Your Backends

OpenCore supports three types of telemetry data—traces (spans), logs, and metrics—each of which you can export to a variety of backends. Enable only the ones you need:

### 2.1 Traces (Spans)

Select one tracing backend. This will automatically configure `otel_trace_url`:

```yaml
jaeger:
  enabled: true
```

_or, alternatively:_

```yaml
zipkin:
  enabled: true
```

_or:_

```yaml
elasticsearch:
  enabled: true
```

### 2.2 Logs

Choose a log storage system. Enabling one sets `otel_log_url`:

```yaml
loki:
  enabled: true
```

_or, alternatively:_

```yaml
elasticsearch:
  enabled: true
```

### 2.3 Metrics

Pick a metrics backend. Enabling one sets `otel_metric_url`:

```yaml
victoriametrics:
  enabled: true
```

_or, alternatively:_

```yaml
prometheus:
  enabled: true
```

## 3. Collect Kubernetes Metrics

To gather cluster‑ and component‑level metrics, enable kube‑state‑metrics so that the OTEL collector can scrape Kubernetes API data:

```yaml
kubeStateMetrics:
  enabled: true
```

## 4. Instrument Custom Telemetry

All OpenCore SDKs (Node.js, Python, .NET, Rust, etc.) let you add:

- **Custom metrics** (counters, gauges, histograms).  
- **Custom spans** (manual trace segments).  
- **Structured logs** (JSON with semantic attributes).  

See each SDK’s guide for examples on how to import the OpenTelemetry API, create instruments, and attach context to your workflows.

## 5. Visualize and Analyze Data

Once data flows into your chosen backends:

- **Trace UI:** Use Jaeger or Zipkin web interfaces to view end‑to‑end traces and identify latency hotspots.  
- **Metrics Dashboards:** Connect Grafana to VictoriaMetrics or Prometheus to graph system and business metrics. Import our sample dashboards (in `observability/dashboards/`) to get started.  
- **Log Exploration:** Query logs in Loki’s Grafana Explore view or in Kibana for Elasticsearch logs. Leverage structured fields to filter by service, agent, or workflow.

## 6. Alerts & Notifications

Define alerting rules in Grafana (or Prometheus Alertmanager) to trigger notifications on abnormal conditions:

```yaml
# Example Prometheus rule for high queue backlog
groups:
  - name: opencore
    rules:
      - alert: HighQueueBacklog
        expr: queue_length{queue="work-items"} > 100
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Work queue backlog is high"
          description: "Queue 'work-items' > 100 for over 5 minutes"
```

Connect to email, Slack, Teams, PagerDuty, or Opsgenie for on‑call alerts.

## 7. Best Practices

- **Minimize Overhead:** Enable only the backends and data types you need.  
- **Secure Endpoints:** Protect the OTEL collector and storage endpoints with TLS, authentication, and network policies.  
- **Use Sampling:** For high‑volume services, configure trace sampling to control data volume.  
- **Retention Policies:** Define retention and rotation for logs and metrics based on compliance and cost.  
- **Configuration as Code:** Version all observability configurations alongside your infrastructure and application manifests.

---

For detailed deployment instructions, see [Deployment Models & Environments](Deployment Models & Environments); for security considerations, refer to [Security Model & Features](Security Model & Features).