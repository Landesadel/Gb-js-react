import {
   messagesReducer,
   deleteMessage,
   getMessagesStart,
   getMessagesSucess,
   getMessagesError,
   sendMessagesStart,
   sendMessagesSucess,
   sendMessagesError,
} from "../../messages";

import {deleteConversations} from '../../conversations';
 
describe('message reducer', () => {
   describe('other types', () => {
      it('delete message by id', () => {
         const state = messagesReducer(
            {
               messages: {
                  chat1: [{ id: 1 }, { id: 2 }],
               },
            },
            deleteMessage('chat1', 1)
         );
         expect(state).toEqual({
            messages: {
               chat1: [{ id: 2 }],
            },
         });
      });

      it('delete conversation', () => {
         const state = messagesReducer(
            {
               messages: {
                  chat1: [],
                  chat2: [],
               },
            },
            deleteConversations('chat1')
         );

         expect(
            Object.keys(state.messages).find((c) => c === 'chat1')
         ).toBeUndefined();

         expect(state).toEqual({
            messages: {
               chat2: [],
            }
         })
      });
   });

   describe('get messages', () => {
      it('start', () => {
         const state = messagesReducer(
            {
               pending: false,
               error: 'error',
            },
            getMessagesStart()
         );

         expect(state.pending).toBe(true);
         expect(state.error).toBeNull();
      });

      it('success', () => {
         const state = messagesReducer(
            {
               pending: true,
               message: null,
            },
            getMessagesSucess('test')
         );
         expect(state.pending).toBe(false);
         expect(state.messages).toBe('test');
      });

      it('error', () => {
         const state = messagesReducer(
            {
               pending: true,
               error: null,
            },
            getMessagesError('error')
         );
         expect(state.pending).toBe(false);
         expect(state.error).toBe('error');
      });
   });


   describe('create messages', () => {
      it('start', () => {
         const state = messagesReducer(
            {
               pendingSendMessage: false,
               errorSendMessage: 'error',
            },
            sendMessagesStart()
         );
         expect(state.pendingSendMessage).toBe(true);
         expect(state.errorSendMessage).toBeNull();
      });

      it('success', () => {
         const state = messagesReducer(
            {
               pendingSendMessage: true,
               messages: {},
            },
            sendMessagesSucess('test mess', 1)
         );
         expect(state.pendingSendMessage).toBe(false);
         expect(state.messages).toEqual({1: ['test mess']});
      });

      it('error', () => {
         const state = messagesReducer(
            {
               pendingSendMessage: true,
               errorSendMessage: null,
            },
            sendMessagesError('error')
         );
         expect(state.pendingSendMessage).toBe(false);
         expect(state.errorSendMessage).toBe('error');
      });
   });
});