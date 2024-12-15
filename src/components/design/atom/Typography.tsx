import { FC, HTMLAttributes } from "react";

type ExtendedParagraphProps = {};

type ParagraphProps = HTMLAttributes<HTMLParagraphElement> &
  ExtendedParagraphProps;

const Paragraph: FC<ParagraphProps> = ({ ...props }) => {
  return <p {...props} />;
};

type ExtendedHeadingProps = {};

type HeadingProps = HTMLAttributes<HTMLHeadElement> & ExtendedHeadingProps;

const Heading1: FC<HeadingProps> = ({ ...props }) => {
  return <h1 {...props} />;
};

const Heading2: FC<HeadingProps> = ({ ...props }) => {
  return <h2 {...props} />;
};

const Heading3: FC<HeadingProps> = ({ ...props }) => {
  return <h3 {...props} />;
};

const Heading4: FC<HeadingProps> = ({ ...props }) => {
  return <h4 {...props} />;
};

const Heading5: FC<HeadingProps> = ({ ...props }) => {
  return <h5 {...props} />;
};

const Heading6: FC<HeadingProps> = ({ ...props }) => {
  return <h6 {...props} />;
};

export {
  Paragraph,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
};
