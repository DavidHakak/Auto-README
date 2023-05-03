import { Inter } from "next/font/google";
import Main from "../src/components/Main";

import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.home}>
      <Main />
    </div>
  );
}
