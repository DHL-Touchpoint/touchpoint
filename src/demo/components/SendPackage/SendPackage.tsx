"use client";
import React, { FC, useState } from "react";
import {
  CommunicantContainer,
  DataButtons,
  DemoContainer,
  FullWidth,
  ErrorMessage,
  BottomButtons,
  Title,
} from "./SendPackage.css";
import { Communicant, Package } from "./components";
import axios from "axios";
import { Quote } from "../../pages";
import { CodeModal } from "../CodeModal";
import { DhlButton } from "../DhlButton";
import { Loader } from "@/styles/globalStyles";

const senderDummyValues = {
  city: "Stockholm",
  country: "SE",
  street: "Sveavägen 17",
  postalCode: "111 57",
  name: "Sven Svensson",
  email: "sven@dhl.com",
  phone: "070 123 456 78",
};

const recipientDummyValues = {
  city: "Malmö",
  country: "SE",
  street: "Larochegatan",
  postalCode: "211 34",
  name: "Karl Karlsson",
  email: "karl@dhl.com",
  phone: "070 876 543 21",
};

const packageDummyValues = {
  weight: 2,
  height: 4,
  width: 12,
  length: 20,
};

type Props = {
  setQuotes: (quotes: Quote[]) => void;
};

export const SendPackage: FC<Props> = ({ setQuotes }) => {
  const [recipientValues, setRecipientValues] = useState(recipientDummyValues);
  const [senderValues, setSenderValues] = useState(senderDummyValues);
  const [packageValues, setPackageValues] = useState(packageDummyValues);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [seeBody, setSeeBody] = useState(false);

  const setDummyData = () => {
    setRecipientValues(recipientDummyValues);
    setSenderValues(senderDummyValues);
    setPackageValues(packageDummyValues);
  };
  const clearAllValues = () => {
    setRecipientValues({
      city: "",
      country: "",
      street: "",
      postalCode: "",
      name: recipientDummyValues.name,
      email: recipientDummyValues.email,
      phone: recipientDummyValues.phone,
    });
    setSenderValues({
      city: "",
      country: senderDummyValues.country,
      street: "",
      postalCode: "",
      name: senderDummyValues.name,
      email: senderDummyValues.email,
      phone: senderDummyValues.phone,
    });
    setPackageValues({
      weight: 0,
      height: 0,
      width: 0,
      length: 0,
    });
  };

  const postBody = {
    shipper: {
      email: "Karl@karlsson.se",
      name: "Karl Karlsson",
      phoneNumber: "0701234567",
    },
    origin: {
      streetAddress: senderValues.street,
      postalCode: senderValues.postalCode,
      city: senderValues.city,
      countryCode: senderValues.country,
    },
    recipient: {
      phoneNumber: "070654321",
      name: "Anders Andersson",
      email: "anders@andersson.se",
    },
    destination: {
      streetAddress: recipientValues.street,
      postalCode: recipientValues.postalCode,
      city: recipientValues.city,
      countryCode: recipientValues.country,
    },
    deliveryService: {
      options: [{ type: "ANY_SERVICE_POINT" }],
      priority: "IN_ORDER",
    },
    packages: [
      {
        dimensions: {
          unit: "CM",
          length: packageValues.length,
          width: packageValues.width,
          height: packageValues.height,
        },
        weight: { unit: "KG", value: packageValues.weight },
      },
    ],
  };

  const getSandboxQuotes = async () => {
    const url = `/api/quote`;
    setLoading(true);
    setErrorMessage("");
    const res = await axios
      .post(url, postBody)
      .then((res) => res.data.quotes)
      .catch((err) => {
        console.error(err.response?.data);
        setErrorMessage(
          err.response?.data?.detail ??
            "Something went wrong (Have you added your API key in the code?)"
        );
        return [];
      });

    if (res.length > 0) {
      setQuotes(res);
    }
    setLoading(false);
  };

  const buttonDisabled = () => {
    return (
      !recipientValues.city ||
      !recipientValues.country ||
      !recipientValues.street ||
      !recipientValues.postalCode ||
      !senderValues.city ||
      !senderValues.country ||
      !senderValues.street ||
      !senderValues.postalCode ||
      !packageValues.weight ||
      !packageValues.height ||
      !packageValues.width ||
      !packageValues.length
    );
  };
  return (
    <DemoContainer>
      <Title>Step 1</Title>
      <p>
        Begin by utilizing the{" "}
        <a
          href="https://api.production.dhltouchpoint.se/api#/v2/QuoteController_createQuoteOptions"
          target="_blank"
        >
          Quote
        </a>{" "}
        endpoint to retrieve available options. This process involves providing
        only the essential details for sending a package: destination address,
        origin address, package dimensions, and standard sender and receiver
        information. Additionally, you have the flexibility to specify
        preferences such as quotes for service point delivery, home delivery, or
        both. For the purpose of this example, we will exclusively request
        quotes for service points. Feel free to experiment with different values
        using the input below, and click <b>Get Dummy Quotes</b> to proceed.
      </p>
      <DataButtons>
        <DhlButton onClick={setDummyData}>Add dummy data</DhlButton>
        <DhlButton onClick={clearAllValues}>Clear data</DhlButton>
      </DataButtons>
      <FullWidth>
        <CommunicantContainer>
          <Communicant
            values={senderValues}
            setValues={setSenderValues}
            type="Sender"
          />
          <Communicant
            values={recipientValues}
            setValues={setRecipientValues}
            type="Recipient"
          />
        </CommunicantContainer>
        <Package values={packageValues} setValues={setPackageValues} />
      </FullWidth>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <hr />
      <BottomButtons>
        {loading ? (
          <Loader />
        ) : (
          <DhlButton
            primary
            disabled={buttonDisabled()}
            onClick={getSandboxQuotes}
          >
            Get dummy quotes
          </DhlButton>
        )}
        <DhlButton onClick={() => setSeeBody((prev) => !prev)}>
          {"See request body"}
        </DhlButton>
      </BottomButtons>
      <CodeModal
        endPoint="POST /v2/quote"
        body={postBody}
        closeModal={() => setSeeBody(false)}
        showModal={seeBody}
      />
    </DemoContainer>
  );
};
