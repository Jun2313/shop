import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store';

import DetailFooter from '../component/detail/DetailFooter';
import DetailHeader from '../component/detail/DetailHeader';
import DetailContent from '../component/detail/DetailContent';


function Detail(props) {
  let { id } = useParams();
  let findItem = props.shoes.find((x) => x.id == id);
  let [탭, 탭변경] = useState(0);
  let dispatch = useDispatch();

  useEffect(() => {
    let watched = localStorage.getItem("watched");
    watched = watched ? JSON.parse(watched) : [];

    if (!watched.includes(findItem.id)) {
      watched.push(findItem.id);
    }

    localStorage.setItem("watched", JSON.stringify(watched));
  });

  return (
    <div className="container">
      <DetailHeader />
      <DetailContent findItem={findItem} dispatch={dispatch} addToCart={addToCart} />
      <DetailFooter 탭={탭} 탭변경={탭변경} />
    </div>
  );
}

export default Detail;