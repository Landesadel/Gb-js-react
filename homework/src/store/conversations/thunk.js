import { getConversationsError, getConversationsStart, getConversationsSuccess } from './actions';
import { nanoid } from "nanoid";

export const getConversations = () => async (dispatch, _, api) => {
   const conversations = [{
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
   }];
   try {
      dispatch(getConversationsStart())

      const snapshot = await api.getConversationApi();

      snapshot.forEach((snap) => {
         conversations.push(snap.val());
      });
      dispatch(getConversationsSuccess(conversations));
   } catch (e) {
      dispatch(getConversationsError(e));
   }
};