import * as React from 'react';
import { render } from 'react-dom';
import './styles/main.css';
import AppWithRouter from './router';

const root = document.querySelector('#root');
render(<AppWithRouter />, root);
