"use client";
import React, { FC, useCallback, useState } from "react";
import { FormContainer } from "./DemoPage.css";
import { SendPackage, PickQuotes, PackageSent } from "../../components";
import Link from "next/link";
import { Header } from "@/demo/components/Header/Header";

export type Quote = {
  id: string;
  deliveryService: {
    type: "HOME" | "SERVICE_POINT";
    servicePoint?: {
      address: {
        city: string;
        countryCode: string;
        postalCode: string;
        streetAddress: string;
      };
      distance: {
        route: number;
        unit: string;
      };
      name: string;
    };
  };
  deliveryTime: {
    earliest: string;
    latest: string;
    leadTime: number;
  };
  priceAndVat: { value: number; currency: "SEK" };
};

export const DemoPage: FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [shipment, setShipment] = useState<{ id: string; label: string }>();

  const goBack = () => {
    setQuotes([]);
    setShipment(undefined);
  };

  const renderCorrectComponent = useCallback(() => {
    if (!shipment && quotes.length === 0) {
      return <SendPackage setQuotes={setQuotes} />;
    }
    if (quotes.length > 0 && !shipment) {
      return (
        <PickQuotes setShipment={setShipment} goBack={goBack} quotes={quotes} />
      );
    }
    if (shipment) {
      return <PackageSent shipmentBody={shipment} goBack={goBack} />;
    }
  }, [quotes, shipment]);

  return (
    <>
      <Header />
      <FormContainer>
        <div>
          <h1>Demo</h1>
          <p>
            Here is a demo illustrating the ease of implementing our API. Follow
            a straightforward guide with making requests and handling responses.
            Below is a real-world example that highlights the simplicity and
            versatility to both seasoned developers and newcomers.
            <br />
            <br />
            You can find the endpoints we are utilizing, as well as additional
            available endpoints,{" "}
            <Link
              href="https://api.production.dhltouchpoint.se/api"
              target="_blank"
            >
              here
            </Link>
            .
            <br />
          </p>
        </div>
        {renderCorrectComponent()}
      </FormContainer>
    </>
  );
};
