---

layout: default
title: Security Model
parent: What Is OpenCore
nav_order: 6
---
## Security Model

When talking about security, you need to look at it from multiple angels and in multiple layers.

OpenCore does not care about the physical layer ( But we do support running OpenCore in [Trusted execution environment](https://en.wikipedia.org/wiki/Trusted_execution_environment) So if you are sensitive about code getting changed or injected you can run secure booted environments and have both the repositories, the packages and images digitally signed )

Next is security, as in fault tolerance. Nothing is 100% secure, nothing can be guaranteed to never break down, but we can limit the impact using fault tolerance. The entire system was built to run in [docker](https://openflow.openiap.io/dockercompose)/swarm/[kubernetes](https://github.com/open-rpa/helm-charts/)/OpenShift. Everything can run on a single pc/server or distributed. Every single part of the OpenCore stack support scaling out, there for you can create a system that is as fault tolerance as you want. You fault domains can also span multiple data center and/or cloud providers, and multiple physical location. For distributed deployments, we support a [mesh topology](https://www.google.com/search?q=mesh+topology) where you can control if traffic flows only one or both ways. Each physical location can be configured to allow running disconnected for perioids of time. The entire platform can run air gaped (completly disconnected from the internet). The platform supports prioritizing data and events.

OpenCore allows signing in with a username and password (local provider), but we encourage users to disable local login and only allow signing in using federated providers (such as Google, Azure/Office 365, or local ADFS servers). This way, you only have to manage users and their permissions in one place, and you can enable multiple layers of security, such as two-factor authentication (2FA).

OpenCore can be used as an [Identity Provider](https://en.wikipedia.org/wiki/Identity_provider) for other systems. Client applications and websites, can use OpenCore as an federation provider using SAML, OAuth 2  or Open ID Connect. This is handy to keep in line with the [least privileges concept](https://en.wikipedia.org/wiki/Principle_of_least_privilege). Users in OpenCore can have multiple federation providers associated, so you can also use OpenCore to "bundle" multiple user credentials into a single identity.

Every single component in the platform can be configured to use send and transmitting data using HTTPS/TLS. All clients will by default use gGPC for talking to OpenCore, but can use WebSocket, TCP sockets, named pipes and REST as well. 

All data (or parts of it), can be encrypted using EAS256 encryption, to avoid storing sensetive data in pure text in the database.

The system insensitive you, to use a strict [least privileges concept](https://en.wikipedia.org/wiki/Principle_of_least_privilege). Therefor all requests will bring it's token with it, to ensure all requests run in context of the user and not as a service account, or with elevated privileges.

All API nodes are stateless for easy load balencing. Each API node will forward all requests to a message queue, that will then distribute execution of the call to each API node, this way all API nodes will share the work amongst them, even if one client is demanding much more than others, or a single API node is getting more clients that others. 

By design you ONLY need to backup the MongoDB database. If you are also collection Observabilty data, you could consider also backing those up. When running in kubernetes certain agent can be allowed access to persistent storage. If you do, and that data is sensetive, you should backup this as well. For easy management of backups on kubernetes, our helm chart support managing snapshots using [snapscheduler](https://backube.github.io/snapscheduler) but for disaster recovery you should still ensure you also have external backup of those snapshots.