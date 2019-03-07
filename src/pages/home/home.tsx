import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.css';

const Home = (): JSX.Element => (
  <div>
    <figure>
      <img
        src={require('../../assets/images/img.jpg')}
        alt="image"
        className={styles.img}
      />
      <figcaption>Photo by Nikolay Tarashchenko on Unsplash</figcaption>
    </figure>
    <p className="title">This is home!</p>
    <Link to={'/greet'}>Go to greet </Link>
  </div>
);

export default Home;
