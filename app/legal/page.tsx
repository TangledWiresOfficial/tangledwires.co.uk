import {Metadata} from "next";
import { LegalPageClient } from "./LegalPageClient";

export const metadata: Metadata = {
  title: "Legal",
  openGraph: {
    title: "Legal",
  },
};

export default function Legal() {
  return <LegalPageClient />;
}
