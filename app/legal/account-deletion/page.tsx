import type {Metadata} from "next";
import {PageHeader} from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "TangledWires Account Deletion",
  openGraph: {
    title: "TangledWires Account Deletion",
  },
};

export default function AccountDeletion() {
  return (
    <>
      <PageHeader title="TangledWires Account Deletion" />
      <div>
        <p>If you wish to delete your account, please contact us at <a href="mailto:support@tangledwires.co.uk">support@tangledwires.co.uk</a>. We will process your request as soon as possible.</p>
        <p>All data associated with your account will be permanently deleted within 30 days of your request.</p>
        <p>You can read our <a href="/legal/account-privacy">TangledWires Account Privacy Policy</a> for more information on how we handle your data.</p>
      </div>
    </>
  );
}