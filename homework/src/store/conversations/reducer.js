import { CREATE_CONVERSATION, DELETE_CONVERSATION } from "./types";

const initialState = {
      conversations: [
      {
         title: 'Chat1',
         id: Math.random(),
      },
      {
      title: 'Chat2',
      id: Math.random(),
      },
      {
         title: 'Chat3',
         id: Math.random(),
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
               id: Math.random(),
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