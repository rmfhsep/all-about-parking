import React, { useEffect, useState } from "react";
import styled from "styled-components";
import responsive from "../styles/responsive";
import StoreCard from "../components/StoreCard";
import Cookies from "universal-cookie";
import axios from "axios";

import WishCard from "../components/WishCard";

import HannamCard from "../components/storeCards/Hannam";
import AnseongCard from "../components/storeCards/Anseong";
import WiryeCard from "../components/storeCards/Wirye";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainWrapper = styled.div`
  padding: 10px;
  background: #fff;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 500px;
  @media ${(props) => props.responsive.tablet} {
    max-width: 100%;
  }
  @media ${(props) => props.responsive.mobile} {
    max-width: 100%;
  }
`;

const HeaderBox = styled.div`
  width: 90%;
  /* padding-left: 1.3rem; */
  display: flex;
  justify-content: start;
  margin-bottom: 1.5rem;
  color: #000;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Divider = styled.div`
  width: 90%;
  height: 1px;
  background-color: #e3e3e3;
  opacity: 0.5;
  margin-bottom: 2rem;
`;

export default function Main() {
  const cookies = new Cookies();
  const [cookie, setCookie] = useState(cookies.get("wishList"));
  const [parkingList, setParkingList] = useState([
    {
      areaName: "hanam",
      totalParkingCount: 4270,
      rf: { parkingCount: 258, parkingPercent: 75 },
      b1: { parkingCount: 710, parkingPercent: 97 },
      b2: { parkingCount: 1114, parkingPercent: 79 },
      b3: { parkingCount: 1618, parkingPercent: 89 },
    },
    {
      areaName: "anseong",
      totalParkingCount: 1718,
      b1: { parkingCount: 541, parkingPercent: 79 },
      b2: { parkingCount: 523, parkingPercent: 83 },
      f1: { parkingCount: 141, parkingPercent: 89 },
      m1: { parkingCount: 168, parkingPercent: 100 },
      f2: { parkingCount: 150, parkingPercent: 89 },
      m2: { parkingCount: 49, parkingPercent: 40 },
      qf: { parkingCount: 59, parkingPercent: 70 },
      c1: { parkingCount: 281, parkingPercent: 91 },
      cm: { parkingCount: 207, parkingPercent: 71 },
      c2: { parkingCount: 170, parkingPercent: 58 },
      rf: { parkingCount: 151, parkingPercent: 43 },
      qb: { parkingCount: 205, parkingPercent: 24 },
    },
    {
      areaName: "wirye",
      totalParkingCount: 1718,
      f4: { parkingCount: 96, parkingPercent: 98 },
      f5: { parkingCount: 122, parkingPercent: 97 },
      f6: { parkingCount: 115, parkingPercent: 82 },
      f7: { parkingCount: 85, parkingPercent: 64 },
      f8: { parkingCount: 106, parkingPercent: 79 },
      f9: { parkingCount: 106, parkingPercent: 79 },
      b4: { parkingCount: 266, parkingPercent: 79 },
      b5: { parkingCount: 268, parkingPercent: 81 },
      b6: { parkingCount: 183, parkingPercent: 61 },
    },
  ]);
  const [likeList, setLikeList] = useState([]);
  const [wishList, setWishList] = useState(null);
  const [filteredList, setFilteredList] = useState(null);
  const [likeState, setLikeState] = useState(false);

  const likeHandler = (e) => {
    setLikeList((prev) => [...prev, e.target.value]);
    e.stopPropagation();
    cookies.set("wishList", `${e.target.value}`, { path: "/" });
    console.log(e.target.id);
  };

  const hateHandler = (e) => {
    setLikeList(likeList.filter((store) => store.areaName !== e.target.value));
    e.stopPropagation();
    cookies.remove("wishList", `${e.target.value}`, { path: "/" });
    console.log(e.target.id);
  };

  useEffect(() => {
    const wish = cookies.get("wishList");
    if (wish) {
      setWishList(wish);
    } else {
      setWishList(null);
    }
  }, [likeList, cookie]);

  useEffect(() => {
    if (wishList) {
      const filtered = parkingList.filter(
        (store) => store.areaName === wishList
      );
      setFilteredList([...filtered]);
      //   const filtered2 = parkingList.filter(
      //     (store) => store.areaName !== wishList
      //   );
      //   setParkingList(filtered2);
    }
  }, [wishList, likeList]);

  console.log(wishList);
  console.log("필터", filteredList);

  useEffect(() => {
    axios
      .get("https://aaparking.store/parking/starfield-parking")
      .then((res) => {
        console.log(res.data);
      });
  }, []);
  return (
    <>
      {filteredList && wishList && wishList.length >= 1 ? (
        <Container>
          <MainWrapper responsive={responsive}>
            <HeaderBox>AAP</HeaderBox>
            {wishList.length >= 1
              ? filteredList.map((store, idx) => {
                  return (
                    <WishCard
                      store={store}
                      setLikeList={setLikeList}
                      idx={idx}
                      likeHandler={likeHandler}
                      hateHandler={hateHandler}
                    />
                  );
                })
              : null}
            {wishList.length >= 1 ? <Divider></Divider> : null}
            {/* 한남 */}
            {wishList === "hanam" ? null : (
              <HannamCard
                store={parkingList[0]}
                setLikeList={setLikeList}
                idx={0}
                likeHandler={likeHandler}
                hateHandler={hateHandler}
                likeState={false}
                setLikeState={setLikeState}
              />
            )}
            {/* 안성 */}
            {wishList === "anseong" ? null : (
              <AnseongCard
                store={parkingList[1]}
                setLikeList={setLikeList}
                idx={1}
                likeHandler={likeHandler}
                likeState={false}
                setLikeState={setLikeState}
              />
            )}
            {/* 위례 */}
            {wishList === "wirye" ? null : (
              <WiryeCard
                store={parkingList[2]}
                setLikeList={setLikeList}
                idx={2}
                likeHandler={likeHandler}
                likeState={false}
                setLikeState={setLikeState}
              />
            )}
            );
          </MainWrapper>
        </Container>
      ) : (
        <Container>
          <MainWrapper responsive={responsive}>
            <HeaderBox>AAP</HeaderBox>
            {/* {wishList.length >= 1
              ? filteredList.map((store, idx) => {
                  return (
                    <WishCard
                      store={store}
                      setLikeList={setLikeList}
                      idx={idx}
                      likeHandler={likeHandler}
                      hateHandler={hateHandler}
                    />
                  );
                })
              : null}
            {wishList.length >= 1 ? <Divider></Divider> : null} */}
            {/* 한남 */}
            <HannamCard
              store={parkingList[0]}
              setLikeList={setLikeList}
              idx={0}
              likeHandler={likeHandler}
            />
            {/* 안성 */}
            <AnseongCard
              store={parkingList[1]}
              setLikeList={setLikeList}
              idx={1}
              likeHandler={likeHandler}
            />
            {/* 위례 */}
            <WiryeCard
              store={parkingList[2]}
              setLikeList={setLikeList}
              idx={2}
              likeHandler={likeHandler}
            />
            );
          </MainWrapper>
        </Container>
      )}
    </>
  );
}
