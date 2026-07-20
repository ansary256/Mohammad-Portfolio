import { useEffect, useRef, useContext, useState } from "react";
import { Box, Typography, Grid, Divider, Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MainContext } from "../../../contexts/MainProvider";
import SkillCard from "./SkillCard";

// امپورت لوگوها
import { FaReact, FaPython, FaJava, FaHtml5, FaCss3, FaDatabase } from "react-icons/fa";
import { SiBootstrap, SiDotnet, SiJavascript, SiJquery, SiMysql, SiSass, SiSharp } from "react-icons/si";
import { GitHub } from "@mui/icons-material";

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
    const containerRef = useRef(null);
    const { homePageScrollerRef } = useContext(MainContext);

    // 🟢 استیت‌ها برای مدیریت آلرت سفارشی
    const [open, setOpen] = useState(false);
    const [activeSkill, setActiveSkill] = useState(null);

    // 🟢 اضافه کردن دیتای دوره‌ها به آرایه (محل دوره و سال دوره را اینجا بنویس)
    const SkillsArray = [
        { name: "React", value: 90, logo: <FaReact size={45} color="#61dafb" />, coursePlace: "آکادمی تاپ لرن", courseYear: "1405" },
        { name: "Python", value: 50, logo: <FaPython size={45} color="#3776ab" />, coursePlace: "دانشگاه ارومیه", courseYear: "1402" },
        { name: "C#", value: 90, logo: <SiSharp size={45} color="#239120" />, coursePlace: "آموزشگاه خیام نوین", courseYear: "1397" }, // لوگوی اصلاح شده C#
        { name: "NET.", value: 80, logo: <SiDotnet size={45} color="#512bd4" />, coursePlace: "آکادمی تاپ لرن", courseYear: "1404" },
        { name: "JAVA", value: 60, logo: <FaJava size={45} color="#e76f51" />, coursePlace: "دانشگاه ارومیه", courseYear: "1403" },
        { name: "SASS", value: 70, logo: <SiSass size={45} color="#cf649a" />, coursePlace: "آکادمی تاپ لرن", courseYear: "1402" },
        { name: "HTML", value: 99, logo: <FaHtml5 size={45} color="#e34f26" />, coursePlace: "خودآموز(مستندات)", courseYear: "1398" },
        { name: "CSS", value: 95, logo: <FaCss3 size={45} color="#1572b6" />, coursePlace: "خودآموز(مستندات)", courseYear: "1398" },
        { name: "JavaScript", value: 80, logo: <SiJavascript size={45} color="#f7df1e" />, coursePlace: "آکادمی کدیاد", courseYear: "1399-1400" },
        { name: "Git && GitHub", value: 80, logo: <GitHub size={50} color="#ffffff" />, coursePlace: "خودآموز", courseYear: "1403" },
        { name: "Jquery", value: 70, logo: <SiJquery size={45} color="#0769ad" />, coursePlace: "آموزشگاه خیام نوین", courseYear: "1400" },
        { name: "BootStrap", value: 95, logo: <SiBootstrap size={45} color="#7952b3" />, coursePlace: "آموزشگاه خیام نوین", courseYear: "1399" },
        { name: "My SQL", value: 75, logo: <SiMysql size={45} color="#7952b3" />, coursePlace: "آموزشگاه خیام نوین", courseYear: "1399" },
        { name: "SQL SERVER", value: 75, logo: <FaDatabase size={45} color="#7952b3" />, coursePlace: "آموزشگاه خیام نوین", courseYear: "1399" }
    ];

    useEffect(() => {
        if (!containerRef.current || !homePageScrollerRef.current) return;
        const ctx = gsap.context(() => {
            gsap.from(".skill-card-anim", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    scroller: homePageScrollerRef.current,
                    start: "top 50%",
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.12,
                ease: "power2.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, [homePageScrollerRef]);

    // 🟢 تابع کلیک روی کارت‌ها
    const handleOpenDetails = (skill) => {
        setActiveSkill(skill);
        setOpen(true);
    };

    return (
        <Grid container
            ref={containerRef}
        >
            <Grid size={{ xs: 12 }} sx={{ mt: { xs: "80px", sm: "70px", md: "0" }, display: "flex", justifyContent: "center" }}>
                {/* عنوان بخش مهارت‌ها */}
                <Typography
                    variant="h4"
                    sx={{
                        color: "#fff",
                        mb: 6,
                        fontWeight: "bold",
                        fontFamily: "'Consolas', monospace",
                        letterSpacing: "2px"
                    }}
                >
                    Skills
                </Typography>

            </Grid>
            <Grid size={{ xs: 12 }} sx={{ width: "100%", px: 4, mb: 6 }}>
                <Divider sx={{ backgroundColor: "whitesmoke" }} variant="middle" />
            </Grid>
            {SkillsArray.map((s, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}
                    key={s.name}
                    sx={{
                        m: "25px 0",
                        boxSizing: "border-box",
                        display: "flex",         // 🟢 اضافه کن تا کارت در ستون خودش شناور شود
                        alignItems: "center",
                        justifyContent: "center" // 🟢 کارت‌ها را در حالت موبایل دقیقاً وسط‌چین می‌کند
                    }}
                    className="skill-card-anim"
                    onClick={() => handleOpenDetails(s)} // 🟢 رویداد کلیک
                >
                    <SkillCard name={s.name} value={s.value} logo={s.logo} />
                </Grid>
            ))}

            {/* 🟢 پنجره آلرت سفارشی و شیک (Dialog ماتیریال) */}
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                disableAriaHidden // جلوگیری از باگ بلاک شدن اریا در تگ روت
                slotProps={{
                    backdrop: {
                        sx: { backdropFilter: "blur(4px)", backgroundColor: "rgba(0,0,0,0.6)" } // افکت بلور پشت صفحه
                    }
                }}
                PaperProps={{
                    sx: {
                        backgroundColor: "#1e1e1e",
                        color: "#fff",
                        borderRadius: "16px",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                        p: 2,
                        minWidth: "300px",
                        direction: "rtl" // تنظیم جهت متن برای پاپ‌آپ‌های فارسی
                    }
                }}
            >
                {activeSkill && (
                    <>
                        <DialogTitle sx={{
                            display: "flex", alignItems: "center", gap: 2,
                            borderBottom: "1px solid rgba(255,255,255,0.1)", pb: 3
                        }}>
                            {activeSkill.logo}
                            <Typography variant="h6" sx={{ fontFamily: "'Consolas', monospace", fontWeight: "bold" }}>
                                {activeSkill.name} Course Info
                            </Typography>
                        </DialogTitle>

                        <DialogContent sx={{ mt: 2, pb: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                            <Typography sx={{ color: "#b3b3b3", fontSize: "0.95rem" }}>
                                <strong>محل گذراندن دوره:</strong> {activeSkill.coursePlace}
                            </Typography>
                            <Typography sx={{ color: "#b3b3b3", fontSize: "0.95rem" }}>
                                <strong>سال برگزاری/اتمام:</strong> {activeSkill.courseYear}
                            </Typography>
                        </DialogContent>

                        <Box sx={{ display: "flex", justifyContent: "flex-end", pt: 1 }}>
                            <Button
                                onClick={() => setOpen(false)}
                                sx={{
                                    color: "#61dafb",
                                    p: 3,
                                    fontWeight: "bold",
                                    "&:hover": { backgroundColor: "rgba(97, 218, 251, 0.08)" }
                                }}
                            >
                                متوجه شدم
                            </Button>
                        </Box>
                    </>
                )}
            </Dialog>
        </Grid>
    );
};

export default SkillsSection;