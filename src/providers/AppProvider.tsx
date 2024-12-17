import { FC, ReactNode, useEffect } from "react";
import { useGuestStore } from "store";
import { v4 as uuid } from "uuid";

const useInitGuest = () => {
  const guestStore = useGuestStore();

  useEffect(() => {
    guestStore.initGuestStoreComplete();
  }, []);

  useEffect(() => {
    if (!guestStore.initialize || guestStore.ssid) return;
    guestStore.initGuest(uuid());
  }, [guestStore.ssid, guestStore.initialize]);
};

type Props = {
  children: ReactNode;
};

export const AppProvider: FC<Props> = (props) => {
  const { children } = props;

  useInitGuest();

  return <>{children}</>;
};
