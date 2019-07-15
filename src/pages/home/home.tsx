import * as React from 'react';
import ToDoList from '../../components/to-do-list/ToDoList';
import { useEffect, useState } from 'react';
import { ToDoItem } from '../../components/to-do-item/to-do-list-item';

const mockItems: ToDoItem[] = [
  {
    title: 'hello',
  },
];
const Home = (): JSX.Element => {
  const [items, dispatchItems] = useState<ToDoItem[]>([]);
  useEffect(() => {
    dispatchItems(mockItems);
  }, []);
  return (
    <div>
      <ToDoList items={items} />
    </div>
  );
};

export default Home;
