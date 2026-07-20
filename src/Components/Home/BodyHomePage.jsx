import { Box } from "@mui/material";
import CofeeAnimationComponent from "./CofeeComponent/CofeeAnimationComponent";
import VsCodeMockup from "./VsCodeMockup";
import SkillsSection from "./Skils/SkillsSection";

const BodyHomePage = () => {
    return (
        // 🟢 ریشه اصلی را به یک باکس ۱۰۰٪ پایدار با پوزیشن منسجم تبدیل کردیم
        <Box sx={{ width: "100%" }}>

            {/* ۱. بخش انیمیشن قهوه و کدها (بدون تگ گرید والد کاذب) */}
            <CofeeAnimationComponent>
                <VsCodeMockup />
            </CofeeAnimationComponent>

            {/* ۲. کانتینر پایدار بخش مهارت‌ها که لایه‌های فیکس شده قبلی را پوشش می‌دهد */}
            <Box
                sx={{
                    width: "100%",
                }}
            >
                <SkillsSection />
            </Box>

        </Box>
    );
};

export default BodyHomePage;