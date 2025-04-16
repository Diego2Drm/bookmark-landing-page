import { featuresData } from "../components/utils/FeaturesData"
import { SET_ACTIVEDATA, SET_ISOPEN, SET_ISOPENINDEX } from "../actions/types";

const initialState = {
  isOpen: false,
  activeData: featuresData[0],
  isOpenIndex: null,
}

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ISOPEN:
      return { ...state, isOpen: action.payload }
    case SET_ACTIVEDATA:
      return { ...state, activeData: action.payload }
      case SET_ISOPENINDEX: 
       return {...state, isOpenIndex: action.payload}
    default:
      return state
  }
}