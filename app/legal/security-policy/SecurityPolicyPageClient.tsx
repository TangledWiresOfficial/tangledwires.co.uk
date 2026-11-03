"use client";

import Text from "./text.mdx";
import {LastUpdated} from "@/components/LastUpdated";

export function SecurityPolicyPageClient() {
  return (
    <>
      <LastUpdated file="app/legal/security-policy/text.mdx" />
      <br />
      <div className="prose prose-neutral">
        <Text />
      </div>
    </>
  );
}
