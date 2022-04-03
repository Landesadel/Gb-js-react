import { UPDATE_PROFILE, TOGGLE_VISIBLE_PROFILE } from "./types";

const initialState = {
   stVisibleProfile: true,
   firstName: 'Some',
   lastName: 'Person',
   age: 27,
   phone: '+7(234)234-34-23',

};

export const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case TOGGLE_VISIBLE_PROFILE:
         return { ...state, stVisibleProfile: !state.stVisibleProfile };
      case UPDATE_PROFILE:
         return { ...state, ...action.payload };
      default:
         return state;
   }
};