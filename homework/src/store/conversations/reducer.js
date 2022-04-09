import { nanoid } from "nanoid";
import { CREATE_CONVERSATION, DELETE_CONVERSATION } from "./types";

const initialState = {
      conversations: [
      {
         title: 'Chat1',
         id: nanoid(),
      },
      {
      title: 'Chat2',
      id: nanoid(),
      },
      {
         title: 'Chat3',
         id: nanoid(),
      },  
   ],
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
   
      default:
         return state;
   }
};