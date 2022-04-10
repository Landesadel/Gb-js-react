import { CREATE_CONVERSATION } from './types';
import { DELETE_CONVERSATION } from '../types';

export const createConversations = (conversation) => {
   return { type: CREATE_CONVERSATION, payload: conversation };
};

export const deleteConversations = (conversation) => {
   return { type: DELETE_CONVERSATION, payload: conversation };
};