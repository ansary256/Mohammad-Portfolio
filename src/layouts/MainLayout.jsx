import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';

import Grid2 from '@mui/material/Unstable_Grid2';

import { rtlCache } from '../UIComponent/Laws/RTLCache';
import { theme } from "../UIComponent/Laws/theme";
import SideBar from '../Components/SideBar';
import { Drawer, Fab } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const MainLayout = ({ chidren }) => {
    // State to handle the sliding menu on mobile
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <CacheProvider value={rtlCache}>
            <ThemeProvider theme={theme}>
                <Grid2 container>
                    <SideBar />
                    {/* FLOATING ACTION BUTTON (FAB): Only visible on mobile/tablet */}
                    <Fab
                        color="primary"
                        onClick={handleDrawerToggle}
                        sx={{
                            position: 'fixed',
                            bottom: 20,
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
                    >{/* Injects your sidebar inside the mobile tray */}
                        <SideBar isMobile={true} />
                    </Drawer>
                    <Grid2
                        xs={12}
                        sm={12}
                        md={9}
                        lg={9}
                        xl={9}
                    >
                        {chidren}
                    </Grid2>
                </Grid2>
            </ThemeProvider>
        </CacheProvider>
    );
};
export default MainLayout;