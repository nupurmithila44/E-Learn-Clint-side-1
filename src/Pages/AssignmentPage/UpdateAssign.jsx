import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateAssign = () => {
    const assignLoad = useLoaderData();
   const {_id, assign,date,description,mark,photo,title} = assignLoad;

   const handleUpdate = event => {
    event.preventDefault()
    const form = event.target
    const date = form.date.value;
    const title = form.title.value;
    const description = form.description.value;
    const assign = form.assignDifficulty.value;
    const photo = form.photo.value;
    const mark = form.mark.value;
    const updateAssign = {date,title,description,assign,photo,mark}
    console.log(updateAssign)

//    send to the server
  fetch(`http://localhost:5000/assignments/${_id}`,{
    method: 'PUT',
    headers:{
        'content-type': 'application/json'
    },
    body:JSON.stringify(updateAssign)
  })
  .then(res => res.json())
  .then(data=>{
    console.log(data)
    if(data.modifiedCount > 0){
        Swal.fire({
            title: 'Success!',
            text: 'Assaingment update successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
  })
   
}

    return (
     
        <div className="lg:w-[700px] mx-auto mb-6 ">
            <div className="">
                <Link to='/assignPage'><button className=" rounded-md text-center">...Back </button></Link>
                <h1 className="text-4xl font-bold text-center text-[#ff724f]">Update Assignment</h1>
                <div className=" mr-24 p-20 bg-gray-200 w-[700px]  mx-auto mt-4 border-blue-600 " >
                    <form onSubmit={handleUpdate}>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl">Date:</span>
                            </label>
                            <input type="date" name="date" defaultValue={date} placeholder="date" className="input input-bordered w-[300px]" required />
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="text-xl">title:</span>
                            </label>
                            <input type="text" name="title" defaultValue={title} placeholder="enter title" className="input input-bordered w-full" id="" />
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="text-xl"> description :</span>
                            </label>
                            <input type="text" name="description" defaultValue={description} placeholder="enter description" className="input input-bordered w-full" id="" />
                        </div>
                        <div className=" border">
                            <div className="">
                                <label className="label">
                                    <span className="text-xl"> Assignment difficulty:</span>
                                </label>
                                <select name="assignDifficulty" defaultValue={assign} className=" w-full p-3 rounded-lg" id="">
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
                                <input type="photo" name="photo" defaultValue={photo} placeholder="enter Seasonality" className="input input-bordered w-full" id="" />
                            </div>
                            <div className="md:w-1/2 md:pl-4">
                                <label className="label">
                                    <span className="text-xl">Marks:</span>
                                </label>
                                <input type="text" name="mark" defaultValue={mark} placeholder="enter marks" className="input input-bordered w-full" id="" />
                            </div>
                        </div>
                        <div>
                            <input type="submit" value="update Assignment" className="btn btn-block bg-[#ff724f] text-2xl text-white font-semibold" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateAssign;