import { FC, ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main className="rtq-main">{children}</main>
      <Footer />
    </>
  );
};
