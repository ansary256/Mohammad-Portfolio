import { grey } from "@mui/material/colors";
import Grid2 from "@mui/material/Unstable_Grid2";
import SidebarHeader from "./SidebarHeader";
import SidebarTabsComponent from "./SidebarTabsComponent";
import SidebarFooter from "./SidebarFooter";
import { Divider } from "@mui/material";


const SideBar = ({ isMobile }) => {
    return (
        <Grid2
            xs={isMobile ? 12 : 0} // Stretch full width if inside the mobile drawer panel
            sm={isMobile ? 12 : 0}
            md={3}
            lg={3}
            xl={3}
            sx={{
                bgcolor: grey[900],
                height: "100vh",
                // 2. FIXED: If inside the mobile drawer, force display to block!
                display: isMobile ? "block" : {
                    xs: "none",
                    sm: "none",
                    md: "block",
                    lg: "block",
                    xl: "block",
                },
                overflowY:"auto"
            }}>
            <SidebarHeader />
            <Divider sx={{ marginTop: "10px" }} variant="middle" />
            <SidebarTabsComponent />
            <Divider sx={{ marginTop: "10px" }} variant="middle" />
            <SidebarFooter />
        </Grid2>
    )
}
export default SideBar;