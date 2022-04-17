import { CREATE_CONVERSATION, GET_CONVERSATION_START, GET_CONVERSATION_SUCCESS, GET_CONVERSATION_ERROR} from './types';
import { DELETE_CONVERSATION } from '../types';

export const createConversations = (conversation) => {
   return { type: CREATE_CONVERSATION, payload: conversation };
};

export const deleteConversations = (conversation) => {
   return { type: DELETE_CONVERSATION, payload: conversation };
};

export const getConversationsStart = () => ({
   type: GET_CONVERSATION_START,
});
export const getConversationsSuccess = (conversation) => ({
   type: GET_CONVERSATION_SUCCESS,
   payload: conversation,
});
export const getConversationsError = (e) => ({
   type: GET_CONVERSATION_ERROR,
   payload: e,
});