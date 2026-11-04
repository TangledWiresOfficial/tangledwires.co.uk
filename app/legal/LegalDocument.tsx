import type {MDXContent} from "mdx/types";
import {LastUpdated} from "@/components/LastUpdated";

export type LegalDocumentProps = {
  readonly content: MDXContent;
  readonly file: string;
};

export function LegalDocument({ content: Content, file }: LegalDocumentProps) {
  return (
    <>
      <LastUpdated file={file} />
      <br />
      <div className="prose prose-neutral">
        <Content />
      </div>
    </>
  );
}
