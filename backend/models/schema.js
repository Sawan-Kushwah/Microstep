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
    createdAt: { type: Date, default: Date.now() }
})

export const userdata = mongoose.model("userdata", userdataSchema)