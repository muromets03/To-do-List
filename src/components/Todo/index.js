import React from "react";
import useTodo from "../../hooks/useTodo";
import InputField from "../InputField";
import styles from "../Todo/Todo.module.scss";

const Todo = () => {
  const { tasks, addTask, deleteTask, setDoneTask } = useTodo([
    {
      id: Date.now(),
      body: "test task",
      isDone: false,
    },
  ]);
  return (
    <>
      <div className={styles.main}>
        <h3>Tasks</h3>

        <section className={styles.section}>
          {tasks.map((task) => (
            <p key={task.id}>
              <input
                type="checkbox"
                onClick={() => {
                  setDoneTask(task.id);
                }}
              />{" "}
              {task.body}
              <span
                onClick={() => {
                  deleteTask(task.id);
                }}
              >
                <button className={styles.del_btn}>X</button>
              </span>
            </p>
          ))}
        </section>

        <div className={styles.wrap}></div>
        <h3>New Tasks</h3>
        <InputField addTask={addTask} />
      </div>
    </>
  );
};

export default Todo;
