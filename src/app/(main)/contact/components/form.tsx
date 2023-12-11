"use client";

import validateContactFormFields from "@/actions/validateContactForm";
import Button from "@/components/Button";
import { useFormState } from "react-dom";
import styles from "../index.module.scss";

const initialState = {
  message: null,
};

const ContactForm = () => {
  const [state, formAction] = useFormState(
    validateContactFormFields,
    initialState
  );

  return (
    <form action={formAction} className={styles.form}>
      <div className={styles.formItem}>
        <label htmlFor="email">
          Email Address <span className={styles.requiredFlag}>*</span>
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className={`${state?.message?.email && styles.inputError}`}
        />
        {state?.message?.email && (
          <div aria-live="polite" className={styles.error}>
            {state.message.email[0]}
          </div>
        )}
      </div>

      <div className={styles.formItem}>
        <label htmlFor="subject">
          Subject <span className={styles.requiredFlag}>*</span>
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          className={`${state?.message?.subject && styles.inputError}`}
        />
        {state?.message?.subject && (
          <div aria-live="polite" className={styles.error}>
            {state.message.subject[0]}
          </div>
        )}
      </div>

      <div className={styles.formItem}>
        <label htmlFor="content">
          Content <span className={styles.requiredFlag}>*</span>
        </label>
        <textarea
          name="content"
          id="content"
          className={`${styles.content} ${
            state?.message?.content && styles.inputError
          }`}
        />
        {state?.message?.content && (
          <div aria-live="polite" className={styles.error}>
            {state.message.content[0]}
          </div>
        )}
      </div>

      <div className={styles.formItem}>
        <Button type="submit" disabled={state.message}>
          Send
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
