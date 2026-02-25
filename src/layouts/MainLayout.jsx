import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';

import { rtlCache } from '../UIComponent/RTLCache';
import {theme} from "../UIComponent/theme";

const MainLayout = ({children}) => {
    return (
        <CacheProvider value={rtlCache}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
};
export default MainLayout;