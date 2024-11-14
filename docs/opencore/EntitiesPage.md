---
layout: default
title: Entities Page
parent: What Is OpenCore
nav_order: 14
---
# Entities Page

What are Entities?
==================
Entities are groups of data that compose a meaningful object inside OpenFlow - i.e., a workflow, a workflow instance, a user, etc. These groups of data are stored as [Documents](https://docs.mongodb.com/manual/core/document/) inside [Collections](https://docs.mongodb.com/manual/core/databases-and-collections/#collections) in MongoDB. `Collections` are analogous to tables in relational databases. Think of an `Entity` as a row inside a relational table. In layman terms, a `Collection` would correspond to a category inside your phonebook and an `Entity` would correspond to a single entry. Please check below for more on `Collections`, [Collections](#collections).

In OpenFlow, these `Collections` are grouped by their name inside the [Entities page](https://app.openiap.io/#/Entities/entities). Currently, there exist 10 groups, listed below.

Collections
===========
Collections are groups of documents in MongoDB, analogous to tables in relational databases. Collections do not require documents to have the same schema. However, it is possible to enforce that the collection only accepts a certain type of document (document's properties). This process is called Schema Validation.

For a comprehensive account on MongoDB Collections, please refer to the official [MongoDB webpage](https://docs.mongodb.com/manual/core/databases-and-collections/) (`https://docs.mongodb.com/manual/core/databases-and-collections/`).

below is a list of the default collections, you can always create more collections as needed.

agents
------
All agents objects and Package metadata (the actual package is stored in the Files collection) are saved here.
Note you cannot delete agents or packages here, you need to use the [Agents page](AgentsPage) for that.

audit
-----
This collection contains data on all authentication and orchestration actions attempts inside OpenFlow.

config
------
Contains all configuration objects releated to openflow.
This includes, but is not limited to [Federation Providers](FederationProviders), [Client Authentication Providers](ClientAuthPage) and 
[Resource Broker](ResourcePage) and the [Base Configuration](ConfigurationValues)

openrpa
-------
All objects pertaining to **OpenRPA** are found in this collection. Projects, Workflows, Detectors and Credentials are saved here.

openrpa_instances
-----------------
Here lie all instances of workflows invoked through **OpenRPA**. Each instance will record the start, end time, status and while running it will also contain all variables and workflow information, need to re resume a workflow in case the Windows Machine with OpenRPA restarts while the workflow is running.

entities
--------
This collection contains all objects serialized into OpenFlow by using the **OpenRPA.OpenFlowDB** activities.



users
-----
This collection contains all users and roles automatically created by Node-RED or through OpenFlow itself.

workflow
--------
This collection contains all queues created from Node-RED's `workflow in` nodes.

workflow_instances
------------------
Here lie all instances of workflows invoked through the [Workflows page](http://app.openiap.io/#/Workflows) (`http://app.openiap.io/#/Workflows`).

forms
-----
This collection holds all Forms created inside OpenFlow.

nodered
-------
Lists config variables for Node-RED.


Usages
======
The user can make use of the [OpenRPA.OpenFlowDB](#openrpa-openflowdb) activities to query these entities and manipulate them accordingly.

