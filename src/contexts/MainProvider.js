// context/index.js
import { createContext, useRef, useState } from "react";

//  ساخت کانتکست با مقادیر پیش‌فرض برای امنیت کد
export const MainContext = createContext({
    pageNumberValue: 0,
    handleChangePageNumberValue: () => { },
    mobileOpen: false,
    setMobileOpen: () => { },
    handleDrawerToggle: () => { },
});

// ساخت پرووایدر همین‌جا برای مدیریت واقعی استیت‌ها
export const MainProvider = ({ children }) => {
    // استیت‌های واقعی که توی مرورگر تغییر می‌کنن رو اینجا می‌نویسیم
    const [pageNumber, setPageNumber] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);
    const homePageScrollerRef = useRef(null);

    const handleChangePageNumber = (event, newValue) => {
        setPageNumber(newValue);
    };
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        // مقادیر واقعی رو اینجا به کامپوننت‌های زیرمجموعه تزریق می‌کنیم
        <MainContext.Provider value={{
            homePageScrollerRef,
            pageNumberValue: pageNumber,
            handleChangePageNumberValue: handleChangePageNumber,
            mobileOpen: mobileOpen,
            setMobileOpen: setMobileOpen,
            handleDrawerToggle
        }}>
            {children}
        </MainContext.Provider>
    );
};