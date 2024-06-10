import mongoose from "mongoose"

const userdataSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    email: String,
    city: String,
    state: String,
    collegeName: String,
    about: String,
    resume: String,
    viewResume: String,
    internshipFor: String,
    isSelectedForInternship: Boolean,
    taskForStudentLink: String,
    isTaskSubmitted: Boolean,
    driveLink: String,
    linkedinLink: String,
    githubLink: String,
    createdAt: { type: Date, default: new Date() }
})

export const userdata = mongoose.model("userdata", userdataSchema)