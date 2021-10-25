import { useEffect, useState } from 'react';
import styles from './Categories.module.css';
import Chuck from '../../images/chuck.png';

import * as norrisAPI from '../../services/norris-api';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState('');
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(() => {
    norrisAPI.fetchCategories().then(result => setCategories(result));
    norrisAPI.fetchRandomJoke().then(result => setJoke(result.value));
  }, [activeCategory]);

  function handleCategoryClick(e) {
    // e.preventDefault;
    console.log('we are in');
    setActiveCategory(e.currentTarget.innerHTML);
    norrisAPI
      .fetchRandomJokeOfCategory(e.currentTarget.innerHTML)
      .then(result => setJoke(result.value));
    setActiveCategory(e.currentTarget.innerHTML);
  }

  return (
    <section>
      <div>
        <h1 className={styles.Title}>Categories</h1>
        {categories && (
          <ul className={styles.List}>
            {categories.map(category => (
              <li
                key={category}
                className={
                  activeCategory === category ? styles.ActiveItem : styles.Item
                }
                onClick={handleCategoryClick}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.ChuckContainer}>
        <img src={Chuck} width="122px" height="258px" className={styles.Img} />
        <div className={styles.Modal}>{joke}</div>
      </div>
    </section>
  );
}
