import {
   CREATE_CONVERSATION_START,
   CREATE_CONVERSATION_SUCCESS,
   CREATE_CONVERSATION_ERROR,
   GET_CONVERSATION_START,
   GET_CONVERSATION_SUCCESS,
   GET_CONVERSATION_ERROR
} from './types';
import { DELETE_CONVERSATION } from '../types';


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

export const createConversationStart = () => ({
   type: CREATE_CONVERSATION_START,
 });
 
 export const createConversationSucess = (conversation) => ({
   type: CREATE_CONVERSATION_SUCCESS,
   payload: conversation,
 });
 
 export const createConversationError = (e) => ({
   type: CREATE_CONVERSATION_ERROR,
   payload: e,
 });