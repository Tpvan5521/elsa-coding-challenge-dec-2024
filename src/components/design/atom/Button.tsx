import { ButtonHTMLAttributes, FC } from "react";

type ExtendedProps = {};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & ExtendedProps;

export const Button: FC<Props> = ({ ...props }) => {
  return <button {...props} />;
};
