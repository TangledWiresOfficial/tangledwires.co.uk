import type {Metadata} from "next";
import Text from "./text.mdx";
import {LegalDocument} from "../LegalDocument";

export const metadata: Metadata = {
  title: "TangledWires Account Privacy Policy",
  openGraph: {
    title: "TangledWires Account Privacy Policy",
  },
}

export default function AccountPrivacyPage() {
  return <LegalDocument content={Text} file="app/legal/account-privacy/text.mdx" />;
}