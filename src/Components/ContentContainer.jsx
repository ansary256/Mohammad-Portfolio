
import Grid2 from '@mui/material/Unstable_Grid2';


const ContentContainer = ({ children, value }) => {
    return (
        <Grid2
            xs={12}
            sm={12}
            md={9}
            lg={9}
            xl={9}
            sx={{ height: "100vh", overflowY: "auto" }}
        >
            {children}
        </Grid2>
    )
}
export default ContentContainer;