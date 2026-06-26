import { Box, Grid } from "@mui/material";
import CofeeAnimationComponent from "./CofeeComponent/CofeeAnimationComponent";
import VsCodeMockup from "./VsCodeMockup";
import SkillsSection from "./Skils/SkillsSection";


const BodyHomePage = () => {
    return (
        <>
            <Grid container>
                <CofeeAnimationComponent>
                    <VsCodeMockup />
                </CofeeAnimationComponent>
            </Grid>
            <Box sx={{ width: "100%" }}>
                <SkillsSection />
            </Box>
        </>
    )
}
export default BodyHomePage;