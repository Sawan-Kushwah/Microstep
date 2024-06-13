import { useEffect } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Drive from "../submissionProcess/Drive"
import Github from "../submissionProcess/Github"
import Linkedin from "../submissionProcess/Linkedin"
import NoteForSubmission from "../submissionProcess/NoteForSubmission"

const HowToSubmitCode = () => {
    useEffect(() => {
        window.scrollTo(0, 0) // this is render page from the top
    }, [])
    return (
        <>
            <Navbar />
            <section className="text-gray-400 bg-gray-900 body-font relative">
                <div className="container px-5 py-32 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="  text-5xl title-font mb-4 text-white font-bold">Submitting Your Work: Showcase Your Skills!</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxe text-xl">We offer multiple ways to submit your work for evaluation, ensuring flexibility and catering to your preferences.
                            Here are your options : </p>

                    </div>
                    <Linkedin />
                    <Github />
                    <Drive />
                    <NoteForSubmission />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default HowToSubmitCode