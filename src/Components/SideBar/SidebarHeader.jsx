import { Avatar, Box, Typography } from "@mui/material";


const SidebarHeader = () => {
    return (
        <Box
            sx={{
                textAlign: "center",
                justifyContent: "center"
            }}
        >
            <Avatar src={require("../../Assets/Imgs/mohammad.jpg")}
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
    )
}

export default SidebarHeader;