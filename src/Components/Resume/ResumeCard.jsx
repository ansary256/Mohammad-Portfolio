import { useRef, useEffect } from "react";
import { Box, Typography, Button, Paper, Grid } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { gsap } from "gsap";

import LogoM from "../../Assets/Imgs/logoM.png";

const ResumeCard = () => {
    const cardRef = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        const logo = logoRef.current;

        // 🟢 انیمیشن 3D Tilt با حرکت ماوس روی کارت
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = card.getBoundingClientRect();

            // محاسبه موقعیت ماوس نسبت به مرکز کارت
            const x = (clientX - left - width / 2) / (width / 2);
            const y = (clientY - top - height / 2) / (height / 2);

            // کج شدن کارت
            gsap.to(card, {
                rotateY: x * 10,
                rotateX: -y * 10,
                ease: "power2.out",
                duration: 0.5
            });

            // حرکت بیشترِ لوگو برای ایجاد حس بیرون‌زدگی و پارالکس سه‌بعدی
            gsap.to(logo, {
                x: x * 15,
                y: y * 15,
                z: 50,
                ease: "power2.out",
                duration: 0.5
            });
        };

        // ریست شدن موقعیت کارت وقتی ماوس خارج می‌شود
        const handleMouseLeave = () => {
            gsap.to([card, logo], {
                rotateX: 0,
                rotateY: 0,
                x: 0,
                y: 0,
                ease: "power2.out",
                duration: 0.8
            });
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            card.removeEventListener("mousemove", handleMouseMove);
            card.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <>
            <Grid size={{ xs: 12, lg: 4 }}></Grid>
            <Grid size={{ xs: 12, lg: 4 }} sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                perspective: "1000px", // 🟢 دادن عمق سه‌بعدی به محیط والد
                height: "100vh",
            }}>

                {/* کانتینر اصلی کارت با استایل Glassmorphism */}
                <Paper
                    ref={cardRef}
                    elevation={0}
                    sx={{
                        position: "relative",
                        width: "100%",
                        height: { xs: "350px", sm: "300px", md: "350px", lg: "400px" },
                        backgroundColor: "rgba(0, 14, 70, 0.15)",
                        borderRadius: "24px",
                        border: "1px solid rgba(0, 122, 204, 0.25)",
                        backdropFilter: "blur(20px)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        p: 4,
                        pb: 5,
                        transformStyle: "preserve-3d", // فعال کردن عمق سه‌بعدی فرزندان
                        boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                        transition: "border-color 0.3s",
                        "&:hover": {
                            borderColor: "#007acc",
                        }
                    }}
                >

                    {/* ⚡ لوگوی بیرون‌زده از کارت (Pop-out Logo) */}
                    <Box
                        ref={logoRef}
                        sx={{
                            position: "absolute",
                            top: "-20%", // هل دادن لوگو به بالای کادر برای بیرون زدگی
                            width: "180px",
                            height: "180px",
                            borderRadius: "50%",
                            background: "linear-gradient(280deg, #00071c, #016cb4)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            boxShadow: "0 15px 35px rgba(0, 122, 204, 0.4), 0 0 30px rgba(0, 122, 204, 0.2)",
                            transform: "translateZ(30px)", // جلوتر آوردن لوگو در فضا
                        }}
                    >
                        <Box
                            component="img"
                            src={LogoM}
                            alt="M"
                            sx={{
                                width: "90%",
                                height: "90%",
                                objectFit: "contain",
                            }}
                        />
                    </Box>

                    {/* محتوای متنی کارت رزومه */}
                    <Box sx={{ textAlign: "center", mb: 4, transform: "translateZ(20px)" }}>
                        <Typography variant="h5" component="h2" sx={{
                            color: "whitesmoke",
                            fontWeight: "bold", mb: 1
                        }}>
                            توسعه‌دهنده وب
                        </Typography>
                        <Typography variant="body2" sx={{ color: "grey.400", px: 2 }}>
                            نسخه کامل رزومه را دانلود کنید.
                        </Typography>
                    </Box>

                    {/* 🛒 دکمه دانلود با استایل دکمه‌های خرید فروشگاهی */}
                    <Button
                        variant="contained"
                        component="a"
                        href="/ReasumePDF.pdf"// 🟢 آدرس فایل PDF رزومه‌ات در پوشه public
                        download="Resume.pdf"   // اسم فایل موقع دانلود
                        startIcon={<DownloadIcon />}
                        sx={{
                            width: "100%",
                            py: 1.5,
                            borderRadius: "12px",
                            backgroundColor: "#007acc",
                            fontWeight: "bold",
                            fontSize: "1rem",
                            textTransform: "none",
                            boxShadow: "0 4px 15px rgba(0, 122, 204, 0.3)",
                            transform: "translateZ(25px)",
                            transition: "all 0.3s",
                            "&:hover": {
                                backgroundColor: "#005999",
                                boxShadow: "0 0 20px #007acc",
                            }
                        }}
                    >
                        دانلود رزومه (PDF)
                    </Button>

                </Paper>
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}></Grid>
        </>
    );
};

export default ResumeCard;