import styles from './Categories.module.css';
import Chuck from '../../images/chuck.png';

export default function Categories() {
  return (
    <section>
      <div>
        <h1 className={styles.Title}>Categories</h1>
        <ul className={styles.List}>
          <li className={styles.Item}>
            <span className={styles.ItemText}>animal</span>
          </li>
          <li className={styles.Item}>
            <span className={styles.ItemText}>animal</span>
          </li>
          <li className={styles.Item}>
            <span className={styles.ItemText}>animal</span>
          </li>
          <li className={styles.Item}>
            <span className={styles.ItemText}>animal</span>
          </li>
          <li className={styles.Item}>
            <span className={styles.ItemText}>animal</span>
          </li>
          <li className={styles.Item}>
            <span className={styles.ItemText}>animal</span>
          </li>
          <li className={styles.Item}>
            <span className={styles.ItemText}>animal</span>
          </li>
          <li className={styles.Item}>
            <span className={styles.ItemText}>animal</span>
          </li>
          <li className={styles.Item}>
            <span className={styles.ItemText}>animal</span>
          </li>
          <li className={styles.Item}>
            <span className={styles.ItemText}>animal</span>
          </li>
          <li className={styles.Item}>
            <span className={styles.ItemText}>animal</span>
          </li>
        </ul>
      </div>
      <div className={styles.ChuckContainer}>
        <img src={Chuck} width="122px" height="258px" className={styles.Img} />
        <div className={styles.Modal}>Modal</div>
      </div>
    </section>
  );
}
