import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const PrivateRoute: FC<Props> = (props) => {
  const { children } = props;

  // if (canNotAccessLeaderBoard) return <></>

  return children;
};
