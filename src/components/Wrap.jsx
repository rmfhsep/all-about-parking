import React, { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export default function Wrap({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
