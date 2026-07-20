import { useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { gsap } from "gsap";
import { Box } from "@mui/material";

const TabTransition = ({ value, children }) => {
    const nodeRef = useRef(null);

    // 🟢 ۱. انیمیشن ورود تب جدید (اسلاید ملایم از راست به چپ + فید شدن)
    const onEnterHandler = (node) => {
        gsap.fromTo(node,
            { x: -100, opacity: 0 },
            { 
                x: 0, 
                opacity: 1, 
                duration: 0.5, 
                ease: "power2.out",
                clearProps: "all" // پاک کردن استایل‌های موقت بعد از اتمام انیمیشن
            }
        );
    };

    // 🟢 ۲. انیمیشن خروج تب قبلی (اسلاید به سمت چپ + فید اوت)
    const onExitHandler = (node) => {
        gsap.to(node, { 
            x: -100, 
            opacity: 0, 
            duration: 0.4, 
            ease: "power2.in" 
        });
    };

    return (
        <SwitchTransition mode="out-in">
            <CSSTransition
                key={value} // 🟢 با تغییر شماره تب (index)، انیمیشن شلیک می‌شود
                nodeRef={nodeRef}
                timeout={{ enter: 500, exit: 400 }}
                onEnter={() => onEnterHandler(nodeRef.current)}
                onExit={() => onExitHandler(nodeRef.current)}
                unmountOnExit
            >
                <Box 
                    ref={nodeRef} 
                    sx={{ 
                        width: "100%",
                        position: "relative"
                    }}
                >
                    {children}
                </Box>
            </CSSTransition>
        </SwitchTransition>
    );
};

export default TabTransition;