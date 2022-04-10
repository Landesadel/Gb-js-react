import { useDispatch, useSelector } from "react-redux";
import { ProfileForm } from "../components/ProfileForm/ProfileForm";
import { toggleVisibleProfile } from "../store/profile";
import styles from './pages.module.css'


export const ProfilePage = () => {
   const { firstName, lastName,country, phone, age, stVisibleProfile } = useSelector((state) => state.profile);
   const dispatch = useDispatch();
   return (
      <div className={styles.profileBox}>
         <div className={styles.infoProfile}>
            <h1 className={styles.titleInfo}>Your profile info</h1>
            <button className={styles.btnUserInfo} onClick={() => dispatch(toggleVisibleProfile())}>info profile</button>
            {stVisibleProfile && (
               <>
                  <h3 className={styles.infoText}>FirstName: <span>{firstName}</span></h3>
                  <h3 className={styles.infoText}>LastName: <span>{lastName}</span></h3>
                  <h3 className={styles.infoText}>Age: <span>{age}</span></h3>
                  <h3 className={styles.infoText}>Phone: <span>{phone}</span></h3>
                  
               </>
            )}
         </div>
         <hr />
         <ProfileForm/>
      </div>
   );
};