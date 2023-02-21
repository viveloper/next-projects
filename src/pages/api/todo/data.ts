import { v4 as uuidv4 } from 'uuid';
import type { Todo } from '.';

export const TODO_LIST: Todo[] = [
  {
    id: uuidv4(),
    text: 'Item 1',
    done: false,
  },
  {
    id: uuidv4(),
    text: 'Item 2',
    done: true,
  },
];
