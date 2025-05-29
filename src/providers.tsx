"use client";

import React from "react";
import type { ReactNode } from "react";
import { MiniKitProvider } from "@coinbase/onchainkit/minikit";
import { base } from "wagmi/chains";

export function Providers(props: { children: ReactNode }) {
  return (
    <MiniKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
      chain={base}
      config={{
        appearance: {
          mode: 'auto',
          theme: 'snake', // You can change this to your preferred theme
          name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME || 'AI Ancestry',
          logo: process.env.NEXT_PUBLIC_ICON_URL || '/onchainkit-logo.png',
        },
      }}
    >
      {props.children}
    </MiniKitProvider>
  );
}
