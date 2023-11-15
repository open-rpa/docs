---
layout: default
title: OpenRPA User Interface
description: Breakdown on the OpenRPA user interface and basics of the workflow designer
parent: What Is OpenRPA
---
# OpenRPA Interface Guide

## Activities/Toolbox

The toolbox in **OpenRPA** is akin to a physical toolbox, housing various tools (like a screwdriver or drill) needed for different tasks. In OpenRPA, this toolbox contains all the possible activities, each categorized for specific uses.

## Designer

The designer is the core area in OpenRPA where you design and implement tasks. It's composed of several components:

![OpenRPA's Toolbox](../../images/openrpa_sections.png)

### Toolbox & Snippets sidebar

- This sidebar is filled with activities and code snippets to help users learn and implement various tasks.
- Activities can be dragged into the `Workspace` for use.
- More detailed explanations of these activities are in the **Toolbox Detailed** section.

![OpenRPA's Toolbox](../../images/openrpa_designer_toolbox.png)

### Workspace

- Here, you organize and execute the activities for your workflow.
- Activities are executed sequentially upon pressing **Play** or `F5`.
- Errors are displayed in the Output bar if not handled by specific activities like **TryCatch** or **Throw**.
- Sequences within the workspace have their own scopes.

![OpenRPA's Workspace](../../images/openrpa_designer_workspace.png)

#### Nesting Sequences

- Users can nest **Sequence** activities for better workflow organization.

![Nesting sequences in OpenRPA](../../images/openrpa_designer_workspace_nesting_sequences.png)

#### Comment Out Activity

- Use **Comment Out** to prevent execution of activities within it.

![Commenting activities out in OpenRPA](../../images/openrpa_designer_workspace_comment_out.png)

### Properties Box

- Each activity has a properties box with parameters to alter its function.
- Common properties include **Input**, **Output**, and **Misc**.
- All activities share the `Displayname` property, allowing you to rename them in the workspace.

![Properties box in OpenRPA](../../images/openrpa_property_box.png)

### Output Bar

This bar has three sections: `Logging`, `Output`, and `Workflow Instances`.

- **Logging**: Shows workflow outputs and any errors or exceptions.

  ![OpenRPA Logging Section](../../images/openrpa_logging_section.png)

- **Output**: Displays outputs from executed workflows.

  ![OpenRPA Output Section](../../images/openrpa_output_section.png)

- **Workflow Instances**: Catalog of workflow results, showing their status (queued, idle, complete, failed, or in progress).

  ![OpenRPA Workflow Instances](../../images/openrpa_workflow_instances_section.png)

### Connection Bar

- Shows the connection status with the **OpenFlow** web service and the status of `NM` and `SAP` plugins.

![OpenRPA Connection Bar](../../images/openrpa_connection_bar.png)

# Variables, Arguments
====================

![Variables, Arguments & Import box](../../images/openrpa_variables_arguments_box.png)
*Variables, Arguments & Import box.*

## Variables
-------------
Variables, as their very name states, are changeable values assigned to aliases inside the execution of a sequence. These aliases can be used in mathematical or computational expressions. For example, if you want to save a variable named "price" to assign the price of a product along a sequence. You can use the assign activity and an expression to assign its value.

Upon inserting an activity with an input box, if you mention a non-existent variable and want to easily create it you can press `Ctrl+K` and a dropdown will appear with many types of variable to be selected.

Variables in OpenRPA are statically typed and their type can be selected from the **variable type** field inside the argument box.

### Variable use case: Saving the result of a computation
A use case of a variable is demonstrated next. In this example, we will save the result of a computation into a variable.

1. First, drag an **Assign** activity to the main sequence.
2. Then, type a name for the variable and press `Ctrl+K` to create it automatically. In this case, the chosen name is `resultOfComputation`.
3. Afterwards, assign the result of the computation (`2*6`)[right-hand side] to the variable [left-hand side].

The user now may notice that a warning now appears in the right-hand side of the activity. That is because the expression is a `Int32` type, the variable `resultOfComputation` is a `string` and Microsoft Workflow Foundation is strongly typed. if the user has no experience with programming a thorough explanation is given on **Appendix A**. For now, just select the type of the variable as `Int32` in the **Variable type** parameter inside the **Variables, Arguments & Imports box**, as seen in the picture below.

![Change Variable Type](../../images/openrpa_variables_arguments_variable_use_case_change_variable_type.png)
*Change Variable Type*

## Scope
---------
It refers to the reach of the objects contained within a sequence. If you have some knowledge of programming and scope, you can skip this part.

First, let's think of it as sets. In this example, we are going to use variables since arguments function as if they were globally scoped. 

Per the code block below, one may observe that sequence **B** has access to only variables x, - but since **B** is inside the scope of **A**, it makes sequence **B** to have access to all variables {n, p, x, y}. In simple words, sequences can be used to organize variable scopes and to group activities, just like a developer would normally do in a programming language using functions to avoid monolithic code. 
```
Sequence A {

	variables = n, p

	Sequence B {

		variables = x, y

	}
}	
```

## Arguments
-------------
Arguments are simply variables that can be passed to other sequences, external services, or workflows and have global scope. They act exactly as variables, except for that single characteristic. If you pass an argument to a sequence created within another sequence, the argument is still valid within the outer sequence. If you pass a variable, that does not happen.

It is important to notice that both variables and arguments can have a **default value**, which are assigned to both if a value isn't necessarily assigned during the execution of the sequence. It is also required for arguments with the **isRequired** property checked to have an 'In' value, i.e., already passed or having a default value.

Similarly to Variables, Arguments in OpenRPA are statically typed and their type can be selected from the **variable type** field inside the argument box.

## Output (In - In/Out - Out)
Output refers to the way a variable or argument is handled during run-time. They are classified below.

### In
In this case, the argument is received from an external service and is only given an input value that can't be returned after the execution of the workflow.

### In/Out
In this case, the argument can both be given an input value or be changed and outputted after the execution of the workflow.

### Out
In this case, the argument returns a value to an external service, and it can't be changed after the execution of the workflow.

### Properties
This turns the argument into a `Property`, which means it has the same features of an **In/Out** argument but can also have a default value.

## Imports
-----------
Imports tab shows all the modules used and referenced in the selected sequence.
