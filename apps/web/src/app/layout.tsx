import {
  ApiClientProvider,
  GlobalStylesProvider,
  QueryClientProvider,
  StoreProvider,
} from '~/core';
import { ModalProvider } from '~/ui/modal';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>DHL Touchpoint</title>
      </head>
      <body>
        <ApiClientProvider>
          <QueryClientProvider>
            <GlobalStylesProvider>
              <StoreProvider>
                <ModalProvider>{children}</ModalProvider>
              </StoreProvider>
            </GlobalStylesProvider>
          </QueryClientProvider>
        </ApiClientProvider>
      </body>
    </html>
  );
}
