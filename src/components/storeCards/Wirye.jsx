import React, { useState } from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import ProgressBar from "react-bootstrap/ProgressBar";

const CardBox = styled.div`
  border-radius: 5px;
`;

export default function WiryeCard({
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
                <span>f4</span>
                <p style={{ marginLeft: "0.5rem" }}>
                  현재 주차 대수 {store.f4.parkingCount}대
                </p>
              </div>
              <ProgressBar
                now={store.f4.parkingPercent}
                label={`${store.f4.parkingPercent}%`}
                variant={
                  store.f4.parkingPercent >= 80
                    ? "danger"
                    : store.f4.parkingPercent >= 60
                    ? "warning"
                    : store.f4.parkingPercent >= 40
                    ? "success"
                    : store.f4.parkingPercent >= 20
                    ? "info"
                    : null
                }
              />

              <div style={{ display: "flex", marginTop: "1rem" }}>
                <span>f5</span>
                <p style={{ marginLeft: "0.5rem" }}>
                  현재 주차 대수 {store.f5.parkingCount}대
                </p>
              </div>
              <ProgressBar
                now={store.f5.parkingPercent}
                label={`${store.f5.parkingPercent}%`}
                variant={
                  store.f5.parkingPercent >= 80
                    ? "danger"
                    : store.f5.parkingPercent >= 60
                    ? "warning"
                    : store.f5.parkingPercent >= 40
                    ? "success"
                    : store.f5.parkingPercent >= 20
                    ? "info"
                    : null
                }
              />

              <div style={{ display: "flex", marginTop: "1rem" }}>
                <span>f6</span>
                <p style={{ marginLeft: "0.5rem" }}>
                  현재 주차 대수 {store.f6.parkingCount}대
                </p>
              </div>
              <ProgressBar
                now={store.f6.parkingPercent}
                label={`${store.f6.parkingPercent}%`}
                variant={
                  store.f6.parkingPercent >= 80
                    ? "danger"
                    : store.f6.parkingPercent >= 60
                    ? "warning"
                    : store.f6.parkingPercent >= 40
                    ? "success"
                    : store.f6.parkingPercent >= 20
                    ? "info"
                    : null
                }
              />

              <div style={{ display: "flex", marginTop: "1rem" }}>
                <span>f7</span>
                <p style={{ marginLeft: "0.5rem" }}>
                  현재 주차 대수 {store.f7.parkingCount}대
                </p>
              </div>
              <ProgressBar
                now={store.f7.parkingPercent}
                label={`${store.f7.parkingPercent}%`}
                variant={
                  store.f7.parkingPercent >= 80
                    ? "danger"
                    : store.f7.parkingPercent >= 60
                    ? "warning"
                    : store.f7.parkingPercent >= 40
                    ? "success"
                    : store.f7.parkingPercent >= 20
                    ? "info"
                    : null
                }
              />
              <div style={{ display: "flex", marginTop: "1rem" }}>
                <span>f8</span>
                <p style={{ marginLeft: "0.5rem" }}>
                  현재 주차 대수 {store.f8.parkingCount}대
                </p>
              </div>
              <ProgressBar
                now={store.f8.parkingPercent}
                label={`${store.f8.parkingPercent}%`}
                variant={
                  store.f8.parkingPercent >= 80
                    ? "danger"
                    : store.f8.parkingPercent >= 60
                    ? "warning"
                    : store.f8.parkingPercent >= 40
                    ? "success"
                    : store.f8.parkingPercent >= 20
                    ? "info"
                    : null
                }
              />

              <div style={{ display: "flex", marginTop: "1rem" }}>
                <span>f9</span>
                <p style={{ marginLeft: "0.5rem" }}>
                  현재 주차 대수 {store.f9.parkingCount}대
                </p>
              </div>
              <ProgressBar
                now={store.f9.parkingPercent}
                label={`${store.f9.parkingPercent}%`}
                variant={
                  store.f9.parkingPercent >= 80
                    ? "danger"
                    : store.f9.parkingPercent >= 60
                    ? "warning"
                    : store.f9.parkingPercent >= 40
                    ? "success"
                    : store.f9.parkingPercent >= 20
                    ? "info"
                    : null
                }
              />

              <div style={{ display: "flex", marginTop: "1rem" }}>
                <span>b4</span>
                <p style={{ marginLeft: "0.5rem" }}>
                  현재 주차 대수 {store.b4.parkingCount}대
                </p>
              </div>
              <ProgressBar
                now={store.b4.parkingPercent}
                label={`${store.b4.parkingPercent}%`}
                variant={
                  store.b4.parkingPercent >= 80
                    ? "danger"
                    : store.b4.parkingPercent >= 60
                    ? "warning"
                    : store.b4.parkingPercent >= 40
                    ? "success"
                    : store.b4.parkingPercent >= 20
                    ? "info"
                    : null
                }
              />

              <div style={{ display: "flex", marginTop: "1rem" }}>
                <span>b5</span>
                <p style={{ marginLeft: "0.5rem" }}>
                  현재 주차 대수 {store.b5.parkingCount}대
                </p>
              </div>
              <ProgressBar
                now={store.b5.parkingPercent}
                label={`${store.b5.parkingPercent}%`}
                variant={
                  store.b5.parkingPercent >= 80
                    ? "danger"
                    : store.b5.parkingPercent >= 60
                    ? "warning"
                    : store.b5.parkingPercent >= 40
                    ? "success"
                    : store.b5.parkingPercent >= 20
                    ? "info"
                    : null
                }
              />

              <div style={{ display: "flex", marginTop: "1rem" }}>
                <span>b6</span>
                <p style={{ marginLeft: "0.5rem" }}>
                  현재 주차 대수 {store.b6.parkingCount}대
                </p>
              </div>
              <ProgressBar
                now={store.b6.parkingPercent}
                label={`${store.b6.parkingPercent}%`}
                variant={
                  store.b6.parkingPercent >= 80
                    ? "danger"
                    : store.b6.parkingPercent >= 60
                    ? "warning"
                    : store.b6.parkingPercent >= 40
                    ? "success"
                    : store.b6.parkingPercent >= 20
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
