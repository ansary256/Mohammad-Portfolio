import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';

import { Grid } from '@mui/material';

import { rtlCache } from '../UIComponent/Laws/RTLCache';
import { theme } from "../UIComponent/Laws/theme";
import SideBar from '../Components/SideBar';

const MainLayout = ({chidren}) => {
    return (
        <CacheProvider value={rtlCache}>
            <ThemeProvider theme={theme}>
                <Grid container spacing={2}>
                    <SideBar/>
                    <Grid size={{
                        xs: 12,
                        sm: 12,
                        md: 9,
                        lg: 9,
                        xl: 9
                    }}>
                        {chidren}
                    </Grid>
                </Grid>
            </ThemeProvider>
        </CacheProvider>
    );
};
export default MainLayout;