import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home/home";

const AppWithRouter = (): JSX.Element => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </Router>
);

export default AppWithRouter;
