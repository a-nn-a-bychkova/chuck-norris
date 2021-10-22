import logo from '../../images/logo.png';
import styles from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={styles.header}>
      <img
        src={logo}
        alt="logo"
        width="43px"
        height="43px"
        className={styles.Img}
      />
      <span className={styles.Text}>Chuck Norris</span>
    </header>
  );
}
