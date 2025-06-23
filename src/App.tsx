import { useState, useEffect } from 'react';
import Hello from './components/Hello';
import HelloWorldButton from './components/HelloWorldButton';
import ChildButton from './components/ChildButton';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';
import type { Todo } from './components/TodoItem';

function App() {
  // ===== TodoList 狀態區 =====
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);

  // Step 1: useEffect 抓 API 初始資料
  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then((data: any[]) => setTodos(
        data.slice(0, 10).map(todo => ({
          id: todo.id,
          text: todo.title,
          done: todo.completed
        }))
      ))
      .finally(() => setLoading(false));
  }, []);

  // Step 2: 本地新增 Todo
  const addTodo = (text: string) =>
    setTodos([...todos, { id: Date.now(), text, done: false }]);

  // Step 3: 切換完成
  const toggleTodo = (id: number) =>
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));

  // Step 4: 刪除 Todo
  const deleteTodo = (id: number) =>
    setTodos(todos.filter(t => t.id !== id));

  // ===== 父子互動計數器組 =====
  const [count, setCount] = useState<number>(0);
  const handleChildClick = () => setCount(count + 1);

  return (
    <>
      <div>
        <h2>第一個元件</h2>
        <Hello name="宸維(Shiki)" age={21} />
      </div>

      <br />

      <div>
        <h2>第二個元件</h2>
        <HelloWorldButton />
      </div>

      <br />

      <div>
        <h2>第三個元件(父子元件互動練習)</h2>
        <p>目前點擊次數：{count}</p>
        <ChildButton onButtonClick={handleChildClick} />
      </div>

      <br />

      <div>
        <h2>Todo List (API 初始資料)</h2>
        {loading
          ? <p>載入中...</p>
          : (
            <>
              <TodoInput onAdd={addTodo} />
              <ul>
                {todos.map(t => (
                  <TodoItem
                    key={t.id}
                    todo={t}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                  />
                ))}
              </ul>
            </>
          )}
      </div>

      <br />

      <div className="bg-green-500 text-white text-3xl p-10 rounded-3xl shadow-2xl border-8 border-red-600 m-8">
        Tailwind CSS測試
      </div>



    </>
  );
}

export default App;