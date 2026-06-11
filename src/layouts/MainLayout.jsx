import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';

import Grid2 from '@mui/material/Unstable_Grid2';

import { rtlCache } from '../UIComponent/Laws/RTLCache';
import { theme } from "../UIComponent/Laws/theme";
import SideBar from '../Components/SideBar';

const MainLayout = ({chidren}) => {
    return (
        <CacheProvider value={rtlCache}>
            <ThemeProvider theme={theme}>
                <Grid2 container>
                    <SideBar/>
                    <Grid2 
                        xs= {12}
                        sm= {12}
                        md= {9}
                        lg= {9}
                        xl= {9}
                    >
                        {chidren}
                    </Grid2>
                </Grid2>
            </ThemeProvider>
        </CacheProvider>
    );
};
export default MainLayout;