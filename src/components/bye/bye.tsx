import * as React from 'react';
import styles from './bye.css';

interface Props {
  name: string;
}

const Bye = ({ name }: Props): JSX.Element => {
  return <p className={styles.title}>Bye, {name}</p>;
};

export default Bye;