import React, { useState } from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import ProgressBar from "react-bootstrap/ProgressBar";

const CardBox = styled.div`
  border-radius: 5px;
`;

export default function HannamCard({
  store,
  idx,
  setLikeList,
  likeHandler,
  hateHandler,
  setLikeState,
  likeState,
}) {
  const now = 60;
  //   console.log(store);
  return (
    <>
      <>
        <Accordion style={{ width: "90%" }} key={idx}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <span style={{ width: "25%" }}>{store.areaName}</span>
              <span style={{ width: "50%", marginLeft: "1rem" }}>
                <ProgressBar now={now} label={`${now}%`} variant="warning" />
              </span>
              <span style={{ marginLeft: "1rem" }}>
                {likeState === true ? (
                  <button
                    id={idx}
                    value={store.areaName}
                    onClick={(e) => {
                      hateHandler(e);
                      setLikeState(!likeState);
                    }}
                    style={{
                      width: "15px",
                      height: "15px",
                      border: "none",
                      backgroundColor: "transparent",
                      backgroundImage: `url("icons/star-fill.svg")`,

                      backgroundRepeat: "no-repeat",
                    }}
                  ></button>
                ) : (
                  <button
                    id={idx}
                    value={store.areaName}
                    onClick={(e) => {
                      likeHandler(e);
                      setLikeState(!likeState);
                    }}
                    style={{
                      width: "15px",
                      height: "15px",
                      border: "none",
                      backgroundColor: "transparent",
                      backgroundImage: `url("icons/star.svg")`,
                      backgroundRepeat: "no-repeat",
                    }}
                  ></button>
                )}
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <p>혼잡도</p>

              <div style={{ display: "flex", marginTop: "1rem" }}>
                <span>rf</span>
                <p style={{ marginLeft: "0.5rem" }}>
                  현재 주차 대수 {store.rf.parkingCount}대
                </p>
              </div>
              <ProgressBar
                now={store.rf.parkingPercent}
                label={`${store.rf.parkingPercent}%`}
                variant={
                  store.rf.parkingPercent >= 80
                    ? "danger"
                    : store.rf.parkingPercent >= 60
                    ? "warning"
                    : store.rf.parkingPercent >= 40
                    ? "success"
                    : store.rf.parkingPercent >= 20
                    ? "info"
                    : null
                }
              />

              <div style={{ display: "flex", marginTop: "1rem" }}>
                <span>b1</span>
                <p style={{ marginLeft: "0.5rem" }}>
                  현재 주차 대수 {store.b1.parkingCount}대
                </p>
              </div>
              <ProgressBar
                now={store.b1.parkingPercent}
                label={`${store.b1.parkingPercent}%`}
                variant={
                  store.b1.parkingPercent >= 80
                    ? "danger"
                    : store.b1.parkingPercent >= 60
                    ? "warning"
                    : store.b1.parkingPercent >= 40
                    ? "success"
                    : store.b1.parkingPercent >= 20
                    ? "info"
                    : null
                }
              />

              <div style={{ display: "flex", marginTop: "1rem" }}>
                <span>b2</span>
                <p style={{ marginLeft: "0.5rem" }}>
                  현재 주차 대수 {store.b2.parkingCount}대
                </p>
              </div>
              <ProgressBar
                now={store.b2.parkingPercent}
                label={`${store.b2.parkingPercent}%`}
                variant={
                  store.b2.parkingPercent >= 80
                    ? "danger"
                    : store.b2.parkingPercent >= 60
                    ? "warning"
                    : store.b2.parkingPercent >= 40
                    ? "success"
                    : store.b2.parkingPercent >= 20
                    ? "info"
                    : null
                }
              />

              <div style={{ display: "flex", marginTop: "1rem" }}>
                <span>b3</span>
                <p style={{ marginLeft: "0.5rem" }}>
                  현재 주차 대수 {store.b3.parkingCount}대
                </p>
              </div>
              <ProgressBar
                now={store.b3.parkingPercent}
                label={`${store.b3.parkingPercent}%`}
                variant={
                  store.b3.parkingPercent >= 80
                    ? "danger"
                    : store.b3.parkingPercent >= 60
                    ? "warning"
                    : store.b3.parkingPercent >= 40
                    ? "success"
                    : store.b3.parkingPercent >= 20
                    ? "info"
                    : null
                }
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        ;
      </>
      );
    </>
  );
}
