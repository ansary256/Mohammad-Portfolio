import { Box, Typography, CircularProgress } from "@mui/material";

// پراپ‌های ورودی: نام مهارت، درصد پیشرفت و آیکون/لوگو
const SkillCard = ({ name = "PYTHON", value = 85, logo }) => {
    return (
        <Box
            sx={{
                width: "100%",
                maxWidth:"260px",
                height: "280px",
                borderRadius: "20px",
                background: "linear-gradient(145deg, #2b2b2b, #181818)", // تم متالیک دارک هماهنگ با وی‌اس‌کد
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "0 15px 35px rgba(0,0,0,0.4), inset 0 2px 5px rgba(255,255,255,0.05)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                // 🟢 افکت هاور خیره‌کننده نئونی شبیه به تصویر
                "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(0, 122, 204, 0.25), inset 0 2px 5px rgba(255,255,255,0.1)",
                    "& .glow-circle": {
                        boxShadow: "0 0 25px rgba(0, 122, 204, 0.6)",
                    }
                }
            }}
        >
            {/* ۱. کانتینر مرکزی دایره و لوگو */}
            <Box
                className="glow-circle"
                sx={{
                    position: "relative",
                    width: "140px",
                    height: "140px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "radial-gradient(circle, #252525 0%, #1a1a1a 100%)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.4), inset 0 4px 10px rgba(0,0,0,0.6)",
                    transition: "all 0.4s ease",
                }}
            >
                {/* دایره پیشرفت بک‌گراند (خاکستری تیره پشت کار) */}
                <CircularProgress
                    variant="determinate"
                    value={100}
                    size={130}
                    thickness={4.5}
                    sx={{
                        color: "rgba(255,255,255,0.04)",
                        position: "absolute",
                    }}
                />

                {/* 🟢 دایره پیشرفت اصلی (رنگ آبی متالیک و درخشان جلو) */}
                <CircularProgress
                    variant="determinate"
                    value={value}
                    size={130}
                    thickness={4.5}
                    sx={{
                        color: "#007acc", // رنگ آبی برند وی‌اس‌کد و متالیک تصویر
                        position: "absolute",
                        strokeLinecap: "round", // گرد کردن لبه‌های بار پیشرفت
                        filter: "drop-shadow(0px 0px 6px rgba(0, 122, 204, 0.8))",
                    }}
                />

                {/* نشانگر متنی درصد مهارت (بالای دایره داخل کادر)
                <Box
                    sx={{
                        position: "absolute",
                        top: "-5px",
                        backgroundColor: "#1e1e1e",
                        px: 1,
                        borderRadius: "10px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.3)"
                    }}
                >
                    <Typography sx={{ color: "#dcdcaa", fontSize: "0.7rem", fontWeight: "bold" }}>
                        {value}%
                    </Typography>
                </Box> */}

                {/* ۲. لوگوی مرکزی وسط دایره */}
                <Box 
                    sx={{ 
                        width: "55px", 
                        height: "55px", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))"
                    }}
                >
                    {logo}
                </Box>
            </Box>

            {/* ۳. تایپوگرافی نام مهارت در پایین کارت */}
            <Box sx={{ mt: 3, display: "flex", alignItems: "center", gap: 0.8, direction: "ltr" }}>
                <Box sx={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#dcdcaa" }} />
                <Typography
                    sx={{
                        color: "#d4d4d4",
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        letterSpacing: "1.5px",
                        fontFamily: "'Consolas', monospace"
                    }}
                >
                    {name.toUpperCase()}
                </Typography>
            </Box>
        </Box>
    );
};

export default SkillCard;