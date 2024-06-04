import { userdata } from "./models/schema.js"
import sendMailTo from "./sendMail.js"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import express from "express"
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
            internshipFor: req.body.internshipFor
        }
        await userdata.create(userdataFromClientSide);
        sendMailTo(userdataFromClientSide);
        res.status(200).send({ message: "Received data" })
    } catch (error) {
        console.log(error)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})