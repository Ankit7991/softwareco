import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#4C74C0',
        },
        background: {
            default: '#ffffff',
            paper: '#EEF0F6',
        },
        text: {
            primary: '#111111',
            secondary: '#ffffff',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
    },
});
