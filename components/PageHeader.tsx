import {Title} from "@patternfly/react-core";

export function PageHeader({ title }: { title: string }) {
  return <Title headingLevel="h1">{title}</Title>;
}
