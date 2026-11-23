import type {Metadata} from "next";
import Text from "./text.mdx";
import {LegalDocument} from "../LegalDocument";

export const metadata: Metadata = {
  title: "Stationary Sync Terms of Service",
  openGraph: {
    title: "Stationary Sync Terms of Service",
  },
}

export default function AccountTermsPage() {
  return <LegalDocument content={<Text />} file="app/legal/stationary-sync-terms/text.mdx" />;
}
