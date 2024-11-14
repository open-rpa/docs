---
layout: default
title: Managing Roles in OpenIAP Flow
parent: What Is OpenIAP Flow
nav_order: 2
---
# Managing Roles in OpenIAP Flow

## What are Roles?
Roles in **OpenIAP Flow** are sets of privileges and permissions that can be assigned to users or other roles. These roles are crucial for controlling access to various types of data within OpenIAP Flow, including projects/workflows and queues.

## Nested Roles
In OpenIAP Flow, roles can be nested up to three levels by default, although this limit can be adjusted by the system administrator. Nested roles allow for a more granular and hierarchical organization of permissions and access rights.

## RPA Roles
Roles can also be designated as OpenRPA roles. These special roles are used to group multiple OpenRPA robots, enabling the distribution of Invoke OpenRPA calls among all members. This maximizes robot utilization and allows for multiple workflows to be run in parallel.

## List of Built-in Roles in OpenIAP Flow
OpenIAP Flow includes several built-in roles, each with specific permissions:
- **users**: Represents all users created in OpenIAP Flow.
- **admins**: Members can manage all aspects of OpenIAP Flow.
- **customer admins**: Members can manage all customers, if multi tenancy is enabled
- **resellers**: Members (who is also customer admin) can create new customers.
- **workitem queue admins**: Members can access all workitem queues and all workitems in those queues
- **workitem queue users**: Members can create new workitem queues
- **filestore users**: Can upload and download files in OpenIAP Flow.
- **filestore admins**: Have full control over all files uploaded in OpenIAP Flow.
- **nodered admins**: Allows members to log into Node-RED instances.
- **nodered api users**: Allows members to access any http endpoint exposed from all Node-RED workflows.



- **robot admins**: legacy role, not in use anymore
- **robot users**:  legacy role, not in use anymore
- **robot agent users**:  legacy role, not in use anymore
- **nodered users**:  legacy role, not in use anymore
- **personal nodered users**:  legacy role, not in use anymore