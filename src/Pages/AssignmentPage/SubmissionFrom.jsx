import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const SubmissionFrom = () => {
  const {user}= useContext(AuthContext)
const [mysubmit, setMysubmit]=useState([])

  const url = `https://e-learn-server-side.vercel.app/data?userEmail=${user?.email}`;
  useEffect(() =>{
    fetch(url, {credentials: "include"})
    .then(res=> res.json())
    .then(data=> setMysubmit(data))
  },[])
  console.log(mysubmit)

    return (   
       <div className="mb-10">
        <h1 className="text-2xl text-center my-5 font-bold">My Submitted Page</h1>
         <div className="overflow-x-auto mt-16 border-2  rounded-lg border-[#032f40]">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl font-semibold text-white bg-[#032f40]">
              <th></th>
              <th>Title</th>
              <th>Marks</th>
              <th>Obtained marks</th>
              <th>Status</th>
              <th>Feedback</th>
            </tr>
          </thead>
          
          <tbody >
          {
            mysubmit.map(mysub =>  <tr key={mysub._id}>
              <th>1</th>
              <td>{mysub.assignTitle}</td>
              <td>{mysub.assignment_mark}</td>
              <td>{mysub.obtained_marks}</td>
              <td>{mysub.status}</td>
              <td><button>feedback</button></td>
            </tr>     )  
          }        
            </tbody> 
        
        </table>
      </div>
       </div>
    );
};

export default SubmissionFrom;