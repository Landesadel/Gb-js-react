import { set, child, ref, get } from 'firebase/database';
import { database } from './frbase'

export const createConversationApi = (title) => {
   return set(child(ref(database), `conversations/${title}`), title);
};

export const getConversationApi = () => {
   get(child(ref(database), `conversations`));
};

