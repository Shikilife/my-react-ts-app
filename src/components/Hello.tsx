import React , {useState} from 'react';

// 🧠 定義 Props 型別
type HelloProps = {
  name: string;
  age: number;
};

// ✅ 函式型元件，使用 props + TypeScript 型別
const Hello: React.FC<HelloProps> = ({ name, age }) => {
  return (
    <div>
        Hello！！ {name}，你今年 {age} 歲！
    </div>
  );
};

export default Hello;
