// import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import SidebarHeader from "./SidebarHeader";
import SidebarTabsComponent from "./SidebarTabsComponent";
import SidebarFooter from "./SidebarFooter";
import { Divider } from "@mui/material";

const SideBar = ({ isMobile }) => {
    return (
        <Grid
            // 🟢 ۱. اصلاح ساختار گرید طبق استاندارد MUI v9 با پراپ size
            size={{
                xs: isMobile ? 12 : 0, 
                sm: isMobile ? 12 : 0,
                md: 3,
                lg: 3,
                xl: 3
            }}
            sx={{
                // 🟢 ۲. اضافه کردن تمپلیت رنگی مطمئن برای لایوت‌های نسخه ۹
                backgroundColor: "common.black",
                color: "whitesmoke", // ست کردن رنگ متن پایه برای فرزندان سایدبار
                height: "100vh",
                display: isMobile ? "block" : {
                    xs: "none",
                    sm: "none",
                    md: "block",
                    lg: "block",
                    xl: "block",
                },
                overflowY: "auto"
            }}
        >
            <SidebarHeader />
            <Divider sx={{ marginTop: "10px", borderColor: "rgba(255,255,255,0.1)" }} variant="middle" />
            <SidebarTabsComponent />
            <Divider sx={{ marginTop: "10px", borderColor: "rgba(255,255,255,0.1)" }} variant="middle" />
            <SidebarFooter />
        </Grid>
    );
};

export default SideBar;