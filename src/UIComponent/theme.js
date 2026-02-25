import { createTheme } from "@mui/material/styles";


export const theme = createTheme({
    direction: 'rtl',
    palette: {
        mode: "dark",
        common: {
            black: "#212121",
            white: "#FFFFFF"
        },
        primary: {
            main: "#607D8B"
        },
        secondary: {
            main: "#FF3A29"
        },
        error: {
            main: "#FF5555"
        },
        warning: {
            main: "#F1FA8C"
        },
        info: {
            main: "#455A64",
        },
        success: {
            main: "#50FA7B",
        },
        text: {
            primary: "#F8F8F2",
            secondary: "rgba(0,0,0,0.6)",
            disabled: "rgba(0,0,0,0.38)"
        },
    },
    typography: {
        fontFamily: [
            "vazir",
            "roboto",
            "Tahoma",
            "Arial",
            "sans-serif"
        ].join(','),
        h3:{
            textShadow:"-2px 4px 5px #607D8B"
        }
    },
});