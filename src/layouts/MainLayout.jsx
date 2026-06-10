import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';

import { Box, Grid } from '@mui/material';

import { rtlCache } from '../UIComponent/Laws/RTLCache';
import { theme } from "../UIComponent/Laws/theme";

const MainLayout = () => {
    return (
        <CacheProvider value={rtlCache}>
            <ThemeProvider theme={theme}>
                <Grid container spacing={2}>
                    <Grid item size={{
                        xs: 0,
                        sm: 0,
                        md: 3,
                        lg: 3,
                        xl: 3
                    }} sx={{ backgroundColor: "red" }}>
                        g
                    </Grid>
                    <Grid item size={{
                        xs: 12,
                        sm: 12,
                        md: 9,
                        lg: 9,
                        xl: 9
                    }} sx={{ backgroundColor: "blue" }}>
                        h
                    </Grid>
                </Grid>
            </ThemeProvider>
        </CacheProvider>
    );
};
export default MainLayout;