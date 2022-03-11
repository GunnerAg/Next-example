import Link from "next/link";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.Home}>
          <div className={styles.Home__button}>
            <Link href="/form">Fill Form</Link>
          </div>
      </div>
    </>
  );
}
