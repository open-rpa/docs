---
layout: default
title: Flow, Subflows and Nodes
parent: What Is NodeRED
---

# Flow, Subflows, Nodes and Messages

This section is mostly based on [Node-RED](https://nodered.org/docs/user-guide/editor)'s documentation. Please refer to the link for further details.

## Flows

A `Flow` is a workspace where `Nodes` are organized. Each `Flow` is represented by a tab with its name; a description is provided in the *Information Sidebar*. All the `Nodes` within a `Flow` share the same *Flowscope Context*, meaning they have access to the same context values.

New `Flows` are created by clicking the "plus" button in the top bar. To edit a `Flow`'s properties, users can double-click on its tab. `Flows` can be disabled via the toggle button at the bottom of the dialog box.

## Subflows

`Subflows` are collections of `Nodes` grouped within a single `Node`. They aim to reduce visual complexity or to reuse node collections. Created `Subflows` become a new `Node` in the *Palette*.

To create a blank `Subflow`, select 'Subflow -> Create subflow' in the menu. To create a `Subflow` from existing `Nodes`, select the `Nodes` and choose 'Subflow -> Selection to Subflow'.

## Nodes

`Nodes` are the visual representation of actions, chained together via wires to create a flow. Wires connect to the `node`'s ports. Each `node` can have one input port and several output ports.

Icons to note:
- Blue circle: undeployed changes
- Red triangle: errors within the `node`
- Icon and status message: runtime status

Double-clicking on a `node` opens its *Properties*, *Description*, and *Appearance*. Nodes can be disabled via a button in the dialog box.

## Messages

`Messages` are JavaScript objects and can have any properties. They are the units that pass between `Nodes`.

The most used property is the *payload* (`msg.payload`). It's the default property for passing data between `Nodes`. All JavaScript value types are accepted.

JSON strings must be converted into JavaScript objects before accessing their content.

For more on `Messages`, visit [Node-RED's page on messages](https://nodered.org/docs/user-guide/messages).
