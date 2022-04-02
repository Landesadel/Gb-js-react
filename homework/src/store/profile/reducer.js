import { TOGGLE_VISIBLE_PROFILE } from "./types";

const initialState = {
   stVisibleProfile: true,
   firstName: 'Some',
   lastName: 'Person',
};

export const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case TOGGLE_VISIBLE_PROFILE:
         return {...state, stVisibleProfile: !state.stVisibleProfile};
      default:
         return state;
   }
};