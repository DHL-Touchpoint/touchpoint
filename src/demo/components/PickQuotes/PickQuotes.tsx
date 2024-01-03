'use client';
import React, { FC, useState } from 'react';
import { Quote } from '../../pages';
import { QuoteCard } from './components';
import {
  QuotesContainer,
  PickContainer,
  QuotesListButton,
} from './PickQuotes.css';
import { CodeModal } from '../CodeModal';
import { DhlButton } from '../DhlButton';
type Props = {
  quotes: Quote[];
  goBack: () => void;
  setShipment: (shipment: { id: string; label: string }) => void;
};

export const PickQuotes: FC<Props> = ({ quotes, goBack, setShipment }) => {
  const [seeReponseData, setSeeResponseData] = useState(false);
  return (
    <PickContainer>
      <h2>Step 2</h2>
      <p >
        Upon submitting the request, our response will comprise a list of
        <QuotesListButton onClick={() => setSeeResponseData(true)}>
          {' Quotes'}
        </QuotesListButton>
        , each providing relevant information about the service point as seen
        below. Each quote is assigned a unique ID, which serves as the sole
        requirement for initiating a shipment. The next step is simply to create
        a shipment via the{' '}
        <a
          href="https://api.production.dhltouchpoint.se/api#/v2/ShipmentController_post"
          target="_blank"
        >
          Shipment
        </a>{' '}
        endpoint, where providing the Quote ID is the only necessary step. Click
        on any quote in the list below to proceed.
      </p>
      <br />
      <DhlButton onClick={goBack}>Go back</DhlButton>
      <QuotesContainer>
        {quotes.map((q, i) => (
          <QuoteCard key={q.id} setShipment={setShipment} index={i} quote={q} />
        ))}
      </QuotesContainer>
      <CodeModal
        showModal={seeReponseData}
        closeModal={() => setSeeResponseData(false)}
        body={quotes}
      />
    </PickContainer>
  );
};
