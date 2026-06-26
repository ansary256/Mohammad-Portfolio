import { Box, Typography, Grid } from "@mui/material";

const VsCodeMockup = () => {
    // رنگ‌های استاندارد تم دارک وی‌اس‌کد
    const colors = {
        bg: "#1e1e1e",
        terminalBg: "#181818",
        tabActive: "#1e1e1e",
        tabBg: "#2d2d2d",
        textGrey: "#858585",
        keyword: "#569cd6",       // using, namespace, class, static, void
        className: "#4ec9b0",     // System, Program, Console
        method: "#dcdcaa",        // Main, WriteLine
        string: "#ce9178",        // "Hello World..."
        number: "#858585",
        textWhite: "#d4d4d4"
    };

    const codeLines = [
        { num: 1, content: <><Box component="span" sx={{ color: colors.keyword }}>using</Box> <Box component="span" sx={{ color: colors.className }}>System</Box>;</> },
        { num: 2, content: "" },
        { num: 3, content: <><Box component="span" sx={{ color: colors.keyword }}>namespace</Box> <Box component="span" sx={{ color: colors.method }}>HelloWorldApp</Box></> },
        { num: 4, content: <Box component="span" sx={{ color: colors.textWhite }}>{"{"}</Box> },
        { num: 5, content: <><Box component="span" sx={{ sx: { display: "inline-block" }, pl: 4 }}></Box><Box component="span" sx={{ color: colors.keyword }}>class</Box> <Box component="span" sx={{ color: colors.className }}>Program</Box></> },
        { num: 6, content: <Box component="span" sx={{ pl: 4, color: colors.textWhite }}>{"}"}</Box> },
        { num: 7, content: <><Box component="span"></Box><Box component="span" sx={{ color: colors.keyword }}>static void</Box> <Box component="span" sx={{ color: colors.method }}>Main</Box><Box component="span" sx={{ color: colors.textWhite }}>({/* string[] args */}</Box><Box component="span" sx={{ color: colors.keyword }}>string</Box><Box component="span" sx={{ color: colors.textWhite }}>[] args)</Box></> },
        { num: 8, content: <Box component="span" sx={{ pl: 8, color: colors.textWhite }}>{"{"}</Box> },
        { num: 9, content: <><Box component="span" sx={{ pl: 4 }}></Box><Box component="span" sx={{ color: colors.className }}>Console</Box><Box component="span" sx={{ color: colors.textWhite }}>.</Box><Box component="span" sx={{ color: colors.method }}>WriteLine</Box><Box component="span" sx={{ color: colors.textWhite }}> (</Box><Box component="span" sx={{ color: colors.string }}>"Hello World from my WebSite"</Box><Box component="span" sx={{ color: colors.textWhite }}>);</Box></> },
        { num: 10, content: <Box component="span" sx={{ pl: 8, color: colors.textWhite }}>{"}"}</Box> }
    ];

    return (
        <Grid container sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <Grid size={{ xs: 11 }}
                sx={{
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                    fontFamily: "'Consolas', 'Courier New', monospace",
                    backgroundColor: colors.bg,
                    direction: "rtl", // کل محیط ادیتور انگلیسی و چپ به راست است
                    border: "1px solid #3c3c3c"
                }}
            >
                {/* ۱. هدر و تب بالای وی‌اس‌کد */}
                <Grid size={{ xs: 12 }}
                    sx={{
                        display: "flex", backgroundColor: colors.tabBg,
                        height: "35px", alignItems: "flex-end"
                    }}>
                    <Box
                        sx={{
                            backgroundColor: colors.tabActive,
                            px: 3,
                            py: 0.8,
                            display: "flex",
                            alignItems: "center",
                            borderTop: "1px solid #007acc",
                            cursor: "default"
                        }}
                    >
                        <Typography sx={{ color: "#569cd6", fontSize: "0.75rem", fontWeight: "bold", mr: 1 }}>C#(</Typography>
                        <Typography sx={{ color: colors.textWhite, fontSize: "0.8rem" }}>HelloWorld.cs</Typography>
                        <Typography sx={{ color: "#569cd6", fontSize: "0.75rem", fontWeight: "bold" }}>)</Typography>
                    </Box>
                </Grid>

                {/* مسیر فایل (Breadcrumb) */}
                <Grid size={{ xs: 12 }}
                    sx={{
                        px: 2, py: 0.5, backgroundColor: colors.bg,
                        display: "flex", alignItems: "center", gap: 0.5
                    }}>
                    <Typography sx={{ color: colors.textGrey, fontSize: "0.75rem" }}>HelloWorldApp</Typography>
                    <Typography sx={{ color: colors.textGrey, fontSize: "0.75rem" }}>&gt;</Typography>
                    <Typography sx={{ color: colors.textGrey, fontSize: "0.75rem" }}>Program</Typography>
                    <Typography sx={{ color: colors.textGrey, fontSize: "0.75rem" }}>&gt;</Typography>
                    <Typography sx={{ color: colors.textWhite, fontSize: "0.75rem" }}>Main</Typography>
                </Grid>

                {/* ۲. بخش بدنه ادیتور و کدها */}
                <Grid size={{ xs: 12 }}
                    sx={{
                        p: 2, display: "flex",
                        flexDirection: "column"
                        , height: "auto"
                    }}>
                    {codeLines.map((line) => (
                        <Box key={line.num} sx={{ display: "flex", lineHeight: 1.6, fontSize: { xs: "0.8rem", md: "0.95rem" } }}>
                            {/* شماره خطوط سمت چپ */}
                            <Typography
                                sx={{
                                    width: "30px",
                                    color: colors.number,
                                    textAlign: "right",
                                    pr: 2,
                                    userSelect: "none",
                                    fontSize: "inherit",
                                    fontFamily: "inherit"
                                }}
                            >
                                {line.num}
                            </Typography>
                            {/* محتوای کدها */}
                            <Typography
                                sx={{
                                    color: colors.textWhite,
                                    fontSize: "inherit",
                                    fontFamily: "inherit",
                                    whiteSpace: "pre-wrap"
                                }}
                            >
                                {line.content}
                            </Typography>
                        </Box>
                    ))}
                </Grid>
                {/* ۳. بخش منوهای ترمینال (PROBLEMS, OUTPUT, ...) */}
                <Grid size={{ xs: 12 }}
                    sx={{
                        backgroundColor: colors.terminalBg, px: 2, pt: 1,
                        display: "flex", gap: 3
                    }}
                >
                    {["PROBLEMS", "OUTPUT", "DEBUG CONSOLE", "TERMINAL"].map((tab) => (
                        <Box key={tab} sx={{ pb: 0.5, borderBottom: tab === "TERMINAL" ? "1px solid #fff" : "none" }}>
                            <Typography
                                sx={{
                                    color: tab === "TERMINAL" ? colors.textWhite : colors.textGrey,
                                    fontSize: "0.75rem",
                                    fontWeight: "bold",
                                    cursor: "pointer"
                                }}
                            >
                                {tab}
                            </Typography>
                        </Box>
                    ))}
                </Grid>

                {/* ۴. متن خروجی داخل ترمینال (موفقیت‌آمیز) */}
                <Grid size={{ xs: 12 }}
                    sx={{
                        backgroundColor: colors.terminalBg, p: 2, minHeight: "100px",
                        display: "flex", flexDirection: "column", gap: 0.5
                    }}>
                    <Typography sx={{ color: colors.textWhite, fontSize: "0.85rem", fontFamily: "inherit" }}>
                        HelloWorldApp &gt; Program &gt; Main
                    </Typography>
                    <Typography sx={{ color: "#4ec9b0", fontSize: "0.85rem", fontFamily: "inherit", display: "flex", gap: 1 }}>
                        Hello World from my WebSite
                    </Typography>
                    {/* مکان‌نمای چشمک‌زن ترمینال (Cursor) */}
                    <Box sx={{ width: "6px", height: "20px", backgroundColor: colors.textWhite, mt: 0.5 }} />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default VsCodeMockup;