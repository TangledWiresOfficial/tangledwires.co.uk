import {Flex, FlexItem} from "@patternfly/react-core";
import Image, {ImageProps} from "next/image";
import {PageHeader} from "./PageHeader";

export type ProjectHeaderProps = {
  readonly title: string;
  readonly description: string;
  readonly image: ImageProps["src"];
  readonly imageAlt: string;
};

export function ProjectHeader({ title, description, image, imageAlt }: ProjectHeaderProps) {
  return (
    <Flex style={{ alignItems: "center" }}>
      <FlexItem>
        <PageHeader title={title} />
        <p>
          {description}
        </p>
      </FlexItem>
      <FlexItem>
        <Image src={image} alt={imageAlt} height="450" />
      </FlexItem>
    </Flex>
  );
}
