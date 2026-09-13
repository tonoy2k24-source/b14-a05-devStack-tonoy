# Dev Stack Builder

Dev Stack Builder is a responsive web application that helps developers explore different technologies and build their own technology stack. Users can browse technologies, add them to their stack, remove individual technologies, or clear the entire stack.

## Live Demo

[Live Demo](https://incomparable-cucurucho-9967a0.netlify.app/)

## GitHub Repository

[GitHub Repository](https://github.com/tonoy2k24-source/b14-a05-devStack-tonoy)

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React-Toastify
- JSON
- JavaScript ES6+

## Features

### 1. Explore Technologies
Users can explore different technologies with their name, category, description, difficulty level, rating, and badge.

### 2. Build Your Own Stack
Users can add multiple technologies to their personal stack. The same technology cannot be added twice, and already-added technologies are shown as disabled.

### 3. Manage Your Stack
Users can remove individual technologies from their stack or use the "Remove All" button to clear the entire stack. Toast notifications are shown for important actions.

---

# React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript or TypeScript. It makes React UI code easier to read and write.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage data that can change over time inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to create and manage state in a React component. I used it to store the technologies selected by the user in the stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform side effects such as fetching data. It can be used to fetch the technology data from the `data.json` file when the component loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to efficiently update, add, or remove items when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI based on a condition. I used it to show `"Your stack is empty"` when no technology is selected and display the selected technologies when the stack is not empty.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using props. A child can send data back to the parent by receiving a function as a prop and calling that function.

