import nodemailer from "nodemailer"
import "dotenv/config"

const sendMailTo = (userdata) => {
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
                name: "Microstep",
                address: process.env.EMAIL_ID
            }, // sender address
            to: "shopwithsawan@gmail.com", // list of receivers
            subject: "Checkout new user Register ✔", // Subject line
            text: "Microstep", // plain text body
            html: `<div
            style="background: black; color: white; height: 100vh;">
            <div class="heading" style="font-size: 2rem; text-align: center;">
                Microstep Student information
            </div>
            <table style="width: 50%; border-collapse: collapse; margin: 20px auto;">
                <thead>
                    <tr>
                        <th style="border: 1px solid white; padding: 10px; text-align:center; background-color: #0076b4;">
                            Key
                        </th>
                        <th style="border: 1px solid white; padding: 10px; text-align:center; background-color: #0076b4;">
                            Value</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <td style="border: 1px solid white; padding: 10px; text-align:center;">Internship for</td>
                        <td style="border: 1px solid white; padding: 10px; text-align:center;">${userdata.internshipFor}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid white; padding: 10px; text-align:center;">Name</td>
                        <td style="border: 1px solid white; padding: 10px; text-align:center;">${userdata.firstName}  ${userdata.lastName}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid white; padding: 10px; text-align:center;">Phone Number</td>
                        <td style="border: 1px solid white; padding: 10px; text-align:center;">${userdata.phoneNumber}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid white; padding: 10px; text-align:center;">Email</td>
                        <td style="border: 1px solid white; padding: 10px; text-align:center;">${userdata.email}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid white; padding: 10px; text-align:center;">City</td>
                        <td style="border: 1px solid white; padding: 10px; text-align:center;">${userdata.city}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid white; padding: 10px; text-align:center;">State</td>
                        <td style="border: 1px solid white; padding: 10px; text-align:center;">${userdata.state}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid white; padding: 10px; text-align:center;">College Name</td>
                        <td style="border: 1px solid white; padding: 10px; text-align:center;">${userdata.collegeName}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid white; padding: 10px; text-align:center;">Resume Name</td>
                        <td style="border: 1px solid white; padding: 10px; text-align:center;">${userdata.resume}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid white; padding: 10px; text-align:center;">View Resume</td>
                        <td style="border: 1px solid white; padding: 10px; text-align:center;">${userdata.viewResume}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid white; padding: 10px; text-align:center;">About</td>
                        <td style="border: 1px solid white; padding: 10px; text-align:center;">${userdata.about}</td>
                    </tr>
                </tbody>
            </table>
        </div>`, // html body
        });

        console.log("Email has been sent successfully");
    }

    main().catch(console.error);
}

export default sendMailTo;
