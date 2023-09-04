import React from 'react';
import MainBackground from "../component/list/MainBackground";
import RedButton from "../component/list/RedButton";
import ShoesList from "../component/list/ShoesList";
import LoadMoreButton from "../component/list/LoadMoreButton";

function List({ shoes, setShoes, urlIndex, setUrlIndex, urls }) {
  return (
    <>
      <MainBackground />
      <div className="container">
        <RedButton />
        <ShoesList shoes={shoes} />
        <LoadMoreButton shoes={shoes} setShoes={setShoes} urlIndex={urlIndex} setUrlIndex={setUrlIndex} urls={urls} />
      </div>
    </>
  );
}

export default List;