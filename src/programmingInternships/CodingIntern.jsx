import C from "./C"
import Cpp from "./Cpp"
import Java from "./Java"



const CodingIntern = () => {

    return (
        <>

            <section id="condingIntern" className="bg-black text-white min-h-[100vh]">
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
                    <C />
                    <Cpp />
                    <Java />
                </div>
            </section>

        </>
    )
}

export default CodingIntern