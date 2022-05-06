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
  default: '1',
});

export const animeState = atom<Array<any>>({
  key: "animeState",
  default: [],
});