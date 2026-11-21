"use client";

import {LastUpdated} from "@/components/LastUpdated";
import {Content, PageSection} from "@patternfly/react-core";
import {JSX} from "react";

export type LegalDocumentProps = {
  readonly content: JSX.Element;
  readonly file: string;
};

export function LegalDocument({ content, file }: LegalDocumentProps) {
  return (
    <PageSection>
      <LastUpdated file={file} />
      <br />
      <Content>
        {content}
      </Content>
    </PageSection>
  );
}
