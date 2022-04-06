import { CREATE_CONVERSATION, DELETE_CONVERSATION } from './types';

export const createConversations = (conversation) => {
   return { type: CREATE_CONVERSATION, payload: conversation };
};

export const deleteConversations = (conversation) => {
   return { type: DELETE_CONVERSATION, payload: conversation };
};