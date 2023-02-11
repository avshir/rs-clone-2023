import { MousePos } from "../../../spa/coreTypes";
import Sprite from "./sprite";

export type Player = {
  rotate: number;
  pos: number[];
  sprite: Sprite;
  width: number;
  height: number;
};

export type ClickInfo = {
  pos: MousePos;
  distance: number;
};