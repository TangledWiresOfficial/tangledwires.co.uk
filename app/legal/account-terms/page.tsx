import type {Metadata} from 'next';
import {AccountTermsPageClient} from "@/app/legal/account-terms/AccountTermsPageClient";

export const metadata: Metadata = {
  title: "TangledWires Account Terms of Service",
  openGraph: {
    title: "TangledWires Account Terms of Service",
  },
}

export default function AccountTermsPage() {
  return <AccountTermsPageClient />;
}