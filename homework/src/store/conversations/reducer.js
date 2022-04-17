import { nanoid } from "nanoid";
import {
   CREATE_CONVERSATION,
   GET_CONVERSATION_ERROR,
   GET_CONVERSATION_START,
   GET_CONVERSATION_SUCCESS,
} from "./types";
import { DELETE_CONVERSATION } from '../types';

const initialState = {
   conversations: [],
   pending: false,
   error: null
};

export const conversationsReducer = (state = initialState, action) => {
   switch (action.type) {
      case CREATE_CONVERSATION:
         return {
            ...state,
            conversations: [...state.conversations, {
               title: action.payload,
               id: nanoid(),
            }],
         };
      case DELETE_CONVERSATION:
         return {
            ...state,
            conversations: state.conversations.filter(
               (conversation) => conversation !== action.payload
            ),
         };
     case GET_CONVERSATION_START:
         return { ...state, pending: true, error: null };
     case GET_CONVERSATION_SUCCESS:
         return { ...state, pending: false, conversations: action.payload };
     case GET_CONVERSATION_ERROR:
         return { ...state, pending: false, error: action.payload };
      default:
         return state;
   }
};