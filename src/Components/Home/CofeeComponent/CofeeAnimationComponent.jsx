import { useContext, useEffect, useRef } from "react";
import { Box, Grid } from "@mui/material";

// ۱. امپورت کردن GSAP و پلاگین اسکرول آن
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CofSuche from '../../../Assets/Imgs/CoffeeSuche.webp';
import { MainContext } from "../../../contexts/MainProvider";

// حتماً پلاگین رو در جی‌اس‌اپ ثبت کن تا مرورگر بشناسدش
gsap.registerPlugin(ScrollTrigger);

const CofeeAnimationComponent = ({ children }) => {
    const { homePageScrollerRef } = useContext(MainContext);
    const sectionRef = useRef(null);
    const potRef = useRef(null);
    const streamRef = useRef(null);
    const liquidRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const pot = potRef.current;
        const stream = streamRef.current;
        const liquid = liquidRef.current;

        if (!section || !pot || !stream || !liquid || !homePageScrollerRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    scroller: homePageScrollerRef.current,
                    start: "top top",
                    end: "+=1500",
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                    pinType: "transform", // 🟢 ریشه باگ صفحه سفید! این خط را دقیقاً اضافه کن
                    anticipatePin: 1,
                }
            });

            tl.to(pot, { y: 50, rotation: -45, duration: 1 })
                .to(stream, { height: "49%", duration: 0.8 }, "-=0.3")
                .to(liquid, { height: "90%", duration: 1.5 })

        }, section); // کانتکست جی‌اس‌اپ روی همین بخش زوم شود

        return () => {
            ctx.revert();
        };
    }, [homePageScrollerRef]);
    return (
        <>
            <Grid size={{ xs: 12 }}
                ref={sectionRef}
                sx={{
                    height: "110vh", // قفل شدن روی یک صفحه کامل
                    display: "flex",
                }}
            >
                <Grid container>
                    <Grid sx={{
                        position: "relative", height: "400px", display: "flex",
                        flexDirection: "column", alignItems: "center",
                        mb: { xs: "30px", sm: "65px", md: "0" }
                    }} size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 5 }}
                    >
                        {/* لایه اول: قوطی یا موکاپات قهوه */}
                        <Box
                            ref={potRef}
                            component="img"
                            src={CofSuche} // اینجا عکس قوطی خودت رو بذار
                            sx={{ width: "60%", height: "auto", zIndex: 3, mr: "14%" }}
                        />

                        {/* لایه دوم: باریکه ریزش مایع (کاپوچینو) */}
                        <Box
                            ref={streamRef}
                            sx={{
                                width: "7%",
                                height: "0px", // در ابتدا صفر است
                                backgroundColor: "#6f4e37", // رنگ قهوه‌ای کاپوچینو
                                borderRadius: "3px",
                                position: "absolute",
                                top: "50%",
                                zIndex: 2,
                                transition: "height 1s"
                            }}
                        />

                        {/* لایه سوم: لیوان لاکچری */}
                        <Box
                            sx={{
                                width: "40%",
                                minHeight: "40%",
                                borderBottom: "4px solid #fff",
                                borderLeft: "4px solid #fff",
                                borderRight: "4px solid #fff",
                                borderRadius: "0 0 40px 40px", // شبیه لیوان پورتفولیو
                                position: "relative",
                                overflow: "hidden",
                                mt: "auto",
                                zIndex: 1
                            }}
                        >
                            {/* مایع در حال بالا آمدن داخل لیوان */}
                            <Box
                                ref={liquidRef}
                                sx={{
                                    width: "100%",
                                    height: "0%", // در ابتدا خالی است
                                    backgroundColor: "#6f4e37",
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    zIndex: -1
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 7, lg: 7, xl: 7 }}>
                        {children}
                    </Grid>
                </Grid>
            </Grid>
            
        </>
    );
};

export default CofeeAnimationComponent;