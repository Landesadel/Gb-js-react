import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import SmsIcon from '@mui/icons-material/Sms';
import {
   Button,
   Avatar,
   Container,
   Typography,
   IconButton,
   Toolbar,
   Box,
   AppBar
} from '@mui/material';


const menuList = [
   { title: 'Home', to: '/'},
   { title: 'Profile', to: '/profile'},
   { title: 'Chat', to: '/chat' },
]

export const Header = () => {
   return (
      <AppBar  position='static' color='primary' className={styles.appBar}>
         <Container maxWidth='xl'>
           <Toolbar>
               <Typography
                  variant='h6'
                  noWrap
                  component='div'
                  sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }}
               >
                  <SmsIcon sx={{ color: 'white' }} fontSize="large"/>
               </Typography>
               <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
               {menuList.map(item => ( 
                  <Button  sx={{ my: 2, color: 'white', display: 'block' }}>
                     <Link key={item.to} to={item.to} className={styles.link}>
                        {item.title}
                     </Link>
                  </Button>
               ))}   
               </Box>
               <Box sx={{ flexGrow: 0 }}>
                  <IconButton sx={{ p: 0 }}>
                     <Avatar/>
                  </IconButton>
                  </Box>
           </Toolbar>
        </Container>
      </AppBar>
   );
};