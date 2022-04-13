import { request } from './request';

export const getPublicApiGists = (page) => {
   return request.get(`gists/public?page=${page}`);
}