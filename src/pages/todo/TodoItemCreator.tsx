import { ChangeEvent, KeyboardEventHandler, useRef, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { inputValueState, editableItemIdState, todoListState } from './state';
import type { Todo } from '../api/todo';
import clsx from 'clsx';

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useRecoilState(inputValueState);
  const setTodoList = useSetRecoilState(todoListState);
  const [editableItemId, setEditableItemId] = useRecoilState(editableItemIdState);

  const inputRef = useRef<HTMLInputElement>(null);

  const isAddMode = !editableItemId;

  useEffect(() => {
    if (!isAddMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAddMode]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key !== 'Enter' || e.nativeEvent.isComposing) return;
    isAddMode ? addItem() : editItem();
  };

  const addItem = () => {
    if (!inputValue.trim()) return;
    const newTodoItem: Todo = {
      id: uuidv4(),
      text: inputValue,
      done: false,
    };
    setTodoList((prev) => [...prev, newTodoItem]);
    setInputValue('');
  };

  const editItem = () => {
    if (!inputValue.trim()) return;
    setTodoList((prev) =>
      prev.map((item) => (item.id === editableItemId ? { ...item, text: inputValue } : item)),
    );
    setInputValue('');
    setEditableItemId('');
  };

  return (
    <div className="flex items-center justify-between relative">
      <input
        className={clsx(
          'p-4 pr-20 border-t-2 rounded bg-gray-900 text-white w-full shadow-inner outline-none',
          isAddMode ? 'border-green-500' : 'border-red-500',
        )}
        placeholder="Add new item..."
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        ref={inputRef}
      />
      <button
        className={clsx(
          'bg-gray-900 font-semibold py-2 px-4 absolute right-0 mr-2 focus:outline-none',
          isAddMode ? 'text-green-400 hover:text-green-300' : 'text-red-500 hover:text-red-400',
        )}
        onClick={isAddMode ? addItem : editItem}
      >
        {isAddMode ? 'Add' : 'Edit'}
      </button>
    </div>
  );
};

export default TodoItemCreator;
