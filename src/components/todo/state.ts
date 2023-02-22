import { atom, atomFamily, selector } from 'recoil';
import type { Todo } from '@/pages/api/todo';

export const todoAtomFamilyState = atomFamily<Todo, Todo['id']>({
  key: 'todoAtomFamilyState',
  default: (id) => ({
    id,
    text: '',
    done: false,
  }),
});

export const todoIdsState = atom<Todo['id'][]>({
  key: 'todoIdsState',
  default: [],
});

export const editableItemIdState = atom<Todo['id']>({
  key: 'editableItemIdState',
  default: '',
});

export const isAddModeState = selector<boolean>({
  key: 'isAddModeState',
  get: ({ get }) => {
    return !get(editableItemIdState);
  },
  set: ({ reset }) => {
    reset(editableItemIdState);
  },
});

export const inputValueState = atom<string>({
  key: 'inputValueState',
  default: '',
});

export const filterState = atom<'all' | 'active'>({
  key: 'filterState',
  default: 'all',
});

export const filteredTodoIdsState = selector<Todo['id'][]>({
  key: 'filteredTodoIdsState',
  get: ({ get }) => {
    const filter = get(filterState);
    const todoIds = get(todoIdsState);

    switch (filter) {
      case 'active':
        return todoIds.filter((id) => !get(todoAtomFamilyState(id)).done);
      default:
        return todoIds;
    }
  },
});
