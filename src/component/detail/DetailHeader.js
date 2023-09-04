import React, { useState, useEffect } from 'react';

function DetailHeader() {
  let [count, setCount] = useState(0);
  let [qqq, setQqq] = useState(true);

  useEffect(() => {
    let a = setTimeout(() => {
      setQqq(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  return (
    <>
      {qqq === true ? (
        <div className="alert alert-warning" id="alert032">
          2초 이내 구매시 할인
        </div>
      ) : null}
      {count}
      <button onClick={() => { setCount(count + 1); }}>버튼</button>
    </>
  );
}

export default DetailHeader;