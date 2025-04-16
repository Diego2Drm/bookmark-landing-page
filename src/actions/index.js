import { SET_ACTIVEDATA, SET_ISOPEN } from "./types";

export const setIsOpen = (payload) => ({
  type: SET_ISOPEN,
  payload
})

export const setActiveData = (payload) => ({
  type: SET_ACTIVEDATA,
  payload
})