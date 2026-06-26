import Grid from '@mui/material/Grid';

const ContentContainer = ({ children }) => {
    return (
        <Grid
            // 🟢 آپدیت به نسخه ۹: انتقال پراپ‌های قدیمی به ساختار متمرکز size
            size={{
                xs: 12,
                sm: 12,
                md: 9,
                lg: 9,
                xl: 9
            }}
        >
            {children}
        </Grid>
    );
};

export default ContentContainer;