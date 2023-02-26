import React, { useState } from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import ProgressBar from "react-bootstrap/ProgressBar";

const CardBox = styled.div`
  border-radius: 5px;
`;

export default function AnseongCard({
  store,
  idx,
  setLikeList,
  likeHandler,
  hateHandler,
  setLikeState,
  likeState,
}) {
  const now = 60;
  console.log(store);
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
                <span>b1</span>
                <p style={{ marginLeft: "0.5rem" }}>
                  현재 주차 대수 {store.b1?.parkingCount}대
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
                <span>f1</span>
                <p style={{ marginLeft: "0.5rem" }}>
                  현재 주차 대수 {store.f1.parkingCount}대
                </p>
              </div>
              <ProgressBar
                now={store.f1.parkingPercent}
                label={`${store.f1.parkingPercent}%`}
                variant={
                  store.f1.parkingPercent >= 80
                    ? "danger"
                    : store.f1.parkingPercent >= 60
                    ? "warning"
                    : store.f1.parkingPercent >= 40
                    ? "success"
                    : store.f1.parkingPercent >= 20
                    ? "info"
                    : null
                }
              />

              <div style={{ display: "flex", marginTop: "1rem" }}>
                <span>m1</span>
                <p style={{ marginLeft: "0.5rem" }}>
                  현재 주차 대수 {store.m1.parkingCount}대
                </p>
              </div>
              <ProgressBar
                now={store.m1.parkingPercent}
                label={`${store.m1.parkingPercent}%`}
                variant={
                  store.m1.parkingPercent >= 80
                    ? "danger"
                    : store.m1.parkingPercent >= 60
                    ? "warning"
                    : store.m1.parkingPercent >= 40
                    ? "success"
                    : store.m1.parkingPercent >= 20
                    ? "info"
                    : null
                }
              />
              <div style={{ display: "flex", marginTop: "1rem" }}>
                <span>f2</span>
                <p style={{ marginLeft: "0.5rem" }}>
                  현재 주차 대수 {store.f2.parkingCount}대
                </p>
              </div>
              <ProgressBar
                now={store.f2.parkingPercent}
                label={`${store.f2.parkingPercent}%`}
                variant={
                  store.f2.parkingPercent >= 80
                    ? "danger"
                    : store.f2.parkingPercent >= 60
                    ? "warning"
                    : store.f2.parkingPercent >= 40
                    ? "success"
                    : store.f2.parkingPercent >= 20
                    ? "info"
                    : null
                }
              />

              <div style={{ display: "flex", marginTop: "1rem" }}>
                <span>m2</span>
                <p style={{ marginLeft: "0.5rem" }}>
                  현재 주차 대수 {store.m2.parkingCount}대
                </p>
              </div>
              <ProgressBar
                now={store.m2.parkingPercent}
                label={`${store.m2.parkingPercent}%`}
                variant={
                  store.m2.parkingPercent >= 80
                    ? "danger"
                    : store.m2.parkingPercent >= 60
                    ? "warning"
                    : store.m2.parkingPercent >= 40
                    ? "success"
                    : store.m2.parkingPercent >= 20
                    ? "info"
                    : null
                }
              />

              <div style={{ display: "flex", marginTop: "1rem" }}>
                <span>qf</span>
                <p style={{ marginLeft: "0.5rem" }}>
                  현재 주차 대수 {store.qf.parkingCount}대
                </p>
              </div>
              <ProgressBar
                now={store.qf.parkingPercent}
                label={`${store.qf.parkingPercent}%`}
                variant={
                  store.qf.parkingPercent >= 80
                    ? "danger"
                    : store.qf.parkingPercent >= 60
                    ? "warning"
                    : store.qf.parkingPercent >= 40
                    ? "success"
                    : store.qf.parkingPercent >= 20
                    ? "info"
                    : null
                }
              />

              <div style={{ display: "flex", marginTop: "1rem" }}>
                <span>c1</span>
                <p style={{ marginLeft: "0.5rem" }}>
                  현재 주차 대수 {store.c1.parkingCount}대
                </p>
              </div>
              <ProgressBar
                now={store.c1.parkingPercent}
                label={`${store.c1.parkingPercent}%`}
                variant={
                  store.c1.parkingPercent >= 80
                    ? "danger"
                    : store.c1.parkingPercent >= 60
                    ? "warning"
                    : store.c1.parkingPercent >= 40
                    ? "success"
                    : store.c1.parkingPercent >= 20
                    ? "info"
                    : null
                }
              />

              <div style={{ display: "flex", marginTop: "1rem" }}>
                <span>cm</span>
                <p style={{ marginLeft: "0.5rem" }}>
                  현재 주차 대수 {store.cm.parkingCount}대
                </p>
              </div>
              <ProgressBar
                now={store.cm.parkingPercent}
                label={`${store.cm.parkingPercent}%`}
                variant={
                  store.cm.parkingPercent >= 80
                    ? "danger"
                    : store.cm.parkingPercent >= 60
                    ? "warning"
                    : store.cm.parkingPercent >= 40
                    ? "success"
                    : store.cm.parkingPercent >= 20
                    ? "info"
                    : null
                }
              />

              <div style={{ display: "flex", marginTop: "1rem" }}>
                <span>c2</span>
                <p style={{ marginLeft: "0.5rem" }}>
                  현재 주차 대수 {store.c2.parkingCount}대
                </p>
              </div>
              <ProgressBar
                now={store.c2.parkingPercent}
                label={`${store.c2.parkingPercent}%`}
                variant={
                  store.c2.parkingPercent >= 80
                    ? "danger"
                    : store.c2.parkingPercent >= 60
                    ? "warning"
                    : store.c2.parkingPercent >= 40
                    ? "success"
                    : store.c2.parkingPercent >= 20
                    ? "info"
                    : null
                }
              />

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
                <span>qb</span>
                <p style={{ marginLeft: "0.5rem" }}>
                  현재 주차 대수 {store.qb.parkingCount}대
                </p>
              </div>
              <ProgressBar
                now={store.qb.parkingPercent}
                label={`${store.qb.parkingPercent}%`}
                variant={
                  store.qb.parkingPercent >= 80
                    ? "danger"
                    : store.qb.parkingPercent >= 60
                    ? "warning"
                    : store.qb.parkingPercent >= 40
                    ? "success"
                    : store.qb.parkingPercent >= 20
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
