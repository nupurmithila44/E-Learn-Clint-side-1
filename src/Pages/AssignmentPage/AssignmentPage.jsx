import { set } from "firebase/database";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const AssignmentPage = () => {
    const assignmentPage = useLoaderData()
    const [assignPage, setAssignPage]= useState(assignmentPage)
    console.log(assignmentPage)
    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('delete confirmd')
                fetch(`http://localhost:5000/assignments/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                           const remaining = assignPage.filter(assign => assign._id !== _id)
                           setAssignPage(remaining)
                          
                        }
                    })
            }
        });
    }
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-10">Online Group-Study <br /> assignment</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-3'>
                {
                    assignPage.map(assignment => <div key={assignment._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={assignment.photo} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title">{assignment.title}</h2>
                            <p>{assignment.description}</p>
                            <p className="text-bold text-sm text-green-500">Difficulty Level: {assignment.assign}</p>
                            <div className="flex justify-between">
                                <p className="font-bold">Date Posted : {assignment.date}</p>
                                <p className="font-bold">Mark: {assignment.mark}</p>
                            </div>
                            <div className="card-actions">
                                <button className="btn btn-success"> view </button>
                                <button className="btn btn-success"> update </button>
                                <button
                                    onClick={() => handleDelete(assignment._id)}
                                    className="btn btn-error">delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AssignmentPage;