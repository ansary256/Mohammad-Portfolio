import { Grid } from "@mui/material";
import ResumeCard from "./ResumeCard";




const ResumePDFContainer = () => {
    return (
        <Grid container sx={{
            backgroundColor: "#000018",
            height: "100vh",
            boxSizing: "border-box",
        }}
        >
            <ResumeCard />
        </Grid>)
}
export default ResumePDFContainer;