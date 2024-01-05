'use client';
import React, { FC } from 'react';
import {
  ModalContainer,
  ModalContent,
  CloseButton,
  EndpointText,
} from './CodeModal.css';
import JSONPretty from 'react-json-pretty';

type Props = {
  showModal: boolean;
  closeModal: () => void;
  body: object;
  endPoint?: string;
};

export const CodeModal: FC<Props> = ({
  showModal,
  closeModal,
  body,
  endPoint,
}) => {
  return (
    <ModalContainer onClick={closeModal} $show={showModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {endPoint ? <EndpointText>{endPoint}</EndpointText> : null}
        <JSONPretty
          // keyStyle="color: #d40511;"
          // stringStyle="color:#6573E8; margin-left: 6px;"
          // booleanStyle="color: #1B831C; margin-left: 6px;"
          // valueStyle="color: #1B831C; margin-left: 6px;"
          json={body}
        />
        <CloseButton onClick={closeModal}>X</CloseButton>
      </ModalContent>
    </ModalContainer>
  );
};
