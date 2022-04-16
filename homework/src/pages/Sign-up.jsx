import { useState } from "react";
import { Input, Button } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../api/firebase';


const create = async (form) => {
  await createUserWithEmailAndPassword(auth, form.email, form.password);
};

export function SignUpPage() {
   const [form, setForm] = useState({ email: "", password: "" });

   const handleChangeForm = (event) => {
      const field = event.target.getAttribute('data-name');

      setForm({
         ...form,
         [field]: event.target.value,
      });
   };

   return (
      <div>
         <h1>Sign-up page!</h1>
         <form>
           <Input
               placeholder='Enter your email...'
               value={form.email}
               inputProps={{ 'data-name': 'email' }} 
               onChange={handleChangeForm}
               />
            <Input
               placeholder='Enter your password...'
               value={form.password}
               inputProps={{ 'data-name': 'password' }} 
               onChange={handleChangeForm}
            />
            <Button onClick={() => {create(form)}}>Sign-up!</Button>
         </form>
      </div>
   )
};