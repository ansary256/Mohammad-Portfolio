import { ThemeProvider } from '@mui/material/styles'; 
import { CacheProvider } from '@emotion/react';

import { rtlCache } from '../UIComponent/Laws/RTLCache';
import {theme} from "../UIComponent/Laws/theme";

const MainLayout = ({children}) => {
    return (
        <CacheProvider value={rtlCache}>
            <ThemeProvider theme={theme}>
                
            </ThemeProvider>
        </CacheProvider>
    );
};
export default MainLayout;