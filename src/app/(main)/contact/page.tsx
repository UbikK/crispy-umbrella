import Button from "@/components/Button";
import Link from "next/link";
import ContactForm from "./components/form";
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
              <div>
                <Button>
                  <Link href="/articles">Return to homepage</Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className={styles.formResponse}>
              Sorry! There has been an error with your request, please try again
              later.
            </div>
          )
        ) : (
          <ContactForm />
        )}
      </div>
    </div>
  );
}
