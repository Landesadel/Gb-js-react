import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Button } from '@mui/material';
import styles from './ProfileForm.module.css';
import { deleteMessage } from '../../store/messages';

export function ProfileForm({firstName, lastName, phone, age}) {
   const [form, setForm] = useState({ firstName, lastName, phone, age });
   const dispatch = useDispatch();
   const handleChangeForm = (event) => {
      const field = event.target.getAttribute('data-name');

      setForm({
         ...form,
         [field]: event.target.value,
      });
   };

   return (
    <div className={styles.formBox}>
         <h1>Edit profile</h1>
         <form>
            <Input
               placeholder='Enter your first name...'
               value={form.firstName}
               inputProps={{ 'data-name': 'firstName' }} 
               onChange={handleChangeForm}
               />
            <Input
               placeholder='Enter your last name...'
               value={form.lastName}
               inputProps={{ 'data-name': 'lastName' }} 
               onChange={handleChangeForm}
               />
            <Input
               placeholder='Enter your age...'
               value={form.age}
               inputProps={{ 'data-name': 'age' }} 
               onChange={handleChangeForm}
               />
            <Input
               placeholder='Enter your phone number...'
               value={form.phone}
               inputProps={{ 'data-name': 'phone' }} 
               onChange={handleChangeForm}
               />
            <Button onClick={() => {dispatch(deleteMessage(form))}}>Save info</Button>
         </form>
    </div>
 )
}

