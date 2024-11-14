---
layout: default
title: Security Model
parent: What Is OpenIAP Flow
nav_order: 6
---
## Security Model

When talking about security, you need to look at it from multiple angels and in multiple layers.

OpenFlow does not care about the physical layer ( But we do support running OpenFlow in [Trusted execution environment](https://en.wikipedia.org/wiki/Trusted_execution_environment) So if you are sensitive about code getting changed or injected you can run secure booted environments and have both the repositories, the packages and images digitally signed )

Next is security, as in fault tolerance. Nothing is 100% secure, nothing can be guaranteed to never break down, but we can limit the impact using fault tolerance. The entire system was built to run in [docker](https://openflow.openiap.io/dockercompose)/swarm/[kubernetes](https://github.com/open-rpa/helm-charts/), but can also be deployed as pure [npm packages](https://openflow.openiap.io/npmopenflow) and can run on raspberry pi, Linux, mac and windows. Everything can run on a single pc/server or distributed. Every single part of the OpenFlow stack support scaling out, there for you can create a system that is as fault tolerance as you want. You fault domains can also span multiple data center and/or cloud providers, and multiple physical location. For distributed deployments, we support a [mesh topology](https://www.google.com/search?q=mesh+topology) where you can setup either allow traffic and events to flow only one or both ways. Each physical location can  be configured to allow running disconnected from the network and/or internet ( as long as you have enough storage on site ) and supports prioritizing data and events, both doing normal operations and when syncing up after an network outage.

When deploying remote NodeRED's we support running disconnected from the network and/or internet, and they will automatically sync up when connection is re-established.

When deploying using docker or kubernetes, we use traefik as an ingress controller and do tight control on what "the world" can access. If not using docker, make sure to implement your own protection on who can access MongoDB , RabbitMQ and other parts of the system.

OpenFlow allow signing in with username and password (local provider) but we encourage users to disable local login and only allow signing in using federated providers ( like google, azure/office 365, local ADFS servers or one one of the [500+ supported providers](http://www.passportjs.org/packages/) ) and then use two-factor authentication (2FA) on any account that has access to sensitive data or users.

OpenFlow can be used as an [Identity Provider](https://en.wikipedia.org/wiki/Identity_provider) for other systems as well. ( using SAML, OAuth 2  or Open ID Connect). This is handy to keep in line with the [least privileges concept](https://en.wikipedia.org/wiki/Principle_of_least_privilege) but can also be used to "bundle" multiple user credentials into a single identity.

Every single component in the platform can be configured to allow allows send and transmitting data using HTTPS/TLS, but by default this is terminated in [traefik](https://traefik.io/blog/traefik-2-tls-101-23b4fbee81f1/) and remote endpoints. All data (or parts of), except file uploads, can be encrypted using EAS256 ( can be customized and/or extended to use an existing PKI infrastructure )

The system insensitive you, to use a strict [least privileges concept](https://en.wikipedia.org/wiki/Principle_of_least_privilege). Therefor all requests will bring it's token with it, to ensure all requests run in context of the user and not as a service account, or with elevated privileges.

When deployed on docker (or using your own load balancer) you can enable load sharing amongst all API nodes. Since all traffic is based on web sockets there is a good chance some API nodes will be more busy than others. To distribute this, we can enable the API nodes to share all work amongst them using the message queue. This also allows you to prioritize all commands and work.

By design the ONLY thing you need to backup is the MongoDB database ( and you values file for the helm chart ). For certain installations it can make sense to enable state in RabbitMQ, to preserve queues doing restart, in that case you should also consider backing up your persistent storage for those. By default we don't save metric/span/log data, but you can enable elastic search or Casandra to store those for a period of time, (default 14 days). If relevant you should also backup that data. When designing reports and dashboard in Grafana, you should either backup those up using the web interface or backup the persistent storage for each Grafana node.