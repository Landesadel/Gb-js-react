import { request } from './request';

export const getPublicApiGists = (page) => {
   return request.get(`gists/public?page=${page}`);
}

export const searchGistsByNameApi = (name = "landesadel") => {
   return request.get(`/users/${name}/gists`);
 };