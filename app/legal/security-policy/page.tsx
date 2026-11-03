import type {Metadata} from "next";
import {SecurityPolicyPageClient} from "./SecurityPolicyPageClient";

export const metadata: Metadata = {
  title: "Security Policy",
  openGraph: {
    title: "Security Policy",
  },
}

export default function SecurityPolicyPage() {
  return <SecurityPolicyPageClient />;
}
