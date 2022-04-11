export const messagesSelector = (roomId) => (state) => {
   return state.messages.messages[roomId] ?? [];
}

export const lastMessSelector = (roomId) => (state) => {
   const messages = state.messages.messages[roomId] ?? [];
   return messages[messages.length - 1];
};