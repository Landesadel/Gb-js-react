import { SEND_MESSAGE } from "../messages";
export const botMessage = (store) => (next) => (action) => {
   if (
      action.type === SEND_MESSAGE &&
      action.payload.message.author === 'User'
   ) {
      // setTimeout(() => {
      //    store.dispatch(
      //      sendMessage(action.payload.roomId, {
      //          author: 'Another Bot',
      //          message: 'My message is  more interesting! >.< ',
      //      })
      //    );
      // }, 1000); 
   }
   return next(action);
};