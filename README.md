# 6DOF Cube Lab (HCI)

## Description

This project is a simple implementation of a 3D cube using Three.js where the cube can be controlled using keyboard input. The main goal of this lab is to understand 6 Degrees of Freedom (6DOF) by applying translation and rotation on a 3D object.

The cube moves in real-time and updates continuously using an animation loop.

---

## What is 6DOF?

6DOF means an object can move in 3D space in 6 ways:

### Translation (movement)
- X-axis → left / right  
- Y-axis → up / down  
- Z-axis → forward / backward  

### Rotation (orientation)
- X-axis → tilt up/down (pitch)  
- Y-axis → turn left/right (yaw)  
- Z-axis → tilt sideways (roll)  

---

## Controls Used

### Movement (Translation)

- Arrow Left → move left  
- Arrow Right → move right  
- Arrow Up → move up  
- Arrow Down → move down  
- W → move forward  
- S → move backward  

---

### Rotation

- X → rotate around X-axis  
- Y → rotate around Y-axis  
- Z → rotate around Z-axis  

---

## How It Works

- A scene is created which acts as the root container  
- A camera is placed to view the scene  
- A cube (mesh) is added to the scene  
- Renderer displays everything on the screen using a canvas  
- Keyboard events update the cube’s position and rotation  
- An animation loop keeps rendering the updated scene  

---

## Important Concepts Used

- Scene Graph (hierarchical structure of objects)  
- Transformation (position and rotation)  
- Animation loop using `requestAnimationFrame`  
- Event handling (keyboard input)  
- Real-time rendering  

---

## Project Structure

- `main.js` → scene, camera, renderer, cube setup  
- `controls.js` → handles keyboard input for movement and rotation  
- `counter.js` → simple DOM counter example (not related to 3D logic)  

---


## Summary

This lab demonstrates how a 3D object behaves when controlled through all 6 degrees of freedom and how transformations are applied during rendering.
