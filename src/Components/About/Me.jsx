import { Box, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import Mo from "../../Assets/Imgs/mohammad1.png";
const Me = () => {
    const textRef = useRef(null);
    const imageRef = useRef(null);
    useEffect(() => {
        // 🟢 انیمیشن ورود نرم متن و قاب عکس با GSAP
        gsap.fromTo(textRef.current,
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
        );
        gsap.fromTo(imageRef.current,
            { opacity: 0, x: 40 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
        );
    }, []);
    return (
        <Grid container sx={{ mb: 10 }}>

            {/* ستون متن و داستان من */}
            <Grid size={{ xs: 12, md: 7 }} ref={textRef}>
                <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3, background: "linear-gradient(180deg, #f5f5f5, #01439e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    درباره من
                </Typography>

                <Typography variant="body1" sx={{ color: "whitesmoke", lineHeight: 1.9, mb: 3, fontSize: "1.05rem" }}>
                    توسعه‌دهنده فرانت‌اند (Front-End) و دانشجوی مهندسی کامپیوتر با دقت بالا و جزئی‌نگر،
                    دارای تجربه عملی در زمینه طراحی و توسعه وب. متخصص در
                    ایجاد طرح‌بندی‌های واکنش‌گرا (Responsive) و رابط‌های کاربری جذاب.
                    بسیار توانمند در مدیریت صفر تا صد پروژه‌های فریلنسری،
                    ارائه کدهای باکیفیت و پایدار، و همکاری در پیاده‌سازی راهکارهای مدرن وب.
                </Typography>

                {/* نقل‌قول با خط عمودی نئونی */}
                <Box sx={{
                    borderLeft: "4px solid #007acc",
                    pl: 3,
                    py: 1,
                    my: 3,
                    backgroundColor: "rgba(0, 122, 204, 0.05)",
                    borderRadius: "0 12px 12px 0",
                    boxShadow: "0 0 15px rgba(0, 122, 204, 0.1)"
                }}>
                    <Typography variant="body1" sx={{ fontStyle: "italic", color: "#90caf9", fontWeight: 700 }}>
                        طراحی فقط آن چیزی نیست که به نظر می‌رسد، طراحی یعنی یک سیستم چطور کار می‌کند و چه حسی منتقل می‌سازد
                    </Typography>
                </Box>
            </Grid>

            {/* ستون عکس پرتره شیشه‌ای با خطوط هندسی پشت */}
            <Grid size={{ xs: 12, md: 5 }} ref={imageRef} sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ position: "relative", width: "100%", maxWidth: "320px" }}>

                    {/* خطوط هندسی نئونی پشت عکس (جایگزین لایه‌های طرح اصلی) */}
                    <Box sx={{
                        position: "absolute",
                        top: "-15px",
                        right: "-15px",
                        width: "100%",
                        height: "100%",
                        border: "3px solid rgba(0, 122, 204, 0.3)",
                        borderRadius: "24px",
                        zIndex: 0
                    }} />

                    {/* قاب اصلی تصویر با استایل Glassmorphism */}
                    <Paper sx={{
                        position: "relative",
                        zIndex: 1,
                        height: "380px",
                        borderRadius: "20px",
                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                        backdropFilter: "blur(16px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 122, 204, 0.2)",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Box
                            component="img"
                            src={Mo}
                            alt="Mohammad"
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover", // 🟢 فیت کردن کامل عکس در کادر شیشه‌ای
                                borderRadius: "20px"
                            }}
                        />
                    </Paper>

                </Box>
            </Grid>

        </Grid>
    )
}
export default Me;