import { set, child, ref } from 'firebase/database';
import { database } from './firebase';

export const createConversationApi = ({ title, id }) => {
   return set(child(ref(database), `conversations/${id}`), title);
};