'use client';
import React, { FC } from 'react';
import Footer from '~/ui/footer/Footer';
import Navbar from '~/ui/navbar/Navbar';
import { DhlFeatures, ShopifyBanner, TopBanner } from '../components';
import { Container } from './MainPage.css';

export const MainPage: FC = () => {
  return (
    <Container>
      <Navbar />
      <TopBanner />
      <DhlFeatures />
      <ShopifyBanner />
      <Footer />
    </Container>
  );
};
