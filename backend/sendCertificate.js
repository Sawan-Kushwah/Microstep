import nodemailer from "nodemailer"
import "dotenv/config"

const sendCertificate = (student, certificate) => {
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
            to: student.email, // list of receivers
            subject: "Congratulations🎊", // Subject line
            text: "Microstep", // plain text body
            html: `<div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; margin: 0; padding: 20px;">
            <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ccc; border-radius: 10px;">
            <h1 style="color: #4CAF50;">Congratulations on Completing Your Internship!</h1>
            <p>Dear ${student.firstName},</p>
            <p>We are pleased to inform you that you have successfully completed your internship with MICROSTEP. Your
                hard work, dedication, and contributions have been greatly appreciated, and we are proud of the progress
                and
                skills you have demonstrated during your time with us.</p>
            <p>As a token of our appreciation and to acknowledge your achievements, we have prepared a certificate of
                completion for you. You can download your certificate using the following link:</p>
            <p><a href=${certificate} style="color: #4CAF50; text-decoration: none; cursor:pointer;">Download Your Certificate</a>
            </p>
            <p>We hope that this certificate serves as a testament to the valuable experience you have gained and helps
                you
                in your future academic and professional endeavors.</p>
            <p>Please feel free to reach out if you have any questions or need further assistance. We would also
                appreciate
                it if you could provide us with feedback on your internship experience to help us improve our program
                for
                future interns.</p>
            <p>Once again, congratulations on your successful completion of the internship. We wish you all the best in
                your
                future endeavors and hope to stay in touch.</p>
            <p>Best regards,</p>
            <p>MICROSTEP<br>microstep@gmail.com<br>www.microstep.com</p>
            <div style="margin-top: 20px; font-size: 0.9em; color: #777;">
                <p>&copy; 2024 Microstep. All rights reserved.</p>
            </div>
        </div>
    </div>`, // html body
        });
    }

    main().catch(console.error);
}

export default sendCertificate;
