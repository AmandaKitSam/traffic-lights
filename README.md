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

-----------------------------------------------------

### My 1st Approach of Solving the Problem - Using skills in HTML5, CSS3 (plus using Flexbox) and jQuery

- Review the code: index1.html, style1.css and main.js

- Please visit the link here:


### My 2nd Approach of Solving the Problem - Using skills in HTML5, CSS3 (plus using Flexbox and @keyframes)

- I also tried to use CSS3 `@keyframes` for the traffic lights animation.

- Review the code: index2.html and style2.css

### After reviewing 2 Approaches to solve the problem, I found that using jQuery to solving the problem was a lot quicker, and the code was straight forward.
- Tried 2 approaches (`@keyframes` and `jQuery`) of solving the problem - look at the problem in a different way

-----------------------------------------------------
## Steps

### The Initial State:
- The first set of the traffic lights (North & South) are green. <br/>
  The second set of the traffic lights (East & West) are red.

### Step 1:
- The first set of the traffic lights (North & South) will stay green for 5 minutes. After 4 minutes & 30 seconds, the yellow lights will appear, which last for 30 seconds.

- The second set of the traffic lights (East & West) will stay red for 5 minutes.

### Step 2:
- After 5 minutes, the first set of the traffic lights (North & South) will turn red; and the yellow & green lights will disappear.

- The second set of the traffic lights (East & West) will turn green from red.

### Step 3:
- The second set of the traffic lights (East & West) will stay green for the next 5 minutes. After another 4 minutes & 30 seconds, the yellow (East & West) will appear, which last for 30 seconds.

- The first set (North & South) will stay red for the next 5 minutes.

### Step 4:
- After 5 minutes, the second set of the traffic lights (East & West) will turn red; and the yellow & green lights will disappear.

- The first set of the traffic lights (North & South) will turn green from red.

### Step 5:
- In thirty minute period, both sets of the traffic lights switch lights 6 times.
