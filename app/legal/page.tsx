import {Metadata} from "next";
import {PageHeader} from "@/components/PageHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal",
  openGraph: {
    title: "Legal",
  },
};

export default function Legal() {
  return (
    <>
      <PageHeader title="Legal" />
      <div>
        <ol className="list-disc list-inside">
          <li><Link href="/legal/site-privacy">tangledwires.co.uk Privacy Policy</Link></li>
        </ol>
      </div>
    </>
  );
}