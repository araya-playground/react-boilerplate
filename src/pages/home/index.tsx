import * as React from "react";
import ToDoList from "../../components/to-do-list/ToDoList";
import { useEffect, useState } from "react";
import { ToDoItem } from "../../components/to-do-item/to-do-list-item";
import { HomePresenter } from "./presenter";

const mockItems: ToDoItem[] = [
  {
    title: "hello",
  },
];

export const Home = (): JSX.Element => {
  const [items, updateItems] = useState<ToDoItem[]>([]);
  useEffect(() => {
    updateItems(mockItems);
  }, []);
  return <HomePresenter items={items} />;
};
