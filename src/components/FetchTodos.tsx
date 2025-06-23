import React, { useState, useEffect } from 'react';

// 定義 API 回傳的資料型別
type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const FetchTodos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        if (!res.ok) throw new Error('API 回傳失敗');
        return res.json();
      })
      .then((data: Todo[]) => setTodos(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>載入中...</p>;
  if (error) return <p style={{ color: 'red' }}>錯誤：{error}</p>;

  return (
    <div>
      <h2>API Todo List (前 10 筆)</h2>
      <ul>
        {todos.slice(0, 10).map(todo => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchTodos;
