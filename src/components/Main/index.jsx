import styles from "../../../styles/Main.module.css";
import Footer from "../Footer";
import Header from "../Header";
import Inputs from "../Inputs";

function Main() {
  return (
    <div className={styles.main}>
      <Header />
      <Inputs />
      <Footer />
    </div>
  );
}

export default Main;
