import clsx from 'clsx';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import type { Todo } from '../api/todo';
import { editableItemIdState, inputValueState, todoAtomFamilyState } from './state';

interface Props {
  id: Todo['id'];
}

const TodoItem = ({ id }: Props) => {
  const [todo, setTodo] = useRecoilState(todoAtomFamilyState(id));
  const [editableItemId, setEditableItemId] = useRecoilState(editableItemIdState);
  const setInputValueState = useSetRecoilState(inputValueState);

  const toggleDone = () => {
    setTodo((current) => ({
      ...current,
      done: !current.done,
    }));
  };

  const editItem = () => {
    setEditableItemId(todo.id);
    setInputValueState(todo.text);
  };

  return (
    <li
      className={clsx(
        'm-0 p-4 flex border-l-4 cursor-pointer mb-1 hover:pl-5',
        'transition-spacing ease-in-out duration-200',
        todo.done ? 'border-green-400 text-gray-600' : 'border-orange-500',
      )}
      onClick={toggleDone}
    >
      <span className="w-full overflow-hidden">{todo.text}</span>
      {editableItemId !== todo.id && (
        <button
          className="ml-2 text-gray-400 hover:text-gray-300"
          onClick={(e) => {
            e.stopPropagation();
            editItem();
          }}
        >
          Edit
        </button>
      )}
    </li>
  );
};

export default TodoItem;
