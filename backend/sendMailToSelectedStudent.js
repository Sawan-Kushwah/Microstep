import nodemailer from "nodemailer"
import "dotenv/config"
let currentDate = new Date();
let completionDate = new Date(currentDate);
completionDate.setMonth(completionDate.getMonth() + 1);
completionDate = completionDate.toDateString();


const sendMailToSelectedStudent = (student) => {
    console.log("got data for sending email")
    // console.log(student)
    // console.log(task);
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
            subject: "Selected for Microstep internship ✔", // Subject line
            text: "Microstep", // plain text body
            html: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #ccc;">
                    <h1 style="margin: 0; font-size: 24px;">Congratulations!</h1>
                </div>
                <div style="margin-top: 20px;">
                    <p>Dear ${student.firstName},</p>
                    <p>We are pleased to inform you that you have been selected for the <strong> ${student.internshipFor}</strong> at Microstep.</p>
                    <p>Your application and resume were impressive, and we believe you will be a valuable addition to our team. Below are your details as per our records:</p>
                    <ul>
                        <li><strong>Phone Number:</strong> ${student.phoneNumber}</li>
                        <li><strong>City:</strong> ${student.city}</li>
                        <li><strong>College Name:</strong> ${student.collegeName}</li>
                     </ul>
                    <p>Attached to this email, you will find a document detailing a task you are required to complete during your internship. If you successfully complete the task within the specified time frame, you will receive a certificate from us.</p>
                    <p>Please respond to this email to confirm your acceptance of this internship offer by from ${currentDate.toDateString()} to ${completionDate}</p>
                    <p>We look forward to having you on board and seeing you thrive during your internship.</p>
                    <p>Best regards,</p>
                    <p>Microstep Team</p>
                    <a href=${student.taskForStudentLink} style="display: inline-block; padding: 10px 20px; margin-top: 20px; background-color: #007BFF; color: #fff; text-decoration: none; border-radius: 5px;" target="_blank">View Task</a>
                </div>
                <div style="margin-top: 20px; text-align: center; font-size: 14px; color: #666;">
                    <p>Microstep | [Company Address] | [Company Phone]</p>
                    <p>If you have any questions, please do not hesitate to contact us at [Company Email].</p>
                </div>
            </div>
        </div>`, // html body
        });

        console.log("Email has been sent successfully to " + student.email);
    }

    main().catch(console.error);
}

export default sendMailToSelectedStudent;
