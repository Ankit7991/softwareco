import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
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
            secondary: '#888888',
        },
    },

});

export const darkTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
    },
});
