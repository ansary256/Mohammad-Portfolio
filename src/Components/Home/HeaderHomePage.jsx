import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { keyframes } from "@mui/system";
import Card from "./Card";

const HeaderHomePage = () => {
    // ۱. تعریف انیمیشن تایپ شدن با استفاده از کدهای CSS در ماتیریال یوآی
    const typing = keyframes`
      from { width: 0 }
      to { width: 100% }
    `;

    const blink = keyframes`
      from, to { border-color: transparent }
      50% { border-color: transparent; } // رنگ خط چشمک‌زنِ تایپ
    `;

    const gradientAnimation = keyframes`
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }`;

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "150px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "40px 20px",
                    textAlign: "center"
                }}
            >
                {/* متن خوشامدگویی بالایی */}
                <Typography
                    variant="subtitle1"
                    component="p"
                    sx={{
                        // ۱. استفاده از رنگ‌های جذاب گرادینت به عنوان پس‌زمینه متن
                        background: "linear-gradient(-45deg, #64b5f6, #ba68c8, #4db6ac, #fff)",
                        backgroundSize: "400% 400%", // بزرگ کردن پس‌زمینه برای اینکه انیمیشن فضای حرکت داشته باشه

                        // ۲. ترفند بریدن پس‌زمینه فقط به شکل حروف متن (Clip)
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent", // شیشه‌ای کردن رنگ خود متن تا گرادینتِ پشتش دیده بشه

                        // ۳. فعال‌سازی انیمیشن حرکت رنگ‌ها
                        animation: `${gradientAnimation} 6s ease infinite`,

                        fontWeight: "900",
                        letterSpacing: "2px", // کمی فاصله بیشتر بین حروف برای شیک‌تر شدن
                        mb: 1,
                        fontSize: "1.1rem"
                    }}
                >
                    به سایت من خوش اومدین
                </Typography>
            </Box>


            <Grid container sx={{
                width: "100%",
                height:"60vh",
                display: "flex",
                // 🟢 جادوی ریپانسو: در موبایل (xs) چیدمان عمودی معکوس، در دسکتاپ (md) افقی عادی
                flexDirection: { xs: "column-reverse", md: "row" }
            }}>
                <Grid
                    size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
                >
                    <Grid container>
                        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                            {/* باکسی که انیمیشن تایپ روی آن اعمال می‌شود */}
                            <Box sx={{ padding: "30px", width: "100%" }}>
                                <Typography
                                    variant="h3"
                                    component="h1"
                                    sx={{
                                        color: "whitesmoke",
                                        fontWeight: "bold",
                                        fontFamily: "monospace", // فونت‌های تک‌فاصله برای افکت تایپ عالی می‌شوند
                                        overflow: "hidden", // پنهان کردن حروف قبل از تایپ شدن
                                        borderRight: "30px solid", // خط چشمک‌زنِ انتهای متن
                                        whiteSpace: "nowrap", // جلوگیری از شکستن متن به خط بعدی
                                        margin: "0 auto",
                                        float: "left",
                                        // اعمال همزمان انیمیشن تایپ و چشمک زدن خط سایدبار
                                        animation: `
                            ${typing} 3.5s steps(30, end) infinite alternate,
                            ${blink} 0.75s step-end infinite
                        `,
                                    }}
                                >
                                    محمد انصاری
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" />
                    <Grid container>
                        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                            {/* 🟢 باگ اصلاح شد: کلمه Width با حروف کوچک (width) جایگزین شد */}
                            <Box sx={{ p: "20px" }}>
                                <Typography
                                    variant="body1" // سایز استاندارد برای متون بدنه و توضیحات
                                    component="p"   // رندر شدن به عنوان تگ p در HTML برای حفظ ساختار اصولی سئو
                                    sx={{
                                        color: "grey.400",          // رنگ خاکستری ملایم و مدرن برای بک‌گراندهای تاریک
                                        textAlign: "justify",       // تراز شدن متن از دو طرف (تراز کتابی و شیک)
                                        lineHeight: 1.8,            // فاصله استاندارد بین خطوط برای خوانایی بهتر متن فارسی
                                        fontSize: { xs: "0.95rem", md: "1.1rem" }, // واکنش‌گرا کردن سایز فونت (در موبایل کمی کوچک‌تر، در دسکتاپ بزرگ‌تر)
                                        mt: 2,                      // ایجاد فاصله عمودی از عنوان بالایی (Margin Top)
                                    }}
                                >
                                    توسعه‌دهنده فرانت‌اند و شیفته خلق رابط‌های کاربری مدرن، با تجربه کار در اکوسیستم{" "}

                                    {/* متمایز کردن کلمه .NET با رنگ روشن‌تر و وزن ضخیم‌تر */}
                                    <Box component="span" sx={{
                                        color: "whitesmoke", fontWeight: "bold", direction: "ltr",
                                        display: "inline-block"
                                    }}>
                                        NET.
                                    </Box>

                                    <br />
                                    من ایده‌های پیچیده را به کدهای تمیز، واکنش‌گرا و بهینه‌سازی‌شده برای{" "}
                                    <Box component="span" sx={{ color: "#607D8B", fontWeight: "bold" }}>
                                        سئو
                                    </Box>{" "}


                                    تبدیل می‌کنم تا پلی میان منطق قدرتمند بک‌اند و یک تجربه دیجیتال بی‌نقص برای کاربران بسازم.

                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
                >
                    <Card />
                </Grid>
            </Grid>
        </>
    );
};

export default HeaderHomePage;




