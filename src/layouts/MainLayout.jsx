import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';

import Grid2 from '@mui/material/Unstable_Grid2';

import { rtlCache } from '../UIComponent/Laws/RTLCache';
import { theme } from "../UIComponent/Laws/theme";
import { Helmet, HelmetProvider } from 'react-helmet-async';
const MainLayout = ({ children }) => {
    
    return (
        <CacheProvider value={rtlCache}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Helmet>
                        <title>Mohammad Ansari</title>
                    </Helmet>
                    <Grid2 container>
                        {children}
                    </Grid2>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    );
};
export default MainLayout;