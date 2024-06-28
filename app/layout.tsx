"use client";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import Footer from "./components/Footer";
import { Toaster } from "sonner";

import "./styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className=" text-black !overflow-y-auto flex flex-col min-h-screen">
          {children}
          <Footer />
          <Toaster richColors position="top-center" />
        </body>
      </html>
    </StoreProvider>
  );
}
