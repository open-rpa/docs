---
layout: default
title: Serializable vs Non-Serializable
description: Explain workflow State and Variables
parent: What Is OpenRPA
---
## Serializable vs Non-Serializable Arguments
----------------------------------------------
Microsoft Workflow Foundation (MWF), the technology on which **OpenRPA** is based, categorizes variables/arguments into two different groups: `Serializable` and `Non-Serializable`. For the majority of workflows, understanding the differences is not necessary, but there are cases where knowing the technical limitations of non-serializable objects might explain why your workflow or process is not working as expected.

In short: non-serializable objects, as the name suggests, cannot be serialized. This means these objects cannot be saved or transmitted over a network. Consequently, a workflow state cannot be saved if the workflow contains any non-serializable variable/argument, and invoking workflows with non-serializable arguments is not supported. 

Here are some limitations users may face when dealing with workflows containing non-serializable variables/arguments and some suggested workarounds:

### Saving workflow states

When **OpenRPA** is connected to an **OpenFlow**, workflow states are saved automatically in **OpenFlow** whenever specific activities¹ are reached. These states exist to indicate the current situation relevant to a workflow instance, such as the designer layout (activities, sequences) being run, the variables and arguments and their current values, etc. Hence, if the workflow contains non-serializable objects such as a `DataTable`, the state cannot be saved.

*¹ - All the activities that "go idle" (For instance `Detector`, `Delay`, `Persist` and all the `Invoke ` activities*

*Workaround*: Split complex workflows into smaller workflows, leaving the smaller workflows to manage the non-serializable objects. That way if an unexpected interruption occurs, you will not lose all the data.

### Remote OpenRPA / invoking with non-serializable arguments
### Invoke Openflow / Node-RED invoke and data return

If you wish to use the one of the `Invoke ` Activity, be aware that the workflow being invoked may not use non-serializable arguments. As the destination computer / **OpenRPA** is different than the source **OpenRPA**, the non-serializable arguments cannot be passed around and thus the invoking will fail.

Similarly, when using the `Invoke Openflow` activity to invoke a flow in **Node-RED**, non-serializable objects are not supported as arguments. An exception is the `DataTable` type; **OpenRPA** will attempt to convert these to `JArray Objects` before contacting **Node-RED** and convert it back to `DataTable` when the data is returned / node `workflow out` is used.

*Workaround*: Use the activities from `OpenRPA.OpenFlowDB` toolbox to upload files/update data/create entities and collections in **OpenFlow** MongoDB. Then, on the destination computer, access the data by querying **OpenFlow** MongoDB. This way, the entire `Data/DataSet/DataTable` (any non-serializable object) is stored within MongoDB and the parameter passed during the invoke can be the `_id` or some other identifier.

*Workaround2*: Convert the non-serializable object into a serializable one, like a base 64 string, then pass it as a parameter and convert it back if needed.
