import { atom, selector } from 'recoil';
import type { Todo } from '../api/todo';

export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [],
});

export const editableItemIdState = atom<Todo['id']>({
  key: 'editableItemIdState',
  default: '',
});

export const inputValueState = atom<string>({
  key: 'inputValueState',
  default: '',
});

export const filterState = atom<'all' | 'active'>({
  key: 'filterState',
  default: 'all',
});

export const filteredTodoListState = selector<Todo[]>({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(filterState);
    const todoList = get(todoListState);

    switch (filter) {
      case 'active':
        return todoList.filter((item) => !item.done);
      default:
        return todoList;
    }
  },
});
