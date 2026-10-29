import type {Metadata} from "next";
import {AccountPrivacyPageClient} from "./AccountPrivacyPageClient";

export const metadata: Metadata = {
  title: "TangledWires Account Privacy Policy",
  openGraph: {
    title: "TangledWires Account Privacy Policy",
  },
}

export default function AccountPrivacyPage() {
  return <AccountPrivacyPageClient />;
}