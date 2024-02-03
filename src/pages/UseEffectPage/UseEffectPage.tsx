import React, { useEffect, useState } from 'react';
console.log('UseEffectPage.tsx');

let x = 0;
export function UseEffectPage() {
  console.log('UseEffectPage()');
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffect');

    const timerId = setInterval(() => {
      console.log('x', x);
      // setCount((st) => st + 1);
    }, 1000);

    // return clearInterval(timerId); так не работает!!!!
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return (
    <>
      <div>UseEffectPage</div>
      <div>{count}</div>
      <div>{x}</div>
      <button
        onClick={() => {
          x += 1;
        }}
      >
        x add 1
      </button>
    </>
  );
}
