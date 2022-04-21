import {
   getGists,
   getGistsStart,
   getGistsSuccess,
   getGistsError,
} from '../../gists';

describe('get gists thunk', () => {
   it('success', async () => {
      const page = 2;
      const dispatch = jest.fn();
      const getPublicApiGists = jest.fn().mockResolvedValue({data: 'some'});
      const thunk = getGists(page);

      await thunk(dispatch, null, { getPublicApiGists });

      expect(getPublicApiGists).toBeCalledTimes(1);
      expect(getPublicApiGists).toBeCalledWith(page);
      expect(dispatch).toBeCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, getGistsStart());
      expect(dispatch).toHaveBeenNthCalledWith(2, getGistsSuccess('some'));
   });

   it('error', async () => {
      const page = 2;
      const error = { error: 'test error' };
      const dispatch = jest.fn();
      const getPublicApiGists = jest.fn().mockRejectedValue(error);
      const thunk = getGists(page);

      await thunk(dispatch, null, { getPublicApiGists });

      expect(getPublicApiGists).toBeCalledTimes(1);
      expect(getPublicApiGists).toBeCalledWith(page);
      expect(dispatch).toBeCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, getGistsStart());
      expect(dispatch).toHaveBeenNthCalledWith(2, getGistsError(error));
   });
});