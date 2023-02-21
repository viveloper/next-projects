import { atom } from 'recoil';
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
