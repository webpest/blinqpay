"use client";

import store, { persistor } from "@/lib/store";
import { PersistGate } from "redux-persist/integration/react";
import type { ReactNode } from "react";
import { Provider } from "react-redux";

interface Props {
  readonly children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
