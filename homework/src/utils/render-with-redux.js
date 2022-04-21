import { Provider } from 'react-redux';
import {createStore} from 'redux';
import {render} from '@testing-library/react';
import { reducer } from '../../../store';

export const renderWithRedux = (component, initialState) => {
   const store = createStore(reducer, initialState);

   return {
      store,
      ...render(
         <Provider store={store}>
            { component }
         </Provider>
      ),
   }
   
}