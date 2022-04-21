import { Chat } from './Chat';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRedux } from '../../../utils/render-with-redux';

describe('chat component', () => {
   it('render chat with title', () => {
      const mess = { author: 'test', message: 'some' };
      
      const {container} = renderWithRedux(<Chat title='chat1' />, {
         messages: {
            messages: {
               chat1: [mess]
            },
         },
      });


      // eslint-disable-next-line testing-library/no-container
      const nodes = [...container.querySelectorAll('.text')];

      expect(nodes.length).toBe(3);
      // expect(nodes[0].toHaveTextContent('chat1'));
      // expect(nodes[1].toHaveTextContent('mess.author'));
      // expect(nodes[2].toHaveTextContent('mess.message'));


   });
   it('render chat with selected', () => {
      const mess = { author: 'test', message: 'some' };

      renderWithRedux(<Chat title='chat1' selected={true}/>, {
         messages: {
            messages: {
               chat1: [mess]
            },
         },
      });
   
      expect(screen.getByTestId('wrapper')).toHaveClass('Mui-selected');
   });

   it('render chat with onClick', () => {
      const onClick = jest.fn();
      
      const { baseElement } = renderWithRedux(<Chat title='chat1' onClick={onClick}/>, {
         messages: {
            messages: {
               chat1: []
            },
         },
      });

      // eslint-disable-next-line testing-library/no-node-access
      userEvent.click(baseElement.querySelector('.text'));

      expect(onClick).toBeCalledTimes(1);
   });
});