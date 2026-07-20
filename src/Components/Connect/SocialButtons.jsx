import { Box, Button, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const SocialButtons = () => {

    // آرایه داده‌ها برای رندر تمیز و داینامیک دکمه‌ها
    const socials = [
        {
            title: "Telgram",
            subtitle: "@mohammadansari7796",
            icon: <TelegramIcon sx={{ fontSize: 28, color: "#26a69a" }} />,
            color: "rgba(38, 166, 154, 0.15)",
            link: "https://t.me/mohammadansari7796"
        },
        {
            title: "LinkedIn Profile",
            subtitle: "@mohammad256",
            icon: <LinkedInIcon sx={{ fontSize: 28, color: "#00a0dc" }} />,
            color: "rgba(0, 160, 220, 0.15)",
            link: "https://linkedin.com/in/mohammad256"
        },
        {
            title: "GitHub Repos",
            subtitle: "@ansary256",
            icon: <GitHubIcon sx={{ fontSize: 28, color: "#ab47bc" }} />,
            color: "rgba(171, 71, 188, 0.15)",
            link: "https://github.com/ansary256"
        },
        {
            title: "Instagram Page",
            subtitle: "@mohammadansari7796",
            icon: <InstagramIcon sx={{ fontSize: 28, color: "#e1306c" }} />,
            color: "rgba(225, 48, 108, 0.15)", // گرایش به رنگ صورتی/سرخابی اینستاگرام
            link: "https://instagram.com/mohammadansari7796"
        },
    ];

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: "100%",
            maxWidth: "400px",
            p: 2
        }}>
            {socials.map((item, index) => (
                <Button
                    key={index}
                    component="a"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 2.5,
                        p: "14px 20px",
                        borderRadius: "16px",
                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        backdropFilter: "blur(12px)",
                        textTransform: "none", // جلوگیری از بزرگ شدن حروف انگلیسی
                        textAlign: "left",
                        transition: "all 0.3s ease-in-out",
                        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
                        "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.07)",
                            borderColor: "rgba(255, 255, 255, 0.2)",
                            transform: "translateY(-3px)",
                            boxShadow: "0 12px 40px 0 rgba(0, 0, 0, 0.3)",
                        }
                    }}
                >
                    {/* باکس محصورکننده آیکون دقیقا مثل تصویر */}
                    <Box sx={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "12px",
                        backgroundColor: item.color,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "inset 0 0 10px rgba(255,255,255,0.05)"
                    }}>
                        {item.icon}
                    </Box>

                    {/* متون داخلی دکمه با ساختار تایتل و ساب‌تایتل */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.2 }}>
                        <Typography sx={{
                            color: "#ffffff",
                            fontWeight: 600,
                            fontSize: "1rem",
                            lineHeight: 1.2
                        }}>
                            {item.title}
                        </Typography>
                        <Typography sx={{
                            color: "rgba(255, 255, 255, 0.4)",
                            fontWeight: 400,
                            fontSize: "0.8rem",
                            fontFamily: "monospace"
                        }}>
                            {item.subtitle}
                        </Typography>
                    </Box>
                </Button>
            ))}
        </Box>
    );
};

export default SocialButtons;