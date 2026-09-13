# Dev Stack Builder

Dev Stack Builder is a responsive web application that helps developers explore different technologies and build their own technology stack. Users can browse technologies, add them to their stack, remove individual technologies, or clear the entire stack.

## Live Demo

[Live Demo](#)

## GitHub Repository

[GitHub Repository](#)

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

## 1. What is JSX and why do we use it?

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript or TypeScript.

We use JSX because it makes React components easier to write and understand.

Example:

```tsx
const App = () => {
  return <h1>Hello World</h1>;
};
