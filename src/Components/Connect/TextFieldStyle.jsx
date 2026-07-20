


const TextFieldStyle = {
    "& .MuiFilledInput-root": {
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        borderRadius: "8px",
        color: "whitesmoke",
        border: "1px solid rgba(255,255,255,0.05)",
        transition: "all 0.3s",
        "&:before, &:after": { display: "none" },
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.06)",
            borderColor: "rgba(0, 122, 204, 0.4)",
        },
        "&.Mui-focused": {
            backgroundColor: "rgba(0, 14, 70, 0.3)",
            borderColor: "#007acc",
        },
        // 🚨 استایل نئونی قرمز در صورت بروز خطای ولیدیشن
        "&.Mui-error": {
            borderColor: "#ff4757",
            boxShadow: "0 0 10px rgba(255, 71, 87, 0.2)"
        }
    },
    "& .MuiInputLabel-root": {
        color: "grey.500",
        "&.Mui-focused": { color: "#007acc" },
        "&.Mui-error": { color: "#ff4757" }
    },
    // استایل متن کمکی ارور زیر فیلد
    "& .MuiFormHelperText-root": {
        marginRight: "4px",
        marginLeft: "4px",
        "&.Mui-error": { color: "#ff4757" }
    }
};
export default TextFieldStyle;