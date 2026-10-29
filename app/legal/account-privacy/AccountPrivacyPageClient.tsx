"use client";

import Terms from "./text.mdx";
import {LastUpdated} from "@/components/LastUpdated";

export function AccountPrivacyPageClient() {
  return (
    <>
      <LastUpdated file="app/legal/account-privacy/text.mdx" />
      <br />
      <div className="prose prose-neutral">
        <Terms />
      </div>
    </>
  );
}
