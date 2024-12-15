import { FC, ImgHTMLAttributes } from "react";

type ExtendedProps = {};

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "alt" | "src"> &
  Required<Pick<ImgHTMLAttributes<HTMLImageElement>, "alt" | "src">> &
  ExtendedProps;

export const Image: FC<Props> = ({ ...props }) => {
  return <img {...props} />;
};
