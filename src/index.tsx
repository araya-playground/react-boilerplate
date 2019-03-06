import * as React from "react";
import { render } from "react-dom";

const App = () => (
  <div>
    <h1> Hello World</h1>
  </div>
);

const root = document.querySelector("#root");
render(<App />, root);
