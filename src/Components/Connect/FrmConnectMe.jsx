
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material"
import SendIcon from "@mui/icons-material/Send";

import { useFormik } from "formik";

import validationSchema from "./ValidationShema";
import TextFieldStyle from "./TextFieldStyle";




const FrmConnectMe = () => {
    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            subject: "",
            message: ""
        },
        validationSchema: { validationSchema },
        onSubmit: (values, { resetForm }) => {
            // این بخش زمانی اجرا می‌شود که هیچ اروری در یاپ وجود نداشته باشد
            console.log("دیتای ارسال شده به سرور:", values);
            alert("پیام شما با موفقیت مخابره شد!");
            resetForm(); // ریست کردن فرم پس از ارسال موفق
        }
    });
    return (
        <Box sx={{
            width: "100%",
            height: "70vh",
            maxWidth: { xs: "100%", sm: "100%", md: "100%", lg: "550px" },
        }}>
            <Paper sx={{
                p: { xs: 3, md: 5 },
                boxSizing: "border-box",
                backgroundColor: "rgba(0, 14, 70, 0.15)",
                borderRadius: "20px",
                border: "1px solid rgba(0, 122, 204, 0.25)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                width: "100%",
            }}>
                <Typography variant="h4" sx={{ color: "whitesmoke", fontWeight: "bold", mb: 1 }}>
                    ارسال پیام
                </Typography>
                <Box component="form" onSubmit={formik.handleSubmit} noValidate>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                fullWidth
                                name="fullName"
                                label="نام و نام خانوادگی"
                                variant="filled"
                                value={formik.values.fullName}
                                onChange={formik.handleChange}
                                error={Boolean(formik.errors.fullName)} // فعال شدن وضعیت قرمز ارور
                                helperText={formik.errors.fullName} // نمایش متن خطای یاپ
                                sx={TextFieldStyle}
                                autoComplete="off"
                            />
                        </Grid>

                        {/* فیلد ایمیل */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                fullWidth
                                name="email"
                                autoComplete="off"
                                label="آدرس ایمیل"
                                variant="filled"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={Boolean(formik.errors.email)}
                                helperText={formik.errors.email}
                                sx={TextFieldStyle}
                            />
                        </Grid>
                        {/* فیلد موضوع */}
                        <Grid size={{ xs: 12 }}>
                            <TextField
                                fullWidth
                                name="subject"
                                label="موضوع پیام"
                                variant="filled"
                                value={formik.values.subject}
                                onChange={formik.handleChange}
                                error={Boolean(formik.errors.subject)}
                                helperText={formik.errors.subject}
                                autoComplete="off"
                                sx={TextFieldStyle}
                            />
                        </Grid>

                        {/* فیلد متن پیام */}
                        <Grid size={{ xs: 12 }}>
                            <TextField
                                fullWidth
                                name="message"
                                label="متن پیام شما..."
                                multiline
                                rows={4}
                                variant="filled"
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                error={Boolean(formik.errors.message)}
                                helperText={formik.errors.message}
                                sx={TextFieldStyle}
                                autoComplete="off"
                            />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <Button
                                type="submit"
                                variant="contained"
                                startIcon={<SendIcon />}
                                sx={{
                                    px: 4, py: 1.5,
                                    borderRadius: "50px",
                                    width: "40%",
                                    background: "linear-gradient(135deg, #000040 , #000018)",
                                    fontWeight: "bold",
                                    "&:hover": { background: "#000018" }
                                }}
                            >
                                ارسال
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    )
}

export default FrmConnectMe;