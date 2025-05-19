---
layout: default  
title: Security Model & Features  
parent: Architecture  
nav_order: 5  
---

# Security Model & Features

This page describes the security architecture and features built into OpenCore, and provides guidance on how to deploy and operate the platform in a secure, enterprise‑grade manner.

---

## Authentication & Authorization

OpenCore enforces strong authentication and fine‑grained authorization to ensure that only permitted users and services can access resources (data, queues, agents, etc.).

- **Access Control Lists**  
  - **Users**: Everything revolves around a user; if no user is supplied and guest accounts are enabled, the system runs as the Guest user.  
  - **Roles**: All message queues, work‑item queues, and every object in the database has an Access Control List associated with it that controls who can do what. OpenCore supports nested roles to handle complex permission schemas.

### Single Sign‑On (SSO) & Identity Providers

- **Supported Protocols**  
  - OpenID Connect (OIDC)  
  - SAML 2.0  
  - LDAP/Active Directory  

- **Configuration**  
  You can add any number of federation providers under “Providers” in the OpenCore web interface. For apps and websites that need to authenticate users, you can register one or more OAuth clients via the web interface, or use one of the built‑in client IDs (`agent`, `webapp`, `openapi`).

- **Multi‑Factor Authentication (MFA)**  
  We highly recommend enabling MFA policies for all users with access to the system.

### API Tokens & JWT

- **Token Issuance**  
  Clients authenticate via SSO or service credentials, then receive a signed JWT containing user identity and roles.  
- **Token Validation**  
  JWTs are validated on every API request. Tokens have a default **15‑hour expiry**, and all client SDKs automatically refresh them.  
- **Token Introspection**  
  OpenCore can accept and validate tokens issued by external identity providers.

---

## Data Security

OpenCore protects your data both in transit and at rest.

### Encryption In Transit

- **TLS Everywhere**  
  All network communication—API calls, WebSocket connections, inter‑service messaging—requires TLS.  
- **Mutual TLS (mTLS)**  
  For highly secure deployments, you can enable mTLS between OpenCore services and agents.

### Encryption At Rest

- **Database Encryption**  
  MongoDB data files can be encrypted using the WiredTiger Encrypted Storage Engine. Configure a key management provider (KMIP, AWS KMS, etc.) in your MongoDB replica set. Alternatively, OpenCore can optionally encrypt sensitive payloads using AES‑256 to ensure they are never stored in clear text.  
- **Environment Isolation**  
  Avoid embedding secrets in container images. Always generate credentials within OpenCore and manage them centrally.

---

## Secure Deployment Best Practices

Follow these guidelines to harden your OpenCore installation:

### TLS Certificates

1. Use certificates signed by a trusted CA (internal or public). We use Let’s Encrypt by default.  
2. Automate renewal with Let’s Encrypt or your internal PKI.

### Network Hardening

- **Firewall Rules**  
  Allow only necessary ports (e.g., 443 for API) and do not expose any other services publicly.  
- **Zero‑Trust Networking**  
  Place OpenCore components in a segmented network; use a service mesh (e.g., Istio) for policy enforcement in Kubernetes.  
- **Trusted Execution Environment**  
  In highly sensitive environments, consider running OpenCore in a trusted execution environment such as Talos or Kata Containers.

### Container & Host Security

- Run containers with a **non‑root** user, or use OpenShift, which enforces non‑root execution by default.  
- Keep host OS and dependencies up to date with security patches.  
- Use local artifact repositories to conserve bandwidth and avoid pushing internal code to external providers. (Docker registries, npm, PyPI, Conan, etc., all have on‑premise options.)

---

## Compliance & Audit Logging

OpenCore provides comprehensive audit capabilities to meet regulatory and compliance requirements.

### Audit Logs

- **What’s Logged**  
  - User logins and logouts  
  - API calls (who, what, when)  
  - Workflow and agent lifecycle events  
- **Storage & Retention**  
  Logs are written to a **dedicated, immutable collection** (`audit`). You can configure a TTL on this time‑series collection to expire old entries.  
- **External SIEM Integration**  
  You can forward logs and performance data to Elasticsearch, Splunk, Datadog, etc., using the OpenTelemetry Collector.

### Compliance Frameworks

- **GDPR**  
  - Data subject access requests can be audited through the log viewer and version history.  
  - Data retention policies can be enforced via TTL settings.  
  - Sensitive data can be purged from the system using administrative tools.  
- **PCI DSS**  
  - Enforce TLS 1.2+ for all data in transit.  
  - Restrict administrative access to authorized personnel only.  
- **HIPAA**  
  - Covered entities can leverage audit logs and encryption features to satisfy data access and integrity requirements.  
- **FedRAMP**  
  - Details on FedRAMP compliance are forthcoming.  

---

## Vulnerability Management & Security Notices

Staying up to date with security fixes is critical.

- **GitHub Security Advisories**  
  Subscribe to the OpenCore repository if you want to be update on security and bug fixes. 
- **Dependabot & Automated Scans**  
  We use dependabot and github automated Security and code scanning. And we prefere people use github's "Private vulnerability reporting" feature to report vulnerabilities.
- **Disclosure Policy**  
  Alernatively, you can report vulnerabilities via security at openiap.io. Our team typically responds within 48 hours, if the report has a real security vulnerabilities and will send out public advisory for paying customers in case for seriuse issues, that need patching. We do not offer bounty programs at this time.

---

## Summary of Best Practices

| Area                      | Recommendation                                             |
|---------------------------|------------------------------------------------------------|
| Authentication            | Enforce SSO (OIDC/SAML); enable MFA                        |
| Authorization             | Use RBAC; define least‑privilege roles                     |
| Encryption                | TLS everywhere; enable mTLS; encrypt data in API & database|
| Secrets Management        | Avoid hard‑coded credentials                               |
| Network & Host Hardening  | Restrict ports; run non‑root containers; apply patches     |
| Auditing & Compliance     | Enable audit logging; integrate with SIEM; configure TTLs  |
| Vulnerability Management  | Subscribe to advisories; enable Dependabot; patch promptly |

By following these guidelines and leveraging OpenCore’s built‑in security features, you can deploy a robust, compliant, and secure automation platform suitable for enterprise environments.