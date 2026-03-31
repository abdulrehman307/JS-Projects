# 🐍 Vanilla JS Snake Game (Logic & Algorithms)

A classic Snake game built from scratch to demonstrate core JavaScript programming logic, data structures, and algorithmic state management. 

Rather than relying on HTML5 Canvas or external game engines, this project focuses on manipulating a dynamic DOM grid using mathematical coordinate systems and a custom-built game loop.

## 🚀 Live Demo
> *(https://snakegamebyabdul.netlify.app/)*

## 🧠 Core JavaScript Logic & Architecture

This project was built to showcase problem-solving and vanilla JavaScript capabilities. Key technical achievements include:

### 1. 2D Coordinate System Mapping
The game board is a dynamically generated 1D NodeList of HTML `div` elements, which is mathematically mapped to behave like a 2D Cartesian plane. Every block on the screen corresponds to a specific `(x, y)` coordinate, calculated dynamically based on the user's viewport size.

### 2. State Management & Data Structures
* **The Snake (Array/Queue):** The snake is managed as an array of coordinate objects `[{x, y}, {x, y}]`. Movement is simulated using Queue-like operations: calculating the new head position based on direction, adding it to the front of the array (`unshift`), and removing the tail (`pop`).
* **Growth Logic:** When the snake's head coordinates match the randomly generated food coordinates, the `pop()` operation is skipped for one frame, naturally increasing the snake's length.

### 3. Custom Game Engine (FPS Loop)
The game avoids external animation libraries, instead utilizing a custom game loop built with `setInterval`. This acts as the game's "tick rate" (FPS), handling rendering, state updates, and collision checks at precisely timed intervals.

### 4. Algorithmic Collision Detection
On every frame, the engine runs boundary and intersection checks:
* **Wall Collision:** Verifies if the new head `(x, y)` exceeds the dynamically calculated `rows` or `columns` limits.
* **Self-Intersection:** Iterates through the snake's body array to check if the new head coordinates match any existing body segment coordinates.

## ✨ Additional Technical Features
* **Dynamic Grid Generation:** JavaScript calculates `Math.floor(board.clientWidth / 30)` to automatically generate the correct number of playable blocks regardless of screen resolution.
* **Persistent Local Storage:** Utilizes the browser's `localStorage` API to save, retrieve, and update the user's high score across different sessions.
* **Time Tracking:** Custom timer logic that parses, increments, and formats a `MM-SS` string during active gameplay.

## 🛠️ Tech Stack
* **Logic:** Vanilla JavaScript (ES6+), DOM Manipulation, Algorithmic Logic
* **Structure & Rendering:** HTML5, CSS Grid (used strictly for layout structuring)
