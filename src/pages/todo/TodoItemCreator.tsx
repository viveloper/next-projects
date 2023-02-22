import { ChangeEvent, KeyboardEventHandler, useRef, useEffect } from 'react';
import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';
import { v4 as uuid } from 'uuid';
import clsx from 'clsx';
import {
  inputValueState,
  editableItemIdState,
  todoAtomFamilyState,
  todoIdsState,
  isAddModeState,
} from './state';

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useRecoilState(inputValueState);
  const isAddMode = useRecoilValue(isAddModeState);

  const inputRef = useRef<HTMLInputElement>(null);

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

  const addItem = useRecoilCallback(
    ({ snapshot, set }) =>
      () => {
        if (!inputValue.trim()) return;
        const ids = snapshot.getLoadable(todoIdsState).getValue();
        const newId = uuid();
        set(todoIdsState, [...ids, newId]);
        set(todoAtomFamilyState(newId), { id: newId, text: inputValue, done: false });

        setInputValue('');
      },
    [inputValue],
  );

  const editItem = useRecoilCallback(
    ({ snapshot, set, reset }) =>
      () => {
        if (!inputValue.trim()) return;
        const editableItemId = snapshot.getLoadable(editableItemIdState).getValue();
        const targetTodoItem = snapshot.getLoadable(todoAtomFamilyState(editableItemId)).getValue();
        set(todoAtomFamilyState(editableItemId), { ...targetTodoItem, text: inputValue });

        reset(isAddModeState);
        setInputValue('');
      },
    [inputValue],
  );

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
