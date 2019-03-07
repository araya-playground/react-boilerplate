import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Greet from './pages/greet/greet';

const AppWithRouter = (): JSX.Element => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/greet" component={Greet} />
    </div>
  </Router>
);

export default AppWithRouter;
