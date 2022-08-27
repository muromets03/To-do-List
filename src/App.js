import React from "react";
import styles from "./components/Todo/Todo.module.scss";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <h1 className={styles.header}>To-Do List</h1>

      <Todo />
    </>
  );
}

export default App;
