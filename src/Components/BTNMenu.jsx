import { Drawer, Fab } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from './SideBar';


const BTNMenu = ({ handleChange, value }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        // State to handle the sliding menu on mobile
        //  FLOATING ACTION BUTTON(FAB): Only visible on mobile / tablet
        <>
            < Fab
                color="primary"
                onClick={handleDrawerToggle}
                aria-label='Sidebar'
                sx={{
                    position: 'fixed',
                    top: 10,
                    left: 10, // Automatically snaps to the correct side in RTL
                    zIndex: 1300, // Makes sure it floats above everything
                    display: { xs: 'flex', md: 'none' }
                }}
            >
                <MenuIcon />
            </Fab >
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
            >
                <SideBar isMobile={true} handleChange={handleChange} value={value} />
            </Drawer>
        </>

    )
}

export default BTNMenu; 