"use client";

import {useLastUpdated} from "@/hooks/useLastUpdated";

export function LastUpdated({ file }: { readonly file: string }) {
  const lastUpdated = useLastUpdated(file);

  return (
    <p>Last updated: {lastUpdated ? lastUpdated.toLocaleDateString() : "Unknown"}</p>
  );
}
