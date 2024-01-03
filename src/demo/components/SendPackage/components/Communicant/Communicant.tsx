import React, { FC } from 'react';
import { Container, InfoContainer, Title } from './Communicant.css';
import { TextInputBase } from '@/demo/components/TextInputBase';

type Values = {
  city: string;
  country: string;
  street: string;
  postalCode: string;
  name: string;
  email: string;
  phone: string;
};

type Props = {
  type: 'Sender' | 'Recipient';
  values: Values;
  setValues: (prevValues: (prev: Values) => Values) => void;
};

export const Communicant: FC<Props> = ({ type, values, setValues }) => {
  return (
    <Container>
      <Title>{type}</Title>
      <InfoContainer>
        <TextInputBase fullWidth disabled value={values.name} label="Name" />
        <TextInputBase fullWidth disabled value={values.email} label="Email" />
        <TextInputBase fullWidth disabled value={values.phone} label="Phone" />
      </InfoContainer>
      <TextInputBase
        fullWidth
        disabled={type === 'Sender'}
        value={values.country}
        label="Country code"
        onChange={(e) =>
          setValues((prev) => ({ ...prev, country: e.target.value }))
        }
      />
      <TextInputBase
        fullWidth
        value={values.city}
        label="City"
        onChange={(e) =>
          setValues((prev) => ({ ...prev, city: e.target.value }))
        }
      />
      <TextInputBase
        fullWidth
        value={values.street}
        label="Street name"
        onChange={(e) =>
          setValues((prev) => ({ ...prev, street: e.target.value }))
        }
      />
      <TextInputBase
        fullWidth
        value={values.postalCode}
        label="Postal code"
        onChange={(e) =>
          setValues((prev) => ({ ...prev, postalCode: e.target.value }))
        }
      />
    </Container>
  );
};
