import { Grid } from "@mui/material";
import CustomTimeline from "./CustomTimeline";
const RoadPageContainer = () => {

    return (
        <Grid sx={{
            backgroundColor: "#000018",
            width: "100%",
            // 🟢 قفل تو در توی گریدها را اینطوری دور می‌زنیم:
            height: "100vh",       // کادر این صفحه را دقیقا اندازه مانیتور فیکس کن
            overflowY: "auto",     // اجازه بده فقط خود این صفحه به صورت عمودی اسکرول بخورد
            display: "block",      // رفتار فلکس این گرید را لغو کن تا فرزندش کش بیاید
            position: "relative"
        }}
        >
            <CustomTimeline />
        </Grid>
    );
};

export default RoadPageContainer;