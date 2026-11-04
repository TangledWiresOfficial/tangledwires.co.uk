import type {Metadata} from "next";
import Text from "./text.mdx";
import {LegalDocument} from "../LegalDocument";

export const metadata: Metadata = {
  title: "TangledWires Account Terms of Service",
  openGraph: {
    title: "TangledWires Account Terms of Service",
  },
}

export default function AccountTermsPage() {
  return <LegalDocument content={Text} file="app/legal/account-terms/text.mdx" />;
}