import { Grid } from "@mui/material"
import FrmConnectMe from "./FrmConnectMe";
import SocialButtons from "./SocialButtons";


const ConnectMeContainer = () => {

    return (
        <Grid container sx={{
            background: "linear-gradient(135deg, #000040 , #000018)",
            height: "100vh",
            overflow: "auto"
        }}>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }} sx={{
                display: 'flex',
                mt: { xs: 5, md: 0 },
                justifyContent: 'center',
                alignItems: "center",order: { xs: 2, lg: 1 }
            }}>
                <FrmConnectMe />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }} sx={{
                display: 'flex',
                mt: { xs: 5, md: 0 },
                justifyContent: 'center',
                alignItems: "center",order: { xs: 1, lg: 2 }
            }}>
                <SocialButtons />
            </Grid>
        </Grid>
    )
}
export default ConnectMeContainer;