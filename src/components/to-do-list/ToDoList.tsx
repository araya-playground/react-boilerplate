import * as React from 'react';
import ToDoListItem, { ToDoItem } from '../to-do-item/to-do-list-item';

type Props = {
  items: ToDoItem[];
};
const ToDoList = ({ items }: Props): JSX.Element => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          <ToDoListItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
