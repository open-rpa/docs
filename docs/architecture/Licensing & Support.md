---
layout: default  
title: Licensing & Support  
parent: Architecture  
nav_order: 9  
---

# Licensing & Support

## Open‑Source License  
OpenCore is released under the **Mozilla Public License 2.0 (MPL‑2.0)**. MPL‑2.0 is a file‑level copyleft license that permits combining MPL‑licensed code with proprietary software, provided any modifications to MPL‑licensed files remain open source. This ensures community contributions flow back into the core platform while allowing flexibility for integration into proprietary environments.

## Editions & Commercial Offerings  
OpenCore follows an open‑core business model: all core functionality is available under the MPL‑2.0 license, with optional enterprise‑grade features offered under a commercial license. There are no hidden proprietary modules—any commercial features are clearly marked and require a separate license to use in production.  

For organizations requiring enterprise‑grade SLAs, dedicated support, custom feature development, or advanced consulting, professional services are available through our commercial offerings. Contact our team for details on support plans, training, and custom engagements.

## Community & Support Resources  
For questions, troubleshooting, and community collaboration, the following resources are available:

- **Official Documentation** – Comprehensive guides, API references, and tutorials: https://docs.openiap.io  
- **Community Forum** – Ask questions and share use cases: https://discourse.openiap.io  
- **GitHub Discussions** – Engage with the community on product ideas: https://github.com/orgs/openiap/discussions  
- **GitHub Issues** – Report bugs or request features in each repository  
- **Releases & Changelog** – Track new versions and release notes:
  - https://github.com/open-rpa/openflow/releases  
  - https://github.com/openiap/rustapi/releases  
  - https://github.com/open-rpa/helm-charts/releases  

## Commercial Support  
Enterprises can purchase commercial support and professional services, including:

- SLA‑backed support with guaranteed response times  
- Custom feature development and integrations  
- On‑site or remote training workshops  
- Architecture reviews and performance tuning  

For inquiries and pricing, please visit: https://openiap.io

## Governance & Maintenance  
OpenCore is actively maintained by the OpenRPA community and core contributors. We follow a transparent release process, with:

- Regular minor and patch releases  
- Periodic Long‑Term Support (LTS) releases for stability  

Contributions are always welcome—please see our contribution guidelines for details on how to get involved.

## Telemetry & Analytics  
By default, OpenCore collects anonymous usage statistics to help improve the platform. You can opt out by setting the environment variable:

```bash
export ENABLE_ANALYTICS=false
```