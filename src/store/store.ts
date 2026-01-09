import { create } from "zustand";

type themeStore = {
  theme: string;
  changeTheme: () => void;
};

export const useThemeStore = create<themeStore>((set) => ({
  theme: "light",
  changeTheme: () => {
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    }));
  },
}));


type menuStore = {
      stateMenu: boolean
      changeMenu: () => void
}

export const useMenuStore = create<menuStore>((set) => ({
      stateMenu: true,
      changeMenu: () => {
            set((state) => ({
                  stateMenu: !state.stateMenu
            }))
      }

}))