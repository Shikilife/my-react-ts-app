import React from 'react';

// 定義 props 型別：接收一個 callback 函式
type ChildButtonProps = {
  onButtonClick: () => void;
};

const ChildButton: React.FC<ChildButtonProps> = ({ onButtonClick }) => {
  return (
    <button onClick={onButtonClick}>按我！</button>
  );
};

export default ChildButton;
