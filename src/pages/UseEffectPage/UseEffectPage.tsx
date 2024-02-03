import React, { useEffect, useState } from 'react';
console.log('1');
export function UseEffectPage() {
  console.log('2');
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffect');

    const timerId = setInterval(() => {
      console.log('tick');
      setCount((st) => st + 1);
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
    </>
  );
}
