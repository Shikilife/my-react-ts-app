import React, { useState } from 'react';

type Props = { onAdd: (text: string) => void };

const TodoInput: React.FC<Props> = ({ onAdd }) => {
  const [value, setValue] = useState('');

  const handleAdd = () => {
    if (!value.trim()) return;
    onAdd(value.trim());
    setValue('');
  };

  return (
    <>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={handleAdd}>新增</button>
    </>
  );
};

export default TodoInput;
