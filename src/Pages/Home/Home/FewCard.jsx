

const FewCard = () => {

    return (
        <div className="my-10 ">
            <h1 className="text-3xl font-bold text-center lg:py-10 mb-7">Our comprehensive online study platform</h1>
            <div className=" grid lg:grid-cols-3 grid-cols-1 gap-5 mx-5">
                <div className="lg:w-[400px] w-[300px] mx-auto border-2 p-3 space-y-3">
                    <h2 className="text-center font-semibold text-base">Use online learning</h2>
                    <p className="text-center">Here’s an example of the use of “why” instead of offering a yes/no question. People will wonder what online learning </p>
                    <button className="btn bg-[#ff724f] w-full">Click Me</button>
                </div>

                <div className="lg:w-[400px] w-[300px] mx-auto border-2 p-3 space-y-3">
                    <h2 className="text-center font-semibold text-base">Use online learning</h2>
                    <p className="text-center">Here’s an example of the use of “why” instead of offering a yes/no question. People will wonder what online learning </p>
                    <button className="btn bg-[#ff724f] w-full">Click Me</button>
                </div>

                <div className="lg:w-[400px] w-[300px] mx-auto border-2 p-3 space-y-3">
                    <h2 className="text-center font-semibold text-base">Use online learning</h2>
                    <p className="text-center">Here’s an example of the use of “why” instead of offering a yes/no question. People will wonder what online learning </p>
                    <button className="btn bg-[#ff724f] w-full">Click Me</button>
                </div>
            </div>
        </div>
    );
};

export default FewCard;