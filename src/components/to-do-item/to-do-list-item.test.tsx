import * as React from 'react';
import { shallow } from 'enzyme';
import ToDoListItem, { ToDoItem } from './to-do-list-item';

it('should be rendered', () => {
  const item: ToDoItem = {
    title: 'hello',
  };
  expect(shallow(<ToDoListItem item={item} />).contains('hello')).toBe(true);
});
