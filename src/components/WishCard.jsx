import React, { useState } from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import ProgressBar from "react-bootstrap/ProgressBar";
import HannamCard from "./storeCards/Hannam";
import AnseongCard from "./storeCards/Anseong";
import WiryeCard from "./storeCards/Wirye";

const CardBox = styled.div`
  border-radius: 5px;
`;

export default function WishCard({
  store,
  idx,
  setLikeList,
  likeHandler,
  hateHandler,
  likeState,
}) {
  const now = 60;

  //   console.log(store);
  return (
    <>
      {store.areaName === "hanam" ? (
        <HannamCard
          store={store}
          setLikeList={setLikeList}
          idx={idx}
          likeHandler={likeHandler}
          hateHandler={hateHandler}
          likeState={true}
        />
      ) : store.areaName === "anseong" ? (
        <AnseongCard
          store={store}
          setLikeList={setLikeList}
          idx={idx}
          likeHandler={likeHandler}
          hateHandler={hateHandler}
          likeState={true}
        />
      ) : store.areaName === "wirye" ? (
        <WiryeCard
          store={store}
          setLikeList={setLikeList}
          idx={idx}
          likeHandler={likeHandler}
          hateHandler={hateHandler}
          likeState={true}
        />
      ) : null}
    </>
  );
}
