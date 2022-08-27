import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import useTodo from "../../hooks/useTodo";
import { SCHEMA_INPUT } from "../../utils/validateSchemas";
import styles from "../Todo/Todo.module.scss";

const InputField = (props) => {
  const { addTask } = props;
  const onSubmit = (values, formikBag) => {
    addTask(values);
  };
  return (
    <div>
      <Formik
        initialValues={{ body: "" }}
        onSubmit={onSubmit}
        validationSchema={SCHEMA_INPUT}
      >
        <Form>
          <Field name="body" placeholder="New Task" />
          <ErrorMessage name="body" />
          <input className={styles.add_task} type="submit" value="ADD" />
        </Form>
      </Formik>
    </div>
  );
};

export default InputField;
