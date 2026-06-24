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
        { label: "نمونه کار", icon: <DashboardCustomizeRounded />, index: 1 },
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
            textColor="primary"
            TabIndicatorProps={{
                style: {
                    width: '10px',             // 🌟 Default is 2px. Changing this to 6px makes it look bold and premium!
                    backgroundColor: "#fff", // You can also match it to your avatar border color
                    borderRadius: '0 3px 10px 0' // Optional: Gives the line soft rounded corners
                }
            }}
            sx={{
                '& .MuiTab-root': {
                    minHeight: '55px',
                    padding: "10px 40px",
                    justifyContent: "flex-start"
                }
            }}
        >
            {sidebarTabs.map((t) => (
                <Tab onClick={handleDrawerToggle} label={t.label} key={t.index}
                    icon={t.icon} iconPosition="start" {...tabProps(t.index)}
                    sx={{
                        color: "whitesmoke"
                    }} />
            ))}
        </Tabs>
    )
}

export default SidebarTabsComponent;