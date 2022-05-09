import { atom } from "recoil";

export const dialogState = atom<boolean>({
  key: "dialogState",
  default: false,
});

export const yearState = atom<string>({
  key: "yearState",
  default: '2022',
});

export const courState = atom<string>({
  key: "courState",
  default: '2',
});

export const animeState = atom<Array<any>>({
  key: "animeState",
  default: [],
});

interface snackbar {
  open: boolean;
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
};

export const snackBarState = atom<snackbar>({
  key: "snackBarState",
  default: {
    open: false,
    vertical: 'top',
    horizontal: 'left',
  }
});