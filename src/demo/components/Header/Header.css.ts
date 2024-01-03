import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: linear-gradient(
    90deg,
    rgb(255, 204, 0),
    rgb(255, 204, 0) 48%,
    rgb(255, 229, 127) 70%,
    rgb(255, 240, 178)
  );
  transition: box-shadow 0.1s ease-in;
  box-shadow: 0 1px 10px 2px #00000000;
  padding: 1.5rem;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;