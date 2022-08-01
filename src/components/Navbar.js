import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import BookIcon from '@mui/icons-material/Book';
import { useNavigate, NavLink } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../config/firebase';
import { Logout } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material';
import theme from '../themes/theme';
import { useAuthState } from 'react-firebase-hooks/auth';


const navItems = [
  { text: 'Sign In', link: '/login' },
  { text: 'Sign Up', link: '/register' },
];

export default function Navbar() {
    const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const onLogOut = () => {
    signOut(auth).then(() => {
      navigate("/login");
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1, }}>
            <AppBar position="fixed" sx={{p:1}}>
                <Toolbar>
                    <Typography
                    variant="h6"
                    sx={{
                    flexGrow: 1,
                    display: 'flex',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    }}
                    >
                        <IconButton style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">
                            <BookIcon/>
                            Al-Quran
                        </IconButton>
                    </Typography>
                    {user !== null ? (
                    <Box>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ padding: 2 }}>Welcome, {user.email}</Box>
                            <Box sx={{ padding: 1 }}>
                                <IconButton style={{color: 'white', fontSize: 15}} onClick={onLogOut} >
                                    <Logout/>Log Out
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                    ) : 
                    (
                    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                    {navItems.map((item) => (
                        <NavLink
                        to={item.link}
                        key={item.text}
                        className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}
                        >
                        {item.text}
                        </NavLink>
                    ))}
                    </Box>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    </ThemeProvider>
  );
}