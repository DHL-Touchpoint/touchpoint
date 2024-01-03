import styled from 'styled-components';

export const ModalContainer = styled.div<{ $show: boolean }>`
  ${props =>
    props.$show
      ? 'visibility: visible; opacity: 1; transform: translateY(0);'
      : 'visibility: hidden; opacity: 0; transform: translateY(20px);'};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  transition: all 0.15s ease-in-out;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  position: relative;
  overflow: scroll;
  max-height: 80%;
  width: 700px;
  border-radius: 12px;
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 0;
  margin: 12px;
  font-size: 24px;
  top: 0;
  cursor: pointer;
  color: gray;
  :hover {
    color: black;
  }
`;

export const EndpointText = styled.code`
  margin-bottom: 0.5rem;
  display: block;
`;
