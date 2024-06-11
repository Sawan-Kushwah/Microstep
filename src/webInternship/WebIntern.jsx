import AdvanceDevelopment from "./AdvanceDevelopment"
import BasicDevelopment from "./BasicDevelopment"
import IntermediateDevelopment from "./IntermediateDevelopment"



const WebIntern = () => {

    return (
        <>

            <section id="webIntern" className="  text-white min-h-[100vh]">
                <div className="heading text-center text-3xl pt-20 ">
                    <div className="mb-4 font-bold">
                        <h1>INTERNSHIPS</h1>
                    </div>
                    <div className="text text-[3rem]">
                        BECOME SKILLED AT WHAT MATTER&apos;S
                    </div>
                </div>
                <div className="coursesContainer">
                    {/* web development */}
                    <BasicDevelopment />
                    <IntermediateDevelopment />
                    <AdvanceDevelopment />
                </div>
            </section>

        </>
    )
}

export default WebIntern