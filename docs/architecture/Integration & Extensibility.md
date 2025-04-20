---
layout: default
title: Integration & Extensibility
parent: Architecture
nav_order: 4
---

# Integration & Extensibility

OpenCore is designed as an integration hub and extensible automation platform. Out of the box, it connects to a wide range of systems and protocols; when you need something custom, you can build your own connector or plugin in your language of choice.

---

## Built‑in Integrations

### Databases
- **MongoDB** (native driver)  
- **PostgreSQL**, **MySQL**  
- **Redis** (caching, pub/sub)  

### Messaging & Event Streaming
- **RabbitMQ** (AMQP)  
- **Apache Kafka**  
- **MQTT**  

### Cloud Services & Storage
- **AWS S3**, **Azure Blob Storage**, **GCP Cloud Storage**  
- **AWS SQS** / **SNS**, **Azure Service Bus**  

### File Transfer
- **FTP / SFTP**  
- **WebDAV**  
- **Local file system**  

### HTTP, gRPC & APIs
- **REST** (JSON)  
- **SOAP** (WSDL)  
- **gRPC** (HTTP/2)  
- **GraphQL** (HTTP)  

### Email & Notifications
- **SMTP**  
- **Slack**, **Microsoft Teams**  
- **Twilio SMS** / **Voice**  

### Identity & Authentication
- **LDAP / Active Directory**  
- **OAuth2** / **OpenID Connect**  
- **API keys**, **JWT**  

### UI & Workflow Engines
- **Node‑RED** (flows can be deployed/pulled via API)  
- Custom web apps built in any frontend framework  

---

## Extending OpenCore

When built‑in connectors don’t cover your use case, you can write your own in any supported language. Every custom integration is packaged as an “agent” and runs alongside the Core.

### Connector SDKs

| Language   | Package / Crate                                                                 | Example                                      |
|------------|---------------------------------------------------------------------------------|----------------------------------------------|
| Rust       | [openiap-client crate](https://crates.io/crates/openiap-client)                  | [rusttest example](https://github.com/skadefro/rusttest)        |
| Node.js    | [openiap npm package](https://www.npmjs.com/package/openiap)                     | [nodetest example](https://github.com/skadefro/nodetest)        |
| Python     | [openiap-edge on PyPI](https://pypi.org/project/openiap-edge/)                  | [pythontest example](https://github.com/skadefro/pythontest)     |
| .NET       | [openiap NuGet package](https://www.nuget.org/packages/openiap/)                | [dotnettest example](https://github.com/skadefro/dotnettest)     |
| Java       | [openiap client on Maven Central](https://central.sonatype.com/artifact/io.openiap/client) | [javatest example](https://github.com/skadefro/javatest)        |
| PHP        | [openiap client on Packagist](https://packagist.org/packages/openiap/client)    | [phptest example](https://github.com/skadefro/phptest)          |
| C / C++    | [openiap recipe on Conan](https://conan.io/center/recipes/openiap)               | [ctest example](https://github.com/skadefro/ctest)              |

---

## Node‑RED Integration

Node‑RED instances can be managed through OpenCore and used to quickly build integrations to almost any system. With OpenCore’s built‑in nodes, leveraging those integrations from other parts of the platform is extremely easy and intuitive.

If you need to create your own nodes for Node‑RED, see our example [node-red-contrib-vat-lookup](https://github.com/open-rpa/node-red-contrib-vat-lookup). Node‑RED also has excellent guides and documentation on its own site: https://nodered.org/docs/.

---

## Web Hosting

Need to host a webpage? Or build your own frontend for OpenCore? Not a problem – you can run or host any number of websites inside OpenCore, and you can easily replace the frontend of OpenCore as well. We provide template projects to get you started:

- [Svelte 5 template](https://github.com/openiap/core-web)  
- [Svelte 4 template](https://github.com/openiap/core-web-arch)  
- [Vue 3 template](https://github.com/openiap/vue3-web-template)  
- [AngularJS template](https://github.com/open-rpa/openflow-web)  
- [Angular 11 template](https://github.com/open-rpa/openflow-web-angular11-template)  

---

## Best Practices

- **Stateless Connectors**: Keep each invocation independent to simplify scaling and retries. Store state in the database or work item queues.  
- **Secrets Management**: Always store credentials in OpenCore using the Credentials page, and enable encryption for sensitive fields.  
- **Versioning**: Follow semantic versioning for your connectors. Roll out agent upgrades in a controlled manner. Use OpenCore’s Git server when possible to simplify backups and automate deployments.  
- **Monitoring**: Emit custom metrics and spans from your code (all SDKs support metrics and tracing) in addition to logs. Integrate with your observability stack for end‑to‑end visibility.

---

## References

- **Rust SDK**: https://github.com/openiap/rustapi  
- **Core Engine**: https://github.com/open-rpa/openflow  
- **Docker Samples**: https://github.com/open-rpa/docker  
- **Helm Charts**: https://github.com/open-rpa/helm-charts  

Use this page as your starting point for integrating OpenCore into any environment or extending it to fit your organization’s unique needs.