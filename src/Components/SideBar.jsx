import { Avatar, Typography, Box, Divider, Tabs, Tab } from "@mui/material";



import { grey } from "@mui/material/colors";
import Grid2 from "@mui/material/Unstable_Grid2";
import { HomeRounded, ConnectWithoutContactRounded, DashboardCustomizeRounded, MoodRounded, InfoRounded }
    from '@mui/icons-material';


const SideBar = ({ isMobile, handleChange, value }) => {
    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tabpanel-${index}`
        }
    }
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
                }
            }}>
            <Box
                sx={{
                    textAlign: "center",
                    justifyContent: "center"
                }}
            >
                <Avatar src={require("../Assets/Imgs/mohammad.jpg")}
                    sx={{
                        width: 200, height: 200,
                        boxShadow: '15px 10px 30px #141414, 5px 4px 10px #141414',
                        border: '2px solid #607D8B',
                        margin: "10px auto"
                    }} variant="circular"></Avatar>
                <Typography variant="h6" color="whitesmoke"
                >محمد انصاری</Typography>
                <Typography variant="caption" color="whitesmoke"
                >طراح سایت و برنامه نویس</Typography>
            </Box>
            <Divider sx={{ marginTop: "10px" }} variant="middle" />
            <Tabs
                variant="scrollable"
                orientation="vertical"
                value={value}
                onChange={handleChange}
                allowScrollButtonsMobile
                textColor="primary"
                TabIndicatorProps={{
                    style: {
                        width: '10px',             // 🌟 Default is 2px. Changing this to 6px makes it look bold and premium!
                        backgroundColor: "#fff", // You can also match it to your avatar border color
                        borderRadius: '0 3px 10px 0' // Optional: Gives the line soft rounded corners
                    }
                }}
                sx={{
                    '& .MuiTab-root': {
                        minHeight: '55px',
                        padding: "10px 40px",
                        justifyContent: "flex-start"
                    }
                }}
            >
                <Tab label="صفحه اصلی" icon={<HomeRounded />} iconPosition="start" {...tabProps(0)}
                    sx={{
                        color: "whitesmoke"
                    }} />
                <Tab label="نمونه کار" icon={<DashboardCustomizeRounded />} iconPosition="start" {...tabProps(1)}
                    sx={{ color: "whitesmoke" }} />
                <Tab label="رزومه" icon={<InfoRounded />} iconPosition="start" {...tabProps(2)} sx={{ color: "whitesmoke" }}
                />
                <Tab label="ارتباط با من" icon={<ConnectWithoutContactRounded />} iconPosition="start" {...tabProps(3)}
                    sx={{ color: "whitesmoke" }} />
                <Tab label="درباره من" icon={<MoodRounded />} iconPosition="start" {...tabProps(4)}
                    sx={{ color: "whitesmoke" }} />
            </Tabs>
            <Divider sx={{ marginTop: "10px" }} variant="middle" />
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar src={require("../Assets/Imgs/logoM.png")}
                    sx={{
                        width: 100, height: 100,
                    }} variant="circular"></Avatar>
                <Typography variant="subtitle1" sx={{
                    fontWeight: "600"
                }}>طراحی و توسعه وبسایت های مدرن</Typography>
            </Box>
        </Grid2>
    )
}
export default SideBar;