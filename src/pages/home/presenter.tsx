import * as React from "react";
import { FC } from "react";
import { ToDoItem } from "../../components/to-do-item/to-do-list-item";
import ToDoList from "../../components/to-do-list/ToDoList";

type Props = { items: ToDoItem[] };

export const HomePresenter: FC<Props> = (props) => {
  return (
    <div>
      <ToDoList items={props.items} />
    </div>
  );
};
