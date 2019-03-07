import * as React from 'react';
import { Link } from 'react-router-dom';

const Home = (): JSX.Element => (
  <div>
    <p className="title">This is home!</p>
    <Link to={'/greet'}>Go to greet </Link>
  </div>
);

export default Home;
