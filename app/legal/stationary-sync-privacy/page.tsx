import type {Metadata} from "next";
import Text from "./text.mdx";
import {LegalDocument} from "../LegalDocument";

export const metadata: Metadata = {
  title: "Stationary Sync Privacy Policy",
  openGraph: {
    title: "Stationary Sync Privacy Policy",
  },
}

export default function AccountPrivacyPage() {
  return <LegalDocument content={<Text />} file="app/legal/stationary-sync-privacy/text.mdx" />;
}
