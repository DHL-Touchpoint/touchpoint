import localFont from 'next/font/local';

export const FontDelivery = localFont({
  src: [
    {
      path: '../assets/fonts/Delivery_W_Rg.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Delivery_W_Bd.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Delivery_W_CdBlk.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-delivery',
});
