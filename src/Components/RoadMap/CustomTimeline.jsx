import { useEffect, useRef } from "react";
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot
} from "@mui/lab";
import { Typography, Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CodeIcon from '@mui/icons-material/Code';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { FaCss3, FaDatabase, FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa";
import { SiBootstrap, SiDotnet, SiJavascript, SiJquery, SiMysql, SiSass, SiSharp } from "react-icons/si";
import { GitHub } from "@mui/icons-material";

gsap.registerPlugin(ScrollTrigger);

// 🟢 داده‌های مسیر یادگیری تو
const ROADMAP_DATA = [
    { 
        id: 1, 
        title: "برنامه‌نویسی پایه‌ای با C#", 
        desc: "ورود رسمی به دنیای کدنویسی در آموزشگاه خیام نوین. یادگیری مفاهیم بنیادی، منطق برنامه‌نویسی، ساختارهای کنترلی و شی‌گرایی (OOP) در اکوسیستم دات‌نت.", 
        icon: <SiSharp size={45} color="#239120" />, 
        year: "۱۳۹۷" 
    },
    { 
        id: 2, 
        title: "ساختار صفحات وب (HTML5)", 
        desc: "ورود به دنیای وب به صورت خودآموز از طریق مستندات رسمی MDN. تسلط بر استانداردها، تگ‌های معنایی (Semantic Web) و اصول چیدمان ساختار صفحه.", 
        icon: <FaHtml5 size={45} color="#e34f26" />, 
        year: "۱۳۹۸" 
    },
    { 
        id: 3, 
        title: "استایل‌دهی صفحات وب (CSS3)", 
        desc: "یادگیری عمیق مفاهیم CSS به صورت خودآموز. تسلط بر سیستم‌های مدرن لایوت‌سازی مانند Flexbox و Grid، انیمیشن‌های بومی سی‌اس‌اس و طراحی رسپانسیو.", 
        icon: <FaCss3 size={45} color="#1572b6" />, 
        year: "۱۳۹۸" 
    },
    { 
        id: 4, 
        title: "هوشمندی فرانت‌اند با JavaScript", 
        desc: "گذراندن دوره جامع در آکامدی کدیاد. تسلط بر مفاهیم پایه تا پیشرفته جاوااسکریپت، دستکاری هوشمند DOM، ویژگی‌های مدرن ES6+ و مدیریت اسکوپ‌ها و کلژرها.", 
        icon: <SiJavascript size={45} color="#f7df1e" />, 
        year: "۱۳۹۹-۱۴۰۰" 
    },
    { 
        id: 5, 
        title: "طراحی سریع با Bootstrap", 
        desc: "آموزش فریم‌ورک محبوب بوت‌استرپ در آموزشگاه خیام نوین. تسلط بر سیستم گریدبندی پیش‌فرض، کامپوننت‌های آماده و افزایش سرعت در توسعه قالب‌های وب.", 
        icon: <SiBootstrap size={45} color="#7952b3" />, 
        year: "۱۳۹۹" 
    },
    { 
        id: 6, 
        title: "مدیریت پایگاه داده MySQL", 
        desc: "ورود به دنیای پایگاه داده‌های رابطه‌ای (RDBMS) در آموزشگاه خیام نوین. یادگیری طراحی جداول، مفاهیم کلیدهای اصلی و خارجی و نوشتن کوئری‌های استاندارد.", 
        icon: <SiMysql size={45} color="#00758f" />, // رنگ رسمی مای‌اس‌کیوال اصلاح شد
        year: "۱۳۹۹" 
    },
    { 
        id: 7, 
        title: "پایگاه داده پیشرفته SQL SERVER", 
        desc: "تسلط بر سیستم مدیریت دیتابیس مایکروسافت در آموزشگاه خیام نوین. نوشتن کدهای بهینه، کوئری‌های پیچیده، ویوها و درک ساختار ذخیره‌سازی داده‌های انبوه.", 
        icon: <FaDatabase size={45} color="#cc2929" />, // رنگ متمایز دیتابیس
        year: "۱۳۹۹" 
    },
    { 
        id: 8, 
        title: "کتابخانه تعاملی Jquery", 
        desc: "گذراندن دوره در آموزشگاه خیام نوین جهت پیاده‌سازی سریع‌تر افکت‌های انیمیشنی، مدیریت رویدادها (Events) و ارسال راحت‌تر درخواست‌های آسنکرون به سرور.", 
        icon: <SiJquery size={45} color="#0769ad" />, 
        year: "۱۴۰۰" 
    },
    { 
        id: 9, 
        title: "منطق پیش‌پردازنده SASS", 
        desc: "آموزش دوره در آکادمی تاپ لرن. یادگیری نوشتن استایل‌های تمیز، متغیرها، Mixinها، توابع و ساختار تو در تو (Nesting) برای مدیریت پروژه‌های بزرگ وب.", 
        icon: <SiSass size={45} color="#cf649a" />, 
        year: "۱۴۰۲" 
    },
    { 
        id: 10, 
        title: "مبانی پایتون (Python)", 
        desc: "توسعه سواد تفکر کامپیوتری و آشنایی با سینتکس قدرتمند و همه‌فن‌حریف پایتون در دانشگاه ارومیه. درک مفاهیم اسکریپت‌نویسی و شی‌گرایی.", 
        icon: <FaPython size={45} color="#3776ab" />, 
        year: "۱۴۰۲" 
    },
    { 
        id: 11, 
        title: "برنامه‌نویسی آکادمیک با JAVA", 
        desc: "گذراندن دوره تخصصی جاوا در دانشگاه ارومیه. درک عمیق ماشین مجازی جاوا (JVM)، مدیریت پیشرفته حافظه و معماری‌های ساختاریافته نرم‌افزار.", 
        icon: <FaJava size={45} color="#e76f51" />, 
        year: "۱۴۰۳" 
    },
    { 
        id: 12, 
        title: "مدیریت سورس‌کد با Git && GitHub", 
        desc: "تسلط کامل به صورت خودآموز بر کنترل نسخه‌های گوناگون پروژه. کار با دستورات گیت، مدیریت شاخه‌ها (Branches)، حل تداخل‌ها و مشارکت در دنیای سورس‌باز.", 
        icon: <GitHub size={50} color="#ffffff" />, 
        year: "۱۴۰۳" 
    },
    { 
        id: 13, 
        title: "توسعه وب‌اپلیکیشن با NET.", 
        desc: "دوره جامع در آکادمی تاپ لرن برای ورود به بک‌اند سازمانی. یادگیری معماری MVC، ساختار لایه‌ای و ایجاد بستر توسعه برنامه‌های مدرن تحت وب.", 
        icon: <SiDotnet size={45} color="#512bd4" />, 
        year: "۱۴۰۴" 
    },
    { 
        id: 14, 
        title: "توسعه فرانت‌اند با اکوسیستم React", 
        desc: "دوره تخصصی آکادمی تاپ لرن. تسلط بر توسعه کامپوننت‌محور، مدیریت استیت‌ها (Context API / Redux)، پکیج‌های مدرن و طراحی UI با Material-UI.", 
        icon: <FaReact size={45} color="#61dafb" />, 
        year: "۱۴۰۵" 
    },
    { 
        id: 15, 
        title: "جادوی موشن‌گرافیک وب با GSAP", 
        desc: "برنامه هدف پایانی سال جاری: یادگیری عمیق فریم‌ورک قدرتمند GreenSock. تسلط بر تایم‌لاین‌های پیشرفته، ScrollTrigger پیچیده و خلق انیمیشن‌های تعاملی پیکس‌پرفکت.", 
        icon: <CodeIcon size={45} color="#88ce02" />, // رنگ سبز معروف و جذاب برند GSAP
        year: "هدف پایان ۱۴۰۵" 
    },
    { 
        id: 16, 
        title: "معماری پیشرفته وب و .NET Web API", 
        desc: "ایستگاه آینده نزدیک: تسلط بر طراحی Restful APIها، معماری پیاز (Onion Architecture)، Clean Architecture، امنیت، تست‌نویسی و حرکت به سمت متخصص فول‌استک دات‌نت.", 
        icon: <IntegrationInstructionsIcon size={45} color="#00ffff" />, 
        year: "آینده نزدیک" 
    }
];

const CustomTimeline = () => {
    const timelineRef = useRef(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    useEffect(() => {
        const items = timelineRef.current.querySelectorAll(".timeline-item-row");
        items.forEach((item) => {
            const connector = item.querySelector(".neon-connector");
            const dot = item.querySelector(".neon-dot");
            const content = item.querySelector(".reveal-content");
            const isRight = item.classList.contains("MuiTimelineItem-positionRight");

            // ⚙️ یک تایم‌لاین جی‌اس‌اپ مجزا برای هر ایستگاه با اسکرول تریگر
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    scroller: timelineRef.current.parentElement,
                    start: "top 75%", // انیمیشن وقتی شروع می‌شود که آیتم به ۷۵ درصدی بالای صفحه برسد
                    end: "top 40%",
                    scrub: 0.5,       // حرکت کاملاً نرم و متصل به غلتک ماوس
                }
            });

            tl.fromTo(connector,
                { height: "0%" },
                { height: "100%", ease: "none" }
            )
                .to(dot, {
                    scale: 1.2,
                    backgroundColor: "#007acc",
                    boxShadow: "0 0 20px #007acc, 0 0 40px #007acc",
                    duration: 0.2
                })
                .fromTo(content,
                    {
                        opacity: 0,
                        x: isRight ? 100 : -100 // پرده‌برداری: آیتم‌های راست از راست می‌آیند، چپ از چپ
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.4,
                        ease: "power2.out"
                    },
                    "-=0.1" // کمی هم‌پوشانی با روشن شدن دات
                );
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <Grid ref={timelineRef}
            size={{ xs: 12 }} sx={{ display: "block", py: 5, overflow: "hidden" }}>
            <Timeline position={isMobile ? "right" : "alternate"} sx={{

                // جادوی رسپانسیو: در موبایل و تبلت (زیر 900px یا همان md)، منطق زیگزاگی لغو می‌شود
                [`@media (max-width:900px)`]: {
                    // 🟢 ۳. حذف فضای خالی المان فرضی مقابل (کدی که خودت فرستادی)
                    "& .MuiTimelineItem-missingOppositeContent:before": {
                        display: "none",
                    },
                },
            }}>
                {ROADMAP_DATA.map((data) => (
                    <TimelineItem key={data.id} className="timeline-item-row"
                        sx={{
                            minHeight: "45vh"
                        }}
                    >

                        {/* ⚡ بخش جداکننده وسط (دات و لاین نئونی) */}
                        <TimelineSeparator>
                            <TimelineDot
                                className="neon-dot"
                                sx={{
                                    bgcolor: "common.black",
                                    borderColor: "whitesmoke",
                                    boxShadow: "none",
                                    transition: "all 0.3s",
                                    p: 1.5
                                }}
                            >
                                {data.icon}
                            </TimelineDot>
                            <TimelineConnector
                                className="neon-connector"
                                sx={{
                                    bgcolor: "#007acc",
                                    boxShadow: "0 0 10px #007acc",
                                    width: "5px",
                                    borderRadius: "5px"
                                }}
                            />
                        </TimelineSeparator>

                        {/* 📑 محتوای متنی در دو طرف */}
                        <TimelineContent className="reveal-content" sx={{
                            py: "10px", px: 3,
                            maxWidth: {
                                xs: "100%",
                                sm: "380px",
                                md: "250px",
                                lg: "350px",
                                xl: "450px"
                            },
                        }}>
                            <Box
                                sx={{
                                    p: 3,
                                    backgroundColor: "rgba(0, 14, 70, 0.1)",
                                    borderRadius: "12px",
                                    border: "5px solid rgba(0, 122, 204, 0.1)",
                                    backdropFilter: "blur(30px)",
                                    textAlign: "left"
                                }}
                            >
                                <Typography variant="caption" sx={{ color: "#007acc", fontWeight: "bold" }}>
                                    {data.year}
                                </Typography>
                                <Typography variant="h6" component="h3" sx={{
                                    color: "whitesmoke",
                                    my: 1, fontWeight: "bold"
                                }}>
                                    {data.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "text.primary", lineHeight: 1.8 }}>
                                    {data.desc}
                                </Typography>
                            </Box>
                        </TimelineContent>

                    </TimelineItem>
                ))}
            </Timeline>
        </Grid>
    );
};

export default CustomTimeline;