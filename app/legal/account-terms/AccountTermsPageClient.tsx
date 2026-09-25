"use client";

import Terms from "./text.mdx";
import {LastUpdated} from "@/components/LastUpdated";

export function AccountTermsPageClient() {
  return (
    <>
      <LastUpdated file="app/legal/account-terms/text.mdx" />
      <br />
      <div className="prose prose-neutral">
        <Terms />
      </div>
    </>
  );
}
