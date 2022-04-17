import { set, child, ref } from 'firebase/database';
import { database } from './firebase';

export const createConversationApi = ({ title, id }) => {
   return set(child(ref(database), `conversations/${title}}`), title);
};

export const getConversationApi = () => {
   getConversationApi(child(ref(database), `conversations`))
};

