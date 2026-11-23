"use client";

import {PageHeader} from "@/components/PageHeader";
import {PageSection} from "@patternfly/react-core";
import Link from "next/link";

export function LegalPageClient() {
  return (
    <PageSection>
      <PageHeader title="Legal" />
      <div>
        <ul>
          <li><Link href="/legal/site-privacy">tangledwires.co.uk Privacy Policy</Link></li>
          <br />
          <li><Link href="/legal/account-terms">TangledWires Account Terms of Service</Link></li>
          <li><Link href="/legal/account-privacy">TangledWires Account Privacy Policy</Link></li>
          <li><Link href="/legal/account-deletion">TangledWires Account Deletion</Link></li>
          <br />
          <li><Link href="/legal/stationary-sync-terms">Stationary Sync Terms of Service</Link></li>
          <li><Link href="/legal/stationary-sync-privacy">Stationary Sync Privacy Policy</Link></li>
          <br />
          <li><Link href="/legal/security-policy">Security Policy</Link></li>
        </ul>
      </div>
    </PageSection>
  );
}
