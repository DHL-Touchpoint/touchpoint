"use client";
import { FontDelivery } from "@/styles";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          lineHeight: 1.5,
        }}
      >
        <main className={FontDelivery.className}>{children}</main>
      </body>
    </html>
  );
}
