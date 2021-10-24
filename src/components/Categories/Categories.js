import { useEffect, useState } from 'react';
import styles from './Categories.module.css';
import Chuck from '../../images/chuck.png';
import CategoryItem from '../CategoryItem';
import * as norrisAPI from '../../services/norris-api';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState('');
  const [active, setActive] = useState(false);

  useEffect(() => {
    norrisAPI.fetchCategories().then(result => setCategories(result));
    norrisAPI.fetchRandomJoke().then(result => setJoke(result.value));
    norrisAPI.fetchRandomJoke().then(result => console.log(result.icon_url));
  }, []);

  // icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png';

  function handleCategoryClick(e) {
    // e.preventDefault;

    norrisAPI
      .fetchRandomJokeOfCategory(e.currentTarget.innerHTML)
      .then(result => setJoke(result.value));
    setActive(true);
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
                className={active ? styles.ActiveItem : styles.Item}
                onClick={handleCategoryClick}
              >
                {category}
              </li>
              //   <CategoryItem
              //   category={category}
              //   handleClick={handleCategoryClick}
              // />
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
