import styles from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={styles.Header}>
      <img
        src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
        alt="logo"
        width="43px"
        height="43px"
        className={styles.Img}
      />
      <span className={styles.Text}>Chuck Norris</span>
    </header>
  );
}
