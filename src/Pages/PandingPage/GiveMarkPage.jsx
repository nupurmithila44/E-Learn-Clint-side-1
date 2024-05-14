import { useLoaderData } from "react-router-dom";


const GiveMarkPage = () => {
   const update = useLoaderData();
   console.log(update)
    return (
        <div>
            <h1>giv mark</h1>
                  
                  
        <div className="my-5 w-[500px] mx-auto">
            <h1 className="text-3xl font-bold text-center">Give Mark here</h1>
            <p>Pdf Link : <span></span></p>
            <p>Notes : <span></span></p>
            <p>Give Mark : <span></span></p>
            <form  className="space-y-3">
                <div>
                    <input type="text" name="GiveMark" placeholder="Give mark" className="w-full p-3 border-2" />
                </div>
                <div>
                    <label htmlFor="">Write Feedback</label>
                    <textarea className="w-full p-3 border-2" name="feedback" rows="5" cols="50" id=""></textarea>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
        </div>
    );
};

export default GiveMarkPage;