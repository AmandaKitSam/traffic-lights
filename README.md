# The Traffic Lights Intersection Challenge

## By Amanda Sam

## Built with HTML5, CSS3 (+ CSS Flexbox, CSS @keyframes) and jQuery

### Introduction
- You are required to provide the code for an application that simulates a set of traffic lights at an intersection.

- The traffic lights are designated (N, S) and (E, W) like a compass.

### Requirements
- When switching from green to red, the yellow light must be displayed for 30 seconds prior to it switching to red. The lights will change automatically every 5 minutes.

- You're not required to optimize the solution, just focus on a functional approach to requirements.

- Provide the output for the light changes which occur during a given thirty minute period.

---

### For Demonstration Purposes

- Set the time frame of animations shorter to see: <br/>
Are the traffic lights animations working correctly for both North South and East West? (Yes)


## Interpretation

### First Approach of Solving the Problem - Using skills in jQuery for the animation

- Review the code: index.html, style1.css and main.js (the animation run for 6 times as required)

- Please visit the demo here: https://amandakitsam.github.io/traffic-lights/

### Second Approach of Solving the Problem - Using skills in CSS3 @keyframes for the animation

- `@keyframes` for the animation: controls the intermediate steps in a CSS animation sequence

- Review the code: index2.html and style2.css

### After Reviewing 2 Approaches to Solve the Problem:

- Using jQuery for this project - Set time efficiency

- Using CSS @keyframes for this project - Create smooth animation effects


## Implementation

### The Initial State:
- The first set of the traffic lights (North & South) are green. <br/>
  The second set of the traffic lights (East & West) are red.

### Step 1:
- The first set of the traffic lights (North & South) will stay green for 4 minutes & 30 seconds (270s).<br/>
(After 270s) Green -> Yellow. The yellow lights will stay for 30 seconds.

- The second set of the traffic lights (East & West) will stay red for 5 minutes (300s).

### Step 2:
- After 30 seconds, the first set of the traffic lights (North & South) will turn from yellow to red.

- At the same time, the second set of the traffic lights (East & West) will turn from red to green.

### Step 3:
- The second set of the traffic lights (East & West) will stay green for the next 4 minutes & 30 seconds.<br/>
(After 270s) Green -> Yellow. The yellow lights will stay for 30 seconds.

- The first set (North & South) will stay red for 5 minutes.

### Step 4:
- After 30 seconds, the second set of the traffic lights (East & West) will turn from yellow to red.

- At the same time, the first set of the traffic lights (North & South) will turn from red to green.

### Final:
- In thirty minute period (as the requirement), both sets of the traffic lights switch lights 6 times.

- A message will appear on the page at the end of the animation.<br/>
  "This is the end of the traffic lights animation."

-----------

#### The MIT License (MIT)

Copyright (c) 2017 Amanda Sam
