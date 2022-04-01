import { useSelector } from "react-redux";

export const ProfilePage = () => {
   const {firstName, lastName, visibleProfile} = useSelector(state => state)
   return (
      <div>
         <h1>profile</h1>
         {visibleProfile && (
            <>
               <h3>firstName: <span>{firstName}</span></h3>
               <h3>lastName: <span>{lastName}</span></h3>
            </>
         )}
         
      </div>
   );
};