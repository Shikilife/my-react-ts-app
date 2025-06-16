import React, { useState } from 'react';

const HelloWorldButton: React.FC = () => {
  // 宣告 state，控制是否顯示 Hello world
  // 預設為False，
  const [showHello, setShowHello] = useState<boolean>(false);

  // 處理按鈕點擊
  const handleClick = () => {
    setShowHello(!showHello); //  每次按下就切換 true/false
  };

  return (
    <div>
      <button onClick={handleClick}>
        {showHello ? '隱藏 Hello world' : '顯示 Hello world'}
      </button>
      {showHello && <p>Hello,world!!</p>}
    </div>
  );
};

export default HelloWorldButton;
