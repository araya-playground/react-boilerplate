import * as React from "react";
interface Props {
  name: string;
}
const Hello = ({ name }: Props) => <p className="title">Hello, {name}</p>;
export default Hello;
