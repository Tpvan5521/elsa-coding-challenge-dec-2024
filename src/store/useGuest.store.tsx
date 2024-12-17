import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const GUEST_STORAGE_KEY = "guest";

type GuestStoreType = {
  initialize: boolean;
  ssid: string | undefined;
  initGuestStoreComplete: () => void;
  initGuest: (ssid: string) => void;
};

export const useGuestStore = create<GuestStoreType>()(
  devtools(
    persist(
      (set) => ({
        initialize: false,
        ssid: undefined,
        initGuestStoreComplete: () => {
          set({ initialize: true });
        },
        initGuest: (ssid: string) => {
          set({ ssid });
        },
      }),
      {
        name: GUEST_STORAGE_KEY,
        // storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
