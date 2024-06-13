import nodemailer from "nodemailer"
import "dotenv/config"
let currentDate = new Date();

let responseDate = new Date(currentDate);
responseDate.setDate(responseDate.getDate() + 7);
responseDate = responseDate.toDateString();

const sendMailToSelectedStudent = (student) => {
    let completionDate = new Date(currentDate);
    if (student.internshipFor === "Advance Web Development Internship") {
        completionDate.setMonth(completionDate.getMonth() + 3);
    } else if (student.internshipFor === "Intermediate Web Development Internship") {
        completionDate.setMonth(completionDate.getMonth() + 2);
    } else {
        completionDate.setMonth(completionDate.getMonth() + 1);
    }
    completionDate = completionDate.toDateString();
    console.log("got data for sending email")
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
            subject: `Internship Offer Letter From MICROSTEP ✔ (Application #${Date.now()})`, // Subject line
            text: "Microstep", // plain text body
            html: ` <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div
            style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #ccc;">
                <h1 style="margin: 0; font-size: 24px;">Congratulations!</h1>
            </div>
            <div style="margin-top: 20px;">
                <p>Dear ${student.firstName},</p>
                <p>We are pleased to inform you that your application for the <strong>${student.internshipFor}</strong>
                    at Microstep , has been accepted!</p>
                <p>Your resume was very impressive,
                    and we believe you would be a valuable asset to our team. We've selected you for the
                    <strong>${student.internshipFor}</strong> based on your skills and experience.
                </p>
                <p><strong>Online Entrance Tasks : </strong></p>
                <p>To officially begin the internship process,
                    you will need to complete online entrance tasks scheduled from <strong> ${currentDate.toDateString()} </strong>to<strong> ${completionDate} </strong>You can access the tasks by visiting the following link: </p>
                <a href=${student.taskForStudentLink}
                    style="display: inline-block; padding: 10px 20px; margin-top: 10px; background-color: #007BFF; color: #fff; text-decoration: none; border-radius: 5px;"
                    target="_blank">View Task</a>
                <p><strong> Benefits of the Internship : </strong></p>
                <p>We believe this internship will provide you with a valuable learning experience and help you develop
                    your programming and development skills. You will gain practical experience working on real-world
                    projects and receive guidance from experienced professionals. </p>
                <p><strong>Next Steps : </strong></p>
                <p>If you are interested in accepting this offer, please reply to this email by<strong> ${responseDate} </strong>to
                    confirm your participation.</p>
                <p>We look forward to hearing from you soon and welcoming you to the team!</p>
                <p>Best regards,</p>
                <p>Microstep Team</p>
                <p>Your Task Submission ID is : <span style="color:red;">${student._id}</span></p>
            </div>
            <div style="margin-top: 20px; text-align: center; font-size: 14px; color: #666;">
                <p>Microstep | INDIA </p>
                <p>If you have any questions, please do not hesitate to contact us at microstep@gmail.com</p>
            </div>
        </div>
    </div>`, // html body
        });

        console.log("Email has been sent successfully to " + student.email);
    }

    main().catch(console.error);
}

export default sendMailToSelectedStudent;
