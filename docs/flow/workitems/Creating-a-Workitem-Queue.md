From OpenCore's web interface you can start by adding a new workitem queue.
Click `Work item Queues` in the main menu, then click `+` button to add a new queue.

![Alt text](plusbutton.png)

- **Name**: Each queue must have an unqieu name across the entier installation, so in multi tenant envoriments try and prefix all your queues with a meaning short prefix.
- **maxretries**: Define the number of time's we will retry a workitem that failed with an `Application Error` before going into to failed state.
- **retrydelay**: Is how many seconds to add to "next run" date time field. This ensure we wait a little before retrying the workitem.
- **initialdelay**: Use this, when you want to force a fixed number of seconds delay on all new workitems.

# OpenRPA specefic settings

- **Project**: To group OpenRPA workflows together with a Workitem Queue, you can link the queue to a specefic project inside OpenRPA. If you do this, you should update the permissions on the queue to match the permission on the project.
- **Robot/Role**: Notify this Robot or Role when new items are waiting in the queue. 
- **Workflow**: The OpenRPA workflow to run, when new items are waiting in the queue. 
Both `Robot/Role` and `Workflow` must have a value before this will work. You can use [RPA roles](flow/Managing-Roles) to spread the workload between multiple robots.

# Agent and NodeRED specefic settings
- **amqpqueue**: OpenCore will periodicly send an empty message to this queue, when there are new items ready to be processed in the queue. This is how we can allow a NodeRED workflow or an deamon agent package wait for items without having to "test" pull at certain intervals. This is always the prefere way of implementing this.

# Agent specefic settings
- **amqpqueue**: What agent to notify about specefic workiems ready to be processed.
- **package**: What package to run with each workitem.
An alternative way of triggering an agent, without having to create your own code to handle popping items of a workitem queue is to use these two settings. This will tell the selected agent to run the select package every time a new item is added to the message queue. This is not suitable for cases were you have a lot of messages i the queue. 

# Process flow settings
- **on success, push to**: As soon as a workitem changes from a different state to `successful` a copy of the workitems, and links to the files associated with **this** workitem, will be added to this queue. 
- **on failure, push to**: As soon as a workitem changes from a different state to `failed` a copy of the workitems, and links to the files associated with **this** workitem, will be added to this queue. 