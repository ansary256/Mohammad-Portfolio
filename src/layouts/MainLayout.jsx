import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';

import Grid2 from '@mui/material/Unstable_Grid2';

import { rtlCache } from '../UIComponent/Laws/RTLCache';
import { theme } from "../UIComponent/Laws/theme";
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import { Drawer, Fab } from '@mui/material';
// import { useState } from 'react';
// import MenuIcon from '@mui/icons-material/Menu';

const MainLayout = ({ children }) => {
    // // State to handle the sliding menu on mobile
    // const [mobileOpen, setMobileOpen] = useState(false);

    // const handleDrawerToggle = () => {
    //     setMobileOpen(!mobileOpen);
    // };




    /* FLOATING ACTION BUTTON (FAB): Only visible on mobile/tablet
            <Fab
            color="primary"
            onClick={handleDrawerToggle}
            sx={{
                position: 'fixed',
            top: 20,
            right: 20, // Automatically snaps to the correct side in RTL
            zIndex: 1300, // Makes sure it floats above everything
            display: { xs: 'flex', md: 'none' }
            }}
    >
    <MenuIcon />
    </Fab>
    <Drawer
    anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        variant="temporary"
        ModalProps={{ keepMounted: true }}
        sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
                width: 260,
                bgcolor: '#212121', // Matches your grey[900] theme
                },
                }}
                >{/* Injects your sidebar inside the mobile tray */
    /* <SideBar isMobile={true} />
            </Drawer> */

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