"use client";
import React from "react";
import styles from "./LoginForm.module.css";
import { authenticate } from "@/app/lib/actions";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  return (
    <form action={formAction} className={styles.form}>
      <h1>Login</h1>
      <input type="text" name="username" id="username" placeholder="username" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <button>Login</button>
      {state && state}
    </form>
  );
};

export default LoginForm;
