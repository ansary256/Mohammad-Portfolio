import { Avatar, Grid, Typography, Box, Divider } from "@mui/material";



import { grey } from "@mui/material/colors";


const SideBar = () => {
    return (
        <Grid size={{
            xs: 0,
            sm: 0,
            md: 3,
            lg: 3,
            xl: 3
        }} sx={{ bgcolor: grey[900], height:"100vh", display:{
            xs:"none",
            sm:"none",
            md:"block",
            lg:"block",
            xl:"block",
        }}}>
            <Box
                sx={{
                    textAlign:"center",
                    justifyContent:"center"
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
            <Divider sx={{marginTop:"10px"}} variant="middle"/>
        </Grid>
    )
}
export default SideBar;