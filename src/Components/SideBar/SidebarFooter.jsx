import { Avatar, Box, Typography } from "@mui/material"



const SidebarFooter = () => {
    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar src={require("../../Assets/Imgs/logoM.png")}
                sx={{
                    width: 100, height: 100,
                }} variant="circular"></Avatar>
            <Typography variant="subtitle1" sx={{
                fontWeight: "600"
            }}>طراحی و توسعه وبسایت های مدرن</Typography>
        </Box>
    )
}
export default SidebarFooter;