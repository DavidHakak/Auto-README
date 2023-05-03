import styles from "../../../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        This site was created by David Hakak using react/next.js and Chat GPT.
        Connect with me on
        <a href="https://www.linkedin.com/in/david-hakak/">LinkedIn</a>or check
        out my<a href="https://github.com/DavidHakak">GitHub</a>for more
        projects.
      </p>
    </div>
  );
}

export default Footer;
