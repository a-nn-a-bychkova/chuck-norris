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
  }, []);

  function handleCategoryClick(e) {
    setActiveCategory(e.currentTarget.innerHTML);
    norrisAPI
      .fetchRandomJokeOfCategory(e.currentTarget.innerHTML)
      .then(result => setJoke(result.value));
  }

  function handleRandomClick(e) {
    setActiveCategory(e.currentTarget.innerHTML);
    norrisAPI.fetchRandomJoke().then(result => setJoke(result.value));
  }

  return (
    <section>
      <div className={styles.CategoriesContainer}>
        <h1 className={styles.Title}>Categories</h1>
        {categories && (
          <ul className={styles.List}>
            {categories.map(category => (
              <li
                key={category}
                className={
                  activeCategory === category
                    ? `${styles.Item} ${styles.ActiveItem}`
                    : styles.Item
                }
                onClick={handleCategoryClick}
              >
                {category}
              </li>
            ))}
            <li
              key="random"
              className={
                activeCategory === 'random'
                  ? `${styles.Item} ${styles.ActiveItem}`
                  : styles.Item
              }
              onClick={handleRandomClick}
            >
              random
            </li>
          </ul>
        )}
      </div>

      <div className={styles.ChuckContainer}>
        <div className={styles.Joke}>{joke}</div>
        <img
          src={Chuck}
          width="122px"
          height="258px"
          alt="Chuck Norris"
          className={styles.Img}
        />
      </div>
    </section>
  );
}
