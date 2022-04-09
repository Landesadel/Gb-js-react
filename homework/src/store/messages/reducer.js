import { nanoid } from 'nanoid';
import { SEND_MESSAGE, DELETE_MESSAGE } from "./types";
import { DELETE_CONVERSATION } from "../types";

const initialState = {
   messages: {

   },
};

export const messagesReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE:
         return {
            ...state,
            messages: {
               ...state.messages,
               [action.payload.roomId]: [
                  ...(state.messages[action.payload.roomId] ?? []),
                  {...action.payload.message, date:new Date(), id: nanoid()},
               ],
            },
         };
         case DELETE_MESSAGE:
            return {
              ...state,
              messages: {
                ...state.messages,
                 [action.payload.roomId]: state.messages[action.payload.roomId].filter(
                   (message) => message.id !== action.payload.messageId
                ) ,
              },
         };
      
         case DELETE_CONVERSATION:  
            return {
              ...state,
              messages: Object.entries(state.messages).reduce(
                (messages, [key, value]) => {
                  if (key === action.payload) {
                    return messages;
                  }
      
                  messages[key] = value;
      
                  return messages;
                },
                {}
              ),
            };
      
      default:
         return state;
   }
};

