---
layout: default
title: Example Workflows
parent: What Is NodeRED
---

# Using OpenCore Forms

## Create a Form in OpenCore

In this section, users will learn how to create a Form in OpenCore. Refer to the Forms section for more information.

1. Navigate to the [Forms page](http://app.openiap.io/#/Forms) and click the `Add Form` button.
   ![Add Form Button](../../images/nodered_openflow_forms_click_add_form_button.png)

2. Drag a `Text Field` form to the Form designer.
   ![Drag Text Field](../../images/nodered_openflow_forms_drag_textfield_form.png)

3. Change the `Label` parameter to `Please enter 'Hello from OpenCore!' below`.
   ![Change Label](../../images/nodered_openflow_forms_change_label_textfield_form.png)

4. Click on the `API` tab and change the `Property Name` to `hello_from_openflow`.
   ![Change Property Name](../../images/nodered_openflow_forms_openflow_change_property_name.png)

5. Click the `Save` button, set the Form name as `hellofromopenflow`, and save it.
   ![Save Form](../../images/nodered_openflow_forms_set_name_and_save.png)

Congratulations! You have successfully configured a Form in OpenCore.

## Configure Form in Node-RED

Next, learn how to configure the Form in Node-RED.

1. Create a new flow in Node-RED and rename it to `Forms`.
   ![Rename Flow](../../images/nodered_openflow_forms_rename_flow.png)

2. Drag a `workflow in` node to the workspace.
   ![Drag Workflow In](../../images/nodered_openflow_forms_drag_workflow_in.png)

3. Set up the `workflow in` node properties.
   ![Configure Workflow In](../../images/nodered_openflow_forms_configure_workflow_in.png)

4. Drag a `switch` node and configure it for processing the variable returned from the Form.
   ![Configure Switch Node](../../images/nodered_openflow_forms_configure_property_switch.png)
   ![Configure Cases Switch](../../images/nodered_openflow_forms_configure_cases_switch.png)

5. Drag `workflow out` nodes and configure them based on the user input.
   ![Drag Workflow Out](../../images/nodered_openflow_forms_drag_first_workflow_out.png)
   ![Configure Workflow Out](../../images/nodered_openflow_forms_configure_first_workflow_out.png)
   ![Drag Second Workflow Out](../../images/nodered_openflow_forms_drag_second_workflow_out.png)
   ![Configure Second Workflow Out](../../images/nodered_openflow_forms_configure_second_workflow_out.png)

6. Add a `debug` node to observe the message passed into the Form.
   ![Drag Debug Node](../../images/nodered_openflow_forms_drag_debug_node.png)

7. Deploy the configuration.
   ![Flow Configuration Finished](../../images/nodered_openflow_forms_flow_configuration_finished.png)

Now your Form is configured in Node-RED and ready to be used!

# Invoking the Form

In this section, users will learn how to invoke the Form just created using Node-RED.

1. Drag an `inject` node to the workspace.
   ![Drag Inject Node](../../images/nodered_openflow_forms_drag_inject_node.png)

2. Drag an `assign` node to the workspace and wire it to the `inject` node.
   ![Drag Assign Node](../../images/nodered_openflow_forms_drag_assign_node.png)

3. Configure the `assign` node's properties to assign the Workflow to `openflowformsexample`.
   ![Configure Assign Node](../../images/nodered_openflow_forms_configure_assign_node.png)

4. Click the **Deploy** button to update the Flow.
   ![Click Deploy Button](../../images/nodered_openflow_forms_click_deploy_button_invoke.png)

5. Click the button inside the `inject` node to assign an instance of the Workflow to the `users` role.

6. Navigate to OpenCore's home page to see the instance of the Workflow.
   ![OpenCore Homepage](../../images/nodered_openflow_forms_homepage.png)

7. Test the Form by entering `Hello from OpenCore!` in the text field and clicking the **Submit** button. A debug message will appear in Node-RED.
   ![Debug Message](../../images/nodered_openflow_forms_debug_message.png)

This completes the process of invoking the Form using Node-RED. Users can now test and interact with the Form they have created.


# Email Receive, Send

There are two types of "email" nodes in Node-RED: "email watcher" for receiving emails and "email sender" for sending emails.

## Receive Emails

### Setting Up Email Watcher
The email watcher node searches for new emails from an IMAP server and forwards them as messages.

- **Configuration**:
  - Provide e-mail ID and password.
  - Set "Disposition" to "Mark Read" to avoid constant messages about the same emails.
  - Use the suggested port (993).
  - Some e-mail services require enabling less secure apps for access.
  ![Email Watcher Node](../../images/emailin_node.png)

### Redirecting Emails
A "switch" node filters messages based on properties like `msg.payload`, `msg.date`, or `msg.from`. For instance, `msg.date` can be used to delay redirecting weekend emails to Monday.

![Email Redirecting](../../images/email_complete.png)

## Send Emails

### Using Email Sender
The email sender node sends an email to the specified address. It requires an e-mail address and password of the sender.

![Email Sender Node](../../images/emailout_node.png)

# Creating an HTTP Endpoint

## API's Basic Structure
To create an HTTP endpoint in Node-RED, use "HTTP In" and "HTTP Response" nodes.

### Steps
1. Drag the "HTTP In" and "HTTP Response" nodes into the Workspace and connect them.
2. Add a "Template" node for HTML content between these nodes.
3. Configure the "HTTP In" node:
   - Method: "GET"
   - URL: "/homepage"

![HTTP Endpoint Basic Structure](../../images/httpendpoint-1.png)

## Creating a Database and Adding New Items
To add items to a MongoDB database, use a "HTTP In" node with a "POST" method and an "Add" node from the API category.

### Steps
1. Configure the "HTTP In" node with the method "POST" and URL "/newuser".
2. Configure the "add" node with collection details and input/output fields.
3. Test the API using an API tester with a "POST" request and JSON formatted body.

![Adding New Items](../../images/httpendpoint-2.png)

## Get a Full List of Items
Retrieve a list of all items using the "HTTP In" node with a "GET" method and a "Get" node.

### Steps
1. Set the method of the "HTTP In" node to "GET" and URL to "/listusers".
2. Configure the "get" node to retrieve the desired information.

![Getting Full List of Items](../../images/httpendpoint-3.png)
