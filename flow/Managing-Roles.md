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
- **nodered admins**: Allows members to log into Node-RED instances.
- **filestore users**: Can upload and download files in OpenIAP Flow.
- **filestore admins**: Have full control over all files uploaded in OpenIAP Flow.

