---
layout: page
title: Recording with the robot
description: How to recording with the robot works
parent: What Is OpenRPA
nav_order: 3
---
## Recording

For troubleshooting tips for selectors

[![For troubleshooting tips](https://img.youtube.com/vi/HB-uHepC3xE/0.jpg)](https://www.youtube.com/watch?v=HB-uHepC3xE)  

Recording with Image recognition

[![For troubleshooting tips](https://img.youtube.com/vi/yhPGw9Rlgmc/0.jpg)](https://www.youtube.com/watch?v=yhPGw9Rlgmc)  

Getting start with recording in SAP

[![Getting start with recording in SAP](https://img.youtube.com/vi/4VJ2Q4mPWnk/0.jpg)](https://www.youtube.com/watch?v=4VJ2Q4mPWnk)  


### Using OpenRPA Recorder

You start recording by clicking the record button. 

![1559201989637](recording/1559201881466.png)

The robots UI will minimize and every click you make will be caught by the robot. The robot will try and determine what is the best strategy for locating the element you clicked on, and insert an activity in the designer that matches. The robot will add activities under the current selected activity and/or inside the currently selected sequence. So recording only works inside sequences, if you select the background, or have a flow diagram or state machine selected, nothing will be added.

You stop the recording by clicking the cancel key (the escape key per default)

Each recording plugin have the option to detect if you click a input field. In that case the robot will prompt you for an value to insert into this field, instead of just clicking it

![1559202596790](recording/prompt.png)

If you press the cancel key (Esc), the robot will revert back to adding a click for the element.

While recording the robot will also catch all keyboard presses, and add them to an Type Text activity, this will send the sequence of keys to the active window when re-played. Keep in mind, this is not bound to a specific element, so if nothing has focus, the input might be "lost", try to always assign input using item.Value instead of Type Text, but for those cases where using a shortcut key is more handy, feel free to use it.

While recording, have patience. Do one click at the time, wait at least 1 second between each click to allow the robot to process your last click ( you might have noticed that every time you click there is a small delay, that is the robot working behind the scene )