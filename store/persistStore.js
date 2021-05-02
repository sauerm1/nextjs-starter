import create from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";

let authStore = persist(
  (set) => ({
    user: "",
    logIn: (user) =>
      set(() => {
        return { user: user };
      }),
      logOut: () =>
      set(() => {
        return { user: "" };
      }),
  }),
  {
    name: "userName", // unique name
    // getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
  }
);

authStore = devtools(authStore);

const useAuthStore = create(authStore);

export default useAuthStore;
