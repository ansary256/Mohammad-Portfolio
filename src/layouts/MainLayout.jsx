import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';

import Grid from '@mui/material/Grid';

import { rtlCache } from '../UIComponent/Laws/RTLCache';
import { theme } from "../UIComponent/Laws/theme";
import { Helmet, HelmetProvider } from 'react-helmet-async';
const MainLayout = ({ children, handleChange }) => {

    return (
        <CacheProvider value={rtlCache}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Helmet>
                        <title>Mohammad Ansari</title>
                    </Helmet>
                    <Grid container>
                        {children}
                    </Grid>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    );
};
export default MainLayout;