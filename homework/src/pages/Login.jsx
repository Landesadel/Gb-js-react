import { useState } from "react";
import { Input, Button } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../api/firebase';

const login = (form) => {
   signInWithEmailAndPassword(auth, form.email, form.pssword);
};

export function LoginPage() {
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
         <h1>Login page!</h1>
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
            <Button onClick={() => {login(form)}}>Login</Button>
         </form>
      </div>
   )
};