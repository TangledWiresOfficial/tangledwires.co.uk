"use client";

import {useLastUpdated} from "@/app/legal/utils";

export function LastUpdated({ file }: { readonly file: string }) {
  const lastUpdated = useLastUpdated(file);

  return (
    <p>Last updated: {lastUpdated ? lastUpdated.toLocaleDateString() : "Unknown"}</p>
  );
}