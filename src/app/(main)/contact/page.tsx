import { getUrl } from "@/utils/url";
import styles from "./index.module.scss";

export default function Page({
  searchParams,
}: {
  searchParams: { result: string };
}) {
  const result = searchParams.result;

  return (
    <div className={styles.container}>
      <h2>Contact Us</h2>
      <div className={styles.formContainer}>
        {result ? (
          result === "success" ? (
            <div className={styles.formResponse}>
              Your contact request has been saved. Thank You!
            </div>
          ) : (
            <div className={styles.formResponse}>
              Sorry! There has been an error with your request, please try again
              later.
            </div>
          )
        ) : (
          <form
            action={`${getUrl()}/api/contact`}
            method="post"
            className={styles.form}
          >
            <div className={styles.formItem}>
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" id="email" />
            </div>

            <div className={styles.formItem}>
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" id="subject" />
            </div>

            <div className={styles.formItem}>
              <label htmlFor="content">Content</label>
              <textarea
                name="content"
                id="content"
                className={styles.content}
              />
            </div>

            <div className={styles.formItem}>
              <button>Send</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
