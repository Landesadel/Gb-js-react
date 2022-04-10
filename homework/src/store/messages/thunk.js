import { sendMessage } from "./actions";

export const sendMessageWithBot = (roomId, message) => (dispatch) => {
   dispatch(sendMessage(roomId, message));

   if (message.author === 'User') {
      setTimeout(() => {
         dispatch(
            sendMessage(roomId, {
               author: 'Another some Bot',
               message: 'No! Interesting message is mine!'
            })
         );
      }, 1000);
   }
};