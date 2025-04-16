import { SET_ACTIVEDATA, SET_EMAIL, SET_ERROR, SET_ISOPEN, SET_ISOPENINDEX } from "./types";

export const setIsOpen = (payload) => ({
  type: SET_ISOPEN,
  payload
})

export const setActiveData = (payload) => ({
  type: SET_ACTIVEDATA,
  payload
})

export const setIsOpenIndex = (payload) => ({
  type: SET_ISOPENINDEX,
  payload
})

export const setEmail =  (payload) => ({
  type: SET_EMAIL,
  payload
})

export const setError = (payload) => ({
  type: SET_ERROR,
  payload
})