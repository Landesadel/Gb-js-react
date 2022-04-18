import {
   getConversationsError,
   getConversationsStart,
   getConversationsSuccess,
   createConversationStart,
   createConversationError,
   createConversationSucess,
} from './actions';

export const getConversations = () => async (dispatch, _, api) => {
   const conversations = [];
   try {
      dispatch(getConversationsStart());

      const snapshot = await api.getConversationApi();

      snapshot.forEach((snap) => {
         conversations.push(snap.val());
      });

      dispatch(getConversationsSuccess(conversations));
   } catch (e) {
      dispatch(getConversationsError(e));
   }
};

export const createConversationFb =
  (conversation) => async (dispatch, _, api) => {
    try {
      dispatch(createConversationStart());
      await api.createConversationApi(conversation);

      dispatch(createConversationSucess(conversation));
    } catch (e) {
      dispatch(createConversationError(e));
    }
  };