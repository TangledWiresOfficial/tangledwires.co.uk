import type {Metadata} from "next";
import {AccountDeletionPageClient} from "./AccountDeletionPageClient";

export const metadata: Metadata = {
  title: "TangledWires Account Deletion",
  openGraph: {
    title: "TangledWires Account Deletion",
  },
};

export default function AccountDeletion() {
  return <AccountDeletionPageClient />;
}
