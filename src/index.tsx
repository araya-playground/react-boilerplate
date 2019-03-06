import * as React from "react";
import { render } from "react-dom";
import "./styles/main.css";
import Hello from "./components/hello/hello";
import Bye from "./components/bye/bye";

const App = () => (
  <div>
    <Hello name={"Michelle"} />
    <Bye name={"Homura"} />
  </div>
);

const root = document.querySelector("#root");
render(<App />, root);
