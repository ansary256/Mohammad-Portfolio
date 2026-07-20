import * as Yup from "yup";

const validationSchema = Yup.object({
    fullName: Yup.string()
        .min(3, "نام باید حداقل ۳ کاراکتر باشد !")
        .required("وارد کردن نام الزامی است"),
    email: Yup.string()
        .email("آدرس ایمیل وارد شده معتبر نیست")
        .required("برای مخابره پیام، ایمیلت رو نیاز دارم"),
    subject: Yup.string()
        .min(5, "موضوع پیام خیلی کوتاهه")
        .required("موضوع پیام رو مشخص کن"),
    message: Yup.string()
        .min(10, "متن پیام باید حداقل ۱۰ کاراکتر باشه")
        .required("متن پیام نمیتونه خالی باشه")
});

export default validationSchema;