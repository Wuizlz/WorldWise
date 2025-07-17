import styles from "./footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <footer>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
