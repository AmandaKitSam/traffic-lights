# The Traffic Lights Intersection Challenge

## By Amanda Sam

### Introduction
- You are required to provide the code for an application that simulates a set of traffic lights at an intersection.

- The traffic lights are designated (N, S) and (E, W) like a compass.

### Requirements
- When switching from green to red, the yellow light must be displayed for 30 seconds prior to it switching to red. The lights will change automatically every 5 minutes.

- You're not required to optimize the solution, just focus on a functional approach to requirements.

- Provide the output for the light changes which occur during a given thirty minute period. You must provide unit tests for all logic.

- Create a repo on bitbucket/github and provide the link as well as instructions on how to run.


## Interpretation

### My 1st Approach of Solving the Problem - Using skills in HTML5, CSS3 (+ Flexbox) and jQuery

- Review the code: index.html, style1.css and main.js

- Please visit the demo here: https://amandakitsam.github.io/traffic-lights/

### My 2nd Approach of Solving the Problem - Using skills in HTML5, CSS3 (+ Flexbox) and @keyframes for the animation

- Instead of using jQuery for the traffic lights animation, I also tried to use `@keyframes` for the animation.

- Review the code: index2.html and style2.css

### After reviewing 2 approaches to solve the problem, I found that using jQuery to solving the problem was a lot quicker, and the code was straight forward.
- Tried 2 approaches (`@keyframes` and `jQuery`) of solving the problem - look at the problem in a different way


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
  "This is the end of the thirty minute period."

-----------

#### The MIT License (MIT)

Copyright (c) 2017 Amanda Sam
