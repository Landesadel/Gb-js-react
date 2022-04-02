import { useDispatch, useSelector } from "react-redux";
import { toggleVisibleProfile } from "../store/profile";


export const ProfilePage = () => {
   const { firstName, lastName, stVisibleProfile } = useSelector(state => state);
   const dispatch = useDispatch();
   return (
      <div>
         <h1>profile</h1>
         <button onClick={() => dispatch(toggleVisibleProfile())}>info profile</button>
         {stVisibleProfile && (
            <>
               <h3>firstName: <span>{firstName}</span></h3>
               <h3>lastName: <span>{lastName}</span></h3>
            </>
         )}
         
      </div>
   );
};