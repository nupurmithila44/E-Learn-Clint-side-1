import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CreateAssign = () => {
    const handleAddTourism = event => {
        event.preventDefault()
        const form = event.target
        const date = form.date.value;
        const title = form.title.value;
        const description = form.description.value;
        const assign = form.assignDifficulty.value;
        const photo = form.photo.value;
        const mark = form.mark.value;
        const createAssign = {date,title,description,assign,photo,mark}
        console.log(createAssign)

    //    send to the server
      fetch('http://localhost:5000/assignments',{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(createAssign)
      })
      .then(res => res.json())
      .then(data=>{
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'user add successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
      })
       
    }
    return (
       <div className="w-[500px] mx-auto mb-6"> 
         <div className="">
            <Link to='/'><button className=" rounded-md text-center">...Back </button></Link>
           <h1 className="text-2xl font-bold">Create Assignment</h1>
            <div className=" mr-24 p-20 bg-gray-200 w-[700px]  mx-auto mt-4 border-blue-600 " >   
                <form onSubmit={handleAddTourism} >
                <div className="form-control">
                            <label className="label">
                                <span className="text-xl">Date:</span>
                            </label>
                            <input type="date" name="date" placeholder="date" className="input input-bordered w-[300px]" required />
                        </div>
                    <div className="">
                            <label className="label">
                                <span className="text-xl">title:</span>
                            </label>
                            <input type="text" name="title"  placeholder="enter title" className="input input-bordered w-full" id="" />
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="text-xl"> description :</span>
                            </label>
                            <input type="text" name="description" placeholder="enter description" className="input input-bordered w-full" id="" />
                        </div>
                        <div className=" border">
                        <div className="">
                            <label className="label">
                                <span className="text-xl"> Assignment difficulty:</span>
                            </label>
                            <select name="assignDifficulty" className=" w-full p-3 rounded-lg" id="">
                                <option value="easy">easy</option>
                                <option value="medium">medium</option>
                                <option value="hard">hard</option>
                            </select>
                        </div>
                   
                    </div>
                    {/* img mark  */}
                    <div className=" md:flex border mb-12">
                        <div className="md:w-1/2">
                            <label className="label">
                                <span className="text-xl">Image Url :</span>
                            </label>
                            <input type="photo" name="photo" placeholder="enter Seasonality" className="input input-bordered w-full" id="" />
                        </div>
                        <div className="md:w-1/2 md:pl-4">
                            <label className="label">
                                <span className="text-xl">Marks:</span>
                            </label>
                            <input type="text" name="mark" placeholder="enter marks" className="input input-bordered w-full" id="" />
                        </div>
                    </div>
                    <div>
                        <input type="submit" value="Create Assignment" className="btn btn-block bg-[#ff724f] text-2xl text-white font-semibold" />
                    </div>
                </form>
            </div>
        </div>
       </div>
    );
};

export default CreateAssign;