import { useRecoilValue } from 'recoil';
import Filter from './Filter';
import { filteredTodoIdsState } from './state';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';

export default function Home() {
  const filteredTodoIds = useRecoilValue(filteredTodoIdsState);

  return (
    <main className="p-10 bg-gray-800 text-white min-h-[calc(100vh-80px)]">
      <div className="m-auto max-w-md w-full overflow-hidden">
        <h1 className="uppercase text-2xl block font-bold py-6 text-gray-400 tracking-widest text-center">
          Todo List
        </h1>
        <TodoItemCreator />
        <ul className="m-0 my-4 p-0 list-none w-full">
          {filteredTodoIds.map((id) => (
            <TodoItem key={id} id={id} />
          ))}
          {!filteredTodoIds.length && (
            <span className="text-center inline-block w-full p-4 text-gray-600 text-xs">
              Add a new item to get started!
            </span>
          )}
        </ul>
        <Filter />
      </div>
    </main>
  );
}
