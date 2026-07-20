import { Box } from "@mui/material";
import { MainContext } from "../../contexts/MainProvider";
import { useContext } from "react";

import HomepageImg from "../../Assets/Imgs/HomePage.webp";


const HomePageContainer = ({ children }) => {
    const { homePageScrollerRef } = useContext(MainContext);
    return (
        <Box
            ref={homePageScrollerRef}
            sx={{
                //back image
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${HomepageImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100vh",
                overflowX: "hidden",
                overflowY: "auto",
            }}>
            {children}
        </Box>
    )
}
export default HomePageContainer;