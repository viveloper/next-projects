import clsx from 'clsx';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { filterState, todoListState } from './state';

const Filter = () => {
  const [filter, setFilter] = useRecoilState(filterState);
  const setTodoList = useSetRecoilState(todoListState);
  const clearTodoList = () => {
    setTodoList([]);
  };
  return (
    <div className="flex py-4 border-t border-gray-900 justify-between">
      <div>
        <button
          className={clsx(
            'text-xs mr-3 hover:underline focus:outline-none',
            filter === 'all' ? 'text-green-500 font-bold' : 'text-gray-500',
          )}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={clsx(
            'text-xs mr-3 hover:underline focus:outline-none',
            filter === 'active' ? 'text-green-500 font-bold' : 'text-gray-500',
          )}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
      </div>
      <div>
        <button
          className="text-xs mr-3 text-red-500 focus:outline-none hover:underline"
          onClick={clearTodoList}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filter;
