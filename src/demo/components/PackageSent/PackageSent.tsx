'use client';
import React, { FC, useState } from 'react';
import {
  CheckedCircle,
  SentContainer,
  Container,
  ResponseJsonButton,
  Title,
} from './PackageSent.css';
import { CodeModal } from '../CodeModal';
import { DhlButton } from '../DhlButton';

type Props = {
  goBack: () => void;
  shipmentBody: { id: string; label: string };
};

export const PackageSent: FC<Props> = ({ goBack, shipmentBody }) => {
  const [seeBody, setSeeBody] = useState(false);

  const shipmentBodyWithShortLabel = {
    ...shipmentBody,
    label: shipmentBody.label.substring(0, 40) + '...',
  };
  return (
    <Container>
      <Title>Step 3</Title>
      <p>
        The shipment has been successfully created with the following
        <ResponseJsonButton onClick={() => setSeeBody(true)}>
          {" response"}
        </ResponseJsonButton>
        . Utilize the unique shipment ID to initiate a return shipment, retrieve
        the shipment details once again, and perform various additional actions.
        See the documentation mentioned above for a comprehensive overview of
        the available possibilities with the API.
      </p>
      <SentContainer>
        <CheckedCircle/>
        <div>
          <h2>Shipment created</h2>
          <a
            download="DemoLabel.pdf"
            href={`data:application/pdf;base64,${shipmentBody.label}`}
          >
            <p>Download demo label</p>
          </a>
        </div>
        <DhlButton onClick={goBack}>Try again</DhlButton>
      </SentContainer>
      <CodeModal
        body={shipmentBodyWithShortLabel}
        closeModal={() => setSeeBody(false)}
        showModal={seeBody}
      />
    </Container>
  );
};
