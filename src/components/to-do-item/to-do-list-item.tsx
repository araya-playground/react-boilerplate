import * as React from 'react';
import { Fragment } from 'react';

export type ToDoItem = {
  title: string;
};
type Props = {
  item: ToDoItem;
};

const ToDoListItem = ({ item }: Props): JSX.Element => {
  return <Fragment>{item.title}</Fragment>;
};

export default ToDoListItem;
