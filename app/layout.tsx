import type {Metadata, Viewport} from "next";
import React from "react";
import {LayoutClient} from "./LayoutClient";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "./globals.css";

export const metadata: Metadata = {
  title: { absolute: "TangledWires", template: "%s | TangledWires" },
  creator: "TangledWires",
  openGraph: {
    type: "website",
    title: { absolute: "TangledWires", template: "%s | TangledWires" },
    siteName: "TangledWires",
    images: [{ url: "/images/logo_dark.png" }]
  },
};

export const viewport: Viewport = {
  themeColor: "#00be0b",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <LayoutClient>{children}</LayoutClient>;
}
