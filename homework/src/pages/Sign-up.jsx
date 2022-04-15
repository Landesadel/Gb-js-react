import { useState } from "react";
import { Input, Button } from '@mui/material';

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
            <Button onClick={console.log('form', form)}>Login</Button>
         </form>
      </div>
   )
};