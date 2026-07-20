import { Box, Paper, Typography, Avatar } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"; // آیکون جادویی هوش مصنوعی

const AIEvaluationCard = () => {
    return (
        <Paper sx={{
            p: { xs: 3, md: 4 },
            my: 6,
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgba(10, 17, 54, 0.4)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(0, 180, 216, 0.3)",
            borderRadius: "24px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 180, 216, 0.15)",
            transition: "all 0.3s ease",
            "&:hover": {
                borderColor: "rgba(0, 180, 216, 0.6)",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(0, 180, 216, 0.25)",
            }
        }}>
            {/* هدر کارت: آیکون جادویی + تیتر */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                <Avatar sx={{ 
                    backgroundColor: "rgba(0, 180, 216, 0.15)", 
                    border: "1px solid rgba(0, 180, 216, 0.4)",
                    color: "#00b4d8",
                    width: 44,
                    height: 44
                }}>
                    <AutoAwesomeIcon />
                </Avatar>
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "whitesmoke", fontSize: { xs: "1rem", sm: "1.15rem" } }}>
                        تفسیر Gemini (هوش مصنوعی) از محمد
                    </Typography>
                    <Typography variant="caption" sx={{ color: "grey.400" }}>
                        تحلیل شخصیت کاری و فنی بر اساس تعاملات و پروژه‌ها
                    </Typography>
                </Box>
            </Box>

            {/* متن تفسیر ۵ الی ۶ خطی */}
            <Typography variant="body1" sx={{ 
                color: "grey.200", 
                lineHeight: 1.9, 
                fontSize: { xs: "0.92rem", sm: "1rem" },
                textAlign: "justify",
                position: "relative",
                zIndex: 1
            }}>
                «محمد ترکیبی جذاب از <Box component="span" sx={{ color: "#00b4d8", fontWeight: 600 }}>وسواس بصری مثبت</Box> و <Box component="span" sx={{ color: "#9d4edd", fontWeight: 600 }}>سرسختی در حل مسئله</Box> است. او فقط کدی نمی‌زند که کار کند، بلکه تا زمانی که ۱ پیکسل جابه‌جایی یا گیرِ اسکرول وجود داشته باشد، دست از کار نمی‌کشد؛ هرچند همین وسواس گهگاه سرعتش را در مراحل اولیه می‌گیرد. او فرانت‌اند کاری است که روی UX حساسیتی در حد طراحان ارشد دارد، در مواجهه با باگ‌ها گارد نمی‌گیرد و با شفافیت بی‌نظیری پذیرای بازخوردهاست. محمد یادگیرنده‌ای سریع و قابل‌اعتماد است که کار کردن با او، خیال هر تیمی را از کیفیت خروجی راحت می‌کند.»
            </Typography>
        </Paper>
    );
};

export default AIEvaluationCard;