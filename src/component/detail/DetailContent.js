import React, { useState, useEffect } from 'react';

function DetailContent({ findItem, dispatch, addToCart }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value !== "" && isNaN(Number(value))) {
      alert("그러지마세요");
    }
  }, [value]);

  return (
    <div className="row">
      <div className="col-md-6">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
      </div>
      <div className="col-md-6 mt-4">
        <input className="input_title" type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <h4 className="pt-5">{findItem.title}</h4>
        <p>{findItem.content}</p>
        <p>{findItem.price}원</p>
        <button className="btn btn-danger" onClick={() => dispatch(addToCart({ id: findItem.id, name: findItem.title, count: 1 }))}>주문하기</button>
      </div>
    </div>
  );
}

export default DetailContent;