import { useEffect } from 'react';
import {getGists} from '../store/gists'
import { useSelector, useDispatch } from 'react-redux';

export function GistsPage() {
   const dispatch = useDispatch();
   const { gists, error, pending } = useSelector((state) => state.gists);

   useEffect(() => {
      if (!gists.length) {
         dispatch(getGists(1));
      }
        
   }, [dispatch, gists]);

   if (error) {
      return <h1>Error!</h1>
   }
   return (
      <div>
         <h1>Gists page</h1>
         {Array.from({ length: 10 }).map((_, i) => <button onClick={() => dispatch(getGists(i + 1))} key={i}>{i + 1}</button>)}
         {pending ? (
            <h1>...Loading...</h1>
         ) : (
          gists?.map((gist, index) => <h2 key={index}>{gist.commits_url}</h2>)  
         )}       
      </div>
   )
};