import React, { FC } from 'react';
import { Container, PackageInputs, Title } from './Package.css';
import { TextInputBase } from '@/demo/components/TextInputBase';

type Values = {
  weight: number;
  height: number;
  width: number;
  length: number;
};

type Props = {
  values: Values;
  setValues: (prevValues: (prev: Values) => Values) => void;
};

export const Package: FC<Props> = ({ values, setValues }) => {
  return (
    <Container>
      <Title>Package</Title>
      <PackageInputs>
        <TextInputBase
          fullWidth
          min={1}
          value={values.weight}
          label="Weight (kg)"
          type="number"
          onChange={e =>
            setValues(prev => ({
              ...prev,
              weight: Math.max(parseInt(e.target.value), 1),
            }))
          }
        />
        <TextInputBase
          fullWidth
          min={4}
          value={values.height}
          label="Height (cm)"
          type="number"
          onChange={e =>
            setValues(prev => ({
              ...prev,
              height: Math.max(parseInt(e.target.value), 4),
            }))
          }
        />
        <TextInputBase
          fullWidth
          min={14}
          value={values.length}
          label="Length (cm)"
          type="number"
          onChange={e =>
            setValues(prev => ({
              ...prev,
              length: Math.max(parseInt(e.target.value), 14),
            }))
          }
        />
        <TextInputBase
          fullWidth
          min={11}
          value={values.width}
          label="Width (cm)"
          type="number"
          onChange={e =>
            setValues(prev => ({
              ...prev,
              width: Math.max(parseInt(e.target.value), 11),
            }))
          }
        />
      </PackageInputs>
    </Container>
  );
};
