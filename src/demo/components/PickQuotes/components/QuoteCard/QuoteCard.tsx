'use client';
import React, { FC, useState } from 'react';
import {
  Card,
  ServicePointText,
  Confirm,
  BounceButton,
  SeeApiDataButton,
} from './QuoteCard.css';
import axios from 'axios';
import { Quote } from '@/demo';
import { CodeModal } from '@/demo/components/CodeModal';
import { Loader } from '@/styles/globalStyles';

type Props = {
  quote: Quote;
  index: number;
  setShipment: (shipment: { id: string; label: string }) => void;
};

export const QuoteCard: FC<Props> = ({ quote, index, setShipment }) => {
  const [clicked, setClicked] = useState(false);
  const [seeApiData, setSeeApiData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const type =
    quote.deliveryService.type === 'HOME'
      ? 'Home delivery'
      : 'Service point delivery';

  const clickOnCard = () => {
    setClicked(c => !c);
    setError('');
  };

  const createSandboxShipment = async () => {
    const url = `api/shipment`;
    setLoading(true);
    setError('');
    axios
      .post(url, {
        quote: {
          id: quote.id,
        },
      })
      .then(res => {
        const shipment = res.data;
        setShipment(shipment);
        setLoading(false);
      })
      .catch(err => {
        setError(err.response?.data?.detail ?? 'Something went wrong (Have you added your API key in the code?)');
        setLoading(false);
      });
  };

  const servicePoint = quote.deliveryService.servicePoint;

  if (error.length > 0) {
    return <Confirm onClick={clickOnCard}>{error}</Confirm>;
  }

  if (clicked) {
    return (
      <Confirm onClick={clickOnCard}>
        <BounceButton
          disabled={loading}
          onClick={(e) => {
            e.stopPropagation();
            createSandboxShipment();
          }}
        >
          {loading ? <Loader/> : 'Confirm'}
        </BounceButton>
      </Confirm>
    );
  }

  const jsonQuoteBody = {
    quote: {
      id: quote.id,
    },
  };

  return (
    <>
      <Card onClick={clickOnCard} $animationDelay={Math.floor(index / 2)}>
        <div>
          <div>{type}</div>
          <div>{`Cost: ${quote.priceAndVat.value} ${quote.priceAndVat.currency}`}</div>
          <div>{`Earliest delivery: ${new Date(
            quote.deliveryTime.earliest
          ).toDateString()}`}</div>
        </div>
        {servicePoint ? (
          <ServicePointText>
            <div>{servicePoint.name}</div>
            <div>{`${servicePoint.address.streetAddress} (${servicePoint.distance.route} ${servicePoint.distance.unit})`}</div>
          </ServicePointText>
        ) : null}
        <SeeApiDataButton
          onClick={(e) => {
            e.stopPropagation();
            setSeeApiData(true);
          }}
        >
          See post request
        </SeeApiDataButton>
      </Card>
      <CodeModal
        body={jsonQuoteBody}
        endPoint="POST /v2/shipment"
        closeModal={() => setSeeApiData(false)}
        showModal={seeApiData}
      />
    </>
  );
};
