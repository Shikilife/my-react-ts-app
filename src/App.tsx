import React, { useState } from 'react';
import Hello from './components/Hello';
import HelloWorldButton from './components/HelloWorldButton';
import ChildButton from './components/ChildButton';

type Todo = {
  id: number;
  text: string;
};

function App() {
  // 做一個簡易 TodoList
  const [todos, setTodos] = useState<Todo[]>([]);  // 任務清單
  const [input, setInput] = useState<string>('');  // 輸入框狀態
  const handleAdd = () => {  //新增任務
    if (input.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput('');
  };
  const handleDelete = (id: number) => {  //刪除任務
    setTodos(todos.filter(todo => todo.id !== id));
  };


  //第三元件
  const [count, setCount] = useState<number>(0);  //預設Count = 0,setCount處理後續變更後count的值 
  const handleChildClick = () => {
    setCount(count + 1);
  }
  return (
    //<> ... </> 是 Fragment，不會多包一層 div，語法簡潔，React 專案很常見！
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
        <h2>Todo List</h2>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="輸入任務..."
        />
        <button onClick={handleAdd}>新增</button>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.text} <button onClick={() => handleDelete(todo.id)}>刪除</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
