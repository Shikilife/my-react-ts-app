import React from 'react';
export type Todo = { id: number; text: string; done: boolean };

type Props = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.done}
      onChange={() => onToggle(todo.id)}
    />
    <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
      {todo.text}
    </span>
    <button onClick={() => onDelete(todo.id)}>刪除</button>
  </li>
);

export default TodoItem;
