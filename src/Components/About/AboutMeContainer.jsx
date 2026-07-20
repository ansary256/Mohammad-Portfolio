import AIEvaluationCard from "./AIEvaluationCard";
import MyValues from "./MyValues";
import Me from "./Me";
import { Box, Chip, Container, Divider, useMediaQuery, useTheme } from "@mui/material";

const AboutMeContainer = () => {
    const theme2 = useTheme();
    const isMobile = useMediaQuery(theme2.breakpoints.down("sm"));
    return (
        <Box sx={{
            width: "100%",
            minHeight: "100vh",
            height: "100vh", // ست کردن ارتفاع لایه اصلی
            overflowY: "auto", // 🟢 کلید اصلی: فعال‌سازی اسکرول عمودی داخلی
            overflowX: "hidden",
            background: "linear-gradient(135deg, #000040 , #000018)",
            color: "whitesmoke",
            py: { xs: 6, md: 10 },
            boxSizing: "border-box"
        }}>
            <Container maxWidth="lg">

                {/* 🔹 بخش اول: معرفی و عکس پرتره */}
                <Me />
                <Divider
                    sx={{
                        my: 5,
                        "&::before, &::after": {
                            borderColor: "rgba(0, 122, 204, 0.3)",
                            borderTopWidth: "5px",
                            borderRadius: "2px"
                        }
                    }}
                >
                    <Chip
                        label={isMobile ? "Values & Interests" : "ارزش‌ها و رویکردها (Values & Interests)"}
                        sx={{
                            px: { xs: 1, md: 2 },
                            py: { xs: 2, md: 2.5 },
                            fontSize: { xs: "0.85rem", sm: "1rem", md: "1.1rem" },
                            fontWeight: "bold",
                            color: "whitesmoke",
                            backgroundColor: "rgba(0, 122, 204, 0.12)",
                            border: "1px solid rgba(0, 122, 204, 0.3)",
                            backdropFilter: "blur(10px)",
                            borderRadius: "24px",
                            boxShadow: "0 0 15px rgba(0, 122, 204, 0.15)",
                        }}
                    />
                </Divider>
                {/* 🔹 بخش دوم: کارت‌های ارزش‌ها و رویکردها (Values & Interests) */}
                <MyValues />
                <AIEvaluationCard />
            </Container>
        </Box>
    );
};

export default AboutMeContainer;