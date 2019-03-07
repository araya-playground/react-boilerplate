import Hello from '../../components/hello/hello';
import Bye from '../../components/bye/bye';
import * as React from 'react';
import { Link } from 'react-router-dom';

const Greet = () => (
  <div>
    <Hello name={'Michelle'} />
    <Bye name={'Homura'} />
    <Link to={'/'}>Back to the home </Link>
  </div>
);

export default Greet;
