import React from 'react';
import axios from 'axios';

function LoadMoreButton({ shoes, setShoes, urlIndex, setUrlIndex, urls }) {
  return (
    <button onClick={() => {
        if (urlIndex < urls.length) {
          axios.get(urls[urlIndex]).then((data) => {
            let copy = [...shoes, ...data.data];
            setShoes(copy);
          });
          setUrlIndex(urlIndex + 1);
        } else {
          alert("데이터가없어유");
        }
      }}
    >
      더보기
    </button>
  );
}

export default LoadMoreButton;