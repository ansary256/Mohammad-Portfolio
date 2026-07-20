import { Tab, Tabs } from "@mui/material";
import { HomeRounded, ConnectWithoutContactRounded, DashboardCustomizeRounded, MoodRounded, InfoRounded }
    from '@mui/icons-material';
import { MainContext } from "../../contexts/MainProvider";
import { useContext } from "react";

const SidebarTabsComponent = () => {
    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tabpanel-${index}`
        }
    }
    const { pageNumberValue: value, handleChangePageNumberValue: handleChange, handleDrawerToggle }
        = useContext(MainContext);

    const sidebarTabs = [
        { label: "صفحه اصلی", icon: <HomeRounded />, index: 0 },
        { label: "مسیر حرکت", icon: <DashboardCustomizeRounded />, index: 1 },
        { label: "رزومه", icon: <InfoRounded />, index: 2 },
        { label: "ارتباط با من", icon: <ConnectWithoutContactRounded />, index: 3 },
        { label: "درباره من", icon: <MoodRounded />, index: 4 },
    ];

    return (
        <Tabs
            variant="scrollable"
            orientation="vertical"
            value={value}
            onChange={handleChange}
            allowScrollButtonsMobile
            slotProps={{
                indicator: {
                    style: {
                        width: '6px', // اصلاح شد: در نسخه ۹ مقدار ۶ پیکسل پایداری و ظاهر زیباتری روی سایدبار عمودی دارد
                        backgroundColor: "#fff",
                        borderRadius: '0 3px 3px 0'
                    }
                }
            }}
            sx={{
                width: "100%",
                // 🟢 مدیریت متمرکز استایل تب‌ها در نسخه ۹
                '& .MuiTab-root': {
                    minHeight: '55px',
                    padding: "10px 40px",
                    justifyContent: "flex-start",
                    color: "rgba(255, 255, 255, 0.6)", // رنگ تب‌های غیرفعال (خاکستری ملایم شیک)
                    fontWeight: "bold",
                    transition: "all 0.3s ease",

                    // 🟢 رنگ آیکون‌های غیرفعال
                    '& .MuiTab-iconWrapper': {
                        color: "rgba(255, 255, 255, 0.6)",
                        transition: "all 0.3s ease",
                    },

                    // 🟢 استایل زمان هاور شدن ماوس (Hover)
                    '&:hover': {
                        color: "#fff",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        '& .MuiTab-iconWrapper': {
                            color: "#fff",
                        }
                    },

                    // 🟢 استایل ریشه‌ای تبِ فعال (Selected) در MUI v9
                    '&.Mui-selected': {
                        color: "#fff !important", // فورس کردن رنگ سفید خالص برای متن تب فعال
                        backgroundColor: "rgba(255, 255, 255, 0.1)", // هایلایت بسیار ملایم پشت تب فعال
                        '& .MuiTab-iconWrapper': {
                            color: "#64b5f6 !important", // رنگ آیکون تب فعال (مثلاً آبی سایبر جذاب هماهنگ با هدرت)
                        }
                    }
                }
            }}
        >
            {sidebarTabs.map((t) => (
                <Tab
                    onClick={handleDrawerToggle}
                    label={t.label}
                    key={t.index}
                    icon={t.icon}
                    iconPosition="start"
                    {...tabProps(t.index)}
                />
            ))}
        </Tabs>
    );
};

export default SidebarTabsComponent;