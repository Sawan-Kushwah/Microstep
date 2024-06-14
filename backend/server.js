import sendMailToSelectedStudent from "./sendMailToSelectedStudent.js"
// import { taskSubmission } from "./models/submission.js"
import sendCertificate from "./sendCertificate.js"
import { userdata } from "./models/schema.js"
import sendMailToAdmin from "./sendMail.js"
import bodyParser from "body-parser"
import sendQuerry from "./querry.js"
import mongoose from "mongoose"
import express from "express"
import fs from "fs/promises"
import multer from "multer"
import cors from "cors"
import 'dotenv/config'
const app = express()
const port = 3000

// connection to database
await mongoose.connect(process.env.MONGODB_URL);

//middle ware
app.use(cors())
app.use(bodyParser.json());
app.use("/resume", express.static("resume"))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// multer diskstorage setup - it is used to store the file type data
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './resume')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname)
    }
})
const upload = multer({ storage: storage })


app.post('/savedata', upload.single("resume"), async (req, res) => { // resume == this is from frontend side inside FormData()
    try {
        const correctedPath = req.file.path.replace(/\\/g, '/');
        let userdataFromClientSide = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            city: req.body.city,
            state: req.body.state,
            collegeName: req.body.collegeName,
            about: req.body.about,
            resume: req.file.filename,
            viewResume: `${process.env.HOSTED_SERVER}${correctedPath}`,
            internshipFor: req.body.internshipFor,
            taskForStudentLink: "Not yet submitted",
            isSelectedForInternship: false,
            isTaskSubmitted: false,
            driveLink: "Not yet submitted",
            linkedinLink: "Not yet submitted",
            githubLink: "Not yet submitted",
        }
        await userdata.create(userdataFromClientSide);
        sendMailToAdmin(userdataFromClientSide);
        res.status(200).send({ message: "Received data" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Invalid information" });
    }
})


// Admin Dashboard activity
app.post('/sendMailToSelectedStudent', async (req, res) => {
    try {
        await userdata.findOneAndUpdate({ _id: req.body.id }, { "$set": { isSelectedForInternship: true, taskForStudentLink: req.body.taskLink } })
        let studentInformation = await userdata.findOne({ _id: req.body.id });
        sendMailToSelectedStudent(studentInformation);
        res.status(200).json({ message: "updated" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
})

const deleteFile = async (filePath) => {
    try {
        await fs.unlink(`resume/${filePath}`);
    } catch (error) {
        console.log(error)
    }
}

app.delete("/rejectStudent", async (req, res) => {
    try {
        let studentToDelete = await userdata.findOne({ _id: req.body.id });
        await userdata.deleteOne({ _id: req.body.id });
        deleteFile(studentToDelete.resume);
        res.status(200).json({ message: "Deleted succefully" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
})


// Submit task
app.post("/checkStudentEnrollment", async (req, res) => {
    try {
        let student = await userdata.findOne({ _id: req.body.studentID });
        if (student === null) {
            res.status(404).json({ message: "Student is not Enrolled in any program" })
        } else if (student.isSelectedForInternship === false) {
            res.status(400).json({ message: "Student is not selected for Internship" });
        } else {
            res.status(200).json({ message: "Student is verified", email: student.email });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
})

//verify Admin to open dashboard
app.get("/getAdminPassword", async (req, res) => {
    // console.log("resquest for admin")
    res.status(200).json({ adminID: process.env.ADMIN_ID })
    // res.send("ok");
})

// give all students name
app.get('/getDataFromDatabase', async (req, res) => {
    let getData = await userdata.find({});
    res.json(getData);
})

// Task submission work will be handled here
app.post("/submitTask", async (req, res) => {
    try {
        await userdata.findOneAndUpdate({ _id: req.body.submissionID }, { "$set": { isTaskSubmitted: true, driveLink: req.body.driveLink, linkedinLink: req.body.linkedinLink, githubLink: req.body.githubLink } })
        res.status(200).json({ message: "Got it " });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server Error" });
    }
})
// Provide certification 
app.post("/sendCertificate", async (req, res) => {
    try {
        let student = await userdata.findOne({ _id: req.body.id });
        sendCertificate(student, req.body.certificateLink);
        res.status(200).json({ message: "Sent successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
})

app.post("/querryFromStudent", (req, res) => {
    try {
        sendQuerry(req.body);
        res.status(200).json({ message: "Sent successfully" });
    } catch (error) {
        console.log(error);
    }
})
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})