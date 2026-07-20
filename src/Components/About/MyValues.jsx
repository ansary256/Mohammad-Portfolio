import { Box, Grid, Paper, Typography } from "@mui/material";
import { FaArrowCircleDown, FaCode, FaLayerGroup, FaLightbulb, FaRegLightbulb, FaWpexplorer } from "react-icons/fa";
const MyValues = () => {
    const values = [
        // ۱. حس دیداری و زیبایی‌شناسی قوی که توی تم نئونی صفحاتت پیداست
        {
            title: "Pixel Perfection",
            subtitle: "دقت بالا در جزئیات UI/UX",
            icon: <FaLightbulb size={28} color="#ffb703" />,
            color: "rgba(255, 183, 3, 0.2)"
        },

        // ۲. توانایی حل چالش‌های رسپانسیو (مثل همین دیوایدر و اسکرول ماتیریال)
        {
            title: "Responsive Mindset",
            subtitle: "سازگاری کامل با تمام دیوایس‌ها",
            icon: <FaLayerGroup size={28} color="#00b4d8" />,
            color: "rgba(0, 180, 216, 0.2)"
        },

        // ۳. توانایی پیش بردن صفر تا صد کار به صورت مستقل
        {
            title: "Problem Solving",
            subtitle: "عیب‌یابی سریع و رفع باگ‌های پیچیده",
            icon: <FaCode size={28} color="#9d4edd" />,
            color: "rgba(157, 78, 221, 0.2)"
        },

        // ۴. اشتیاق برای تست ابزارها و انیمیشن‌های مدرن (مثل GSAP)
        {
            title: "Modern Tech Stack",
            subtitle: "استفاده از به‌روزترین ابزارهای وب",
            icon: <FaWpexplorer size={28} color="#e76f51" />,
            color: "rgba(231, 111, 81, 0.2)"
        },

        // ۵. رویکرد یادگیری مداوم
        {
            title: "Continuous Growth",
            subtitle: "یادگیری و ارتقای همیشگی مهارت‌ها",
            icon: <FaRegLightbulb size={28} color="#2a9d8f" />,
            color: "rgba(42, 157, 143, 0.2)"
        },

        // ۶. تعهد به تحویل کار تمیز و باکیفیت
        {
            title: "User-Centric Design",
            subtitle: "تمرکز بر حس خوب کاربر (UX)",
            icon: <FaArrowCircleDown size={28} color="#06d6a0" />,
            color: "rgba(6, 214, 160, 0.2)"
        }
    ];
    return (
        <Grid container spacing={3} sx={{ pb: 8 }}>
            {values.map((item, index) => (
                <Grid size={{ xs: 6, md: 4, lg: 3 }} key={index} sx={{ mt: 5 }}>
                    <Paper sx={{
                        p: 3,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        backgroundColor: "rgba(255, 255, 255, 0.02)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255, 255, 255, 0.07)",
                        borderRadius: "16px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            transform: "translateY(-6px)",
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            borderColor: "rgba(255, 255, 255, 0.2)",
                            boxShadow: `0 10px 25px ${item.color}`
                        }
                    }}>
                        {/* کادر آیکون با رنگ سفارشی */}
                        <Box sx={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "14px",
                            backgroundColor: item.color,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 2
                        }}>
                            {item.icon}
                        </Box>

                        <Typography variant="body2" sx={{ fontWeight: 600, color: "grey.200" }}>
                            {item.title}
                        </Typography>
                        {/* 🟢 نمایش زیرعنوان (Subtitle) */}
                        {item.subtitle && (
                            <Typography variant="caption"
                                sx={{ color: "grey.500", fontSize: "0.78rem", lineHeight: 1.3 }}>
                                {item.subtitle}
                            </Typography>
                        )}
                    </Paper>
                </Grid>
            ))}
        </Grid>
    )
}
export default MyValues;