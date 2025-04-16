import { SET_ISOPEN } from "../actions/types";

const initialState = {
  isOpen: false,
}

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ISOPEN:
      return { ...state, isOpen: action.payload}
    default:
      return state
  }
}