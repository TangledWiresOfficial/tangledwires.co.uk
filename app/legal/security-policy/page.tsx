import type {Metadata} from "next";
import Text from "./text.mdx";
import {LegalDocument} from "../LegalDocument";

export const metadata: Metadata = {
  title: "Security Policy",
  openGraph: {
    title: "Security Policy",
  },
}

export default function SecurityPolicyPage() {
  return <LegalDocument content={Text} file="app/legal/security-policy/text.mdx" />;
}
