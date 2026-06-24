import { useState } from "react";
import { Box, Paper } from "@mui/material";

// فرض کنیم این دو عکس شما هستند
import TopCard from "../../Assets/Imgs/topCard.webp";
import BackCard from "../../Assets/Imgs/BackCard.webp"
const Card = () => {
    // ۱. استیت برای نگه داشتن آدرس عکس فعلی
    const [currentImg, setCurrentImg] = useState(TopCard);
    // ۲. استیت برای کنترل انیمیشن (اگر true باشد متن تار و محو می‌شود)
    const [isFading, setIsFading] = useState(false);

    const handleImageClick = () => {
        if (isFading) return; // جلوگیری از کلیک‌های اسپم در طول انیمیشن

        setIsFading(true); // انیمیشن محو شدن شروع می‌شود

        // بعد از ۳۰۰ میلی‌ثانیه که عکس کاملاً محو شد، عکس را عوض می‌کنیم و دوباره ظاهرش می‌کنیم
        setTimeout(() => {
            setCurrentImg((prev) => (prev === TopCard ? BackCard : TopCard));
            setIsFading(false); // انیمیشن ظاهر شدن شروع می‌شود
        }, 300);
    };

    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Paper
                elevation={12}
                sx={{
                    p: 0.5,
                    borderRadius: "20px",
                    overflow: "hidden",
                    backgroundColor: "rgba(4, 0, 88, 0.05)",
                    backdropFilter: "blur(10px)",
                    maxWidth: "400px",
                    cursor: "pointer" // تبدیل ماوس به حالت کلیک
                }}
                onClick={handleImageClick} // فعال شدن تابع با کلیک روی کل کارت
            >
                <Box
                    component="img"
                    src={currentImg} // عکس پویا شده است
                    alt="محمد انصاری"
                    sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "18px",
                        display: "block",

                        // 🌟 جادوی انیمیشن اینجاست: کنترل ترنزیشن برای تغییرات نرم
                        transition: "transform 0.4s ease-in-out, box-shadow 0.4s, opacity 0.3s ease-in-out, filter 0.3s ease-in-out",

                        // اگر استیت isFading فعال شود، عکس محو و تار می‌شود، در غیر این صورت کاملاً واضح است
                        opacity: isFading ? 0.2 : 1,
                        filter: isFading ? "blur(8px)" : "blur(0px)",

                        "&:hover": {
                            transform: "scale(1.05)",
                            boxShadow: "0px 15px 30px rgba(96, 125, 139, 0.4)"
                        }
                    }}
                />
            </Paper>
        </Box>
    );
};

export default Card;