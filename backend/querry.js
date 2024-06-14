import nodemailer from "nodemailer"
import "dotenv/config"

const sendQuerry = (querry) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.PASS_KEY,
        },
    });
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
        // send mail with defined transport object
        await transporter.sendMail({
            from: {
                name: `Microstep - ${new Date()}`,
                address: process.env.EMAIL_ID
            }, // sender address
            to: process.env.ADMIN_EMAIL_ID, // list of receivers
            subject: "Querry From Student", // Subject line
            text: "Microstep", // plain text body
            html: `<div style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px; background-color: #f4f4f4;">
    <div
        style="max-width: 600px; margin: auto; background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <div style="margin-bottom: 20px;">
            <h2 style="color: #4CAF50; margin-bottom: 10px;">New Message from Contact Form</h2>
            <p style="margin: 10px 0;"><strong>Name : </strong>${querry.name}</p>
            <p style="margin: 10px 0;"><strong>Email : </strong>${querry.email}</p>
            <p style="margin: 10px 0;"><strong>Message : </strong></p>
            <p style="margin: 10px 0;">${querry.querry}</p>
        </div>
        <div style="margin-top: 20px; font-size: 0.9em; color: #777;">
            <p>&copy; 2024 Your Microstep. All rights reserved.</p>
        </div>
    </div>
</div>`, // html body
        });
    }

    main().catch(console.error);
}

export default sendQuerry;
