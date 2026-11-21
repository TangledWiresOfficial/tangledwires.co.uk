import type {Metadata} from "next";
import { SitePrivacyPageClient } from "./SitePrivacyPageClient";

export const metadata: Metadata = {
  title: "tangledwires.co.uk Privacy Policy",
  openGraph: {
    title: "tangledwires.co.uk Privacy Policy",
  },
};

export default function SitePrivacy() {
  return <SitePrivacyPageClient />;
}
