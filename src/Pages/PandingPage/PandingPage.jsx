import { useContext, useState} from "react";
import {  Link, useLoaderData} from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import 'react-responsive-modal/styles.css';
import Modal from "react-responsive-modal";


const PandingPage = () => {
    const pendingLoadar = useLoaderData()
    console.log(pendingLoadar)
    const {user}=useContext(AuthContext)
    console.log(user)
   
    

    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false); 




    return (

        <div className="" >
            <h1 className=" text-4xl font-extrabold text-center py-4"> All Pending Assignments</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-3 ">
            {
                pendingLoadar.map(pendingLo=>  <div key={pendingLo._id} className="card-body bg-slate-50">
                <h2 className="card-title">{pendingLo.assignTitle}</h2>
                <p>Full Mark <span>{pendingLo.assignment_mark}</span></p>
                <p>Examiner Name: <span>{user?.displayName}</span></p>
                <div>
             <Link  ><button onClick={onOpenModal} className="btn bg-[#ff724f]">Give Mark</button></Link>
            <Modal open={open} onClose={onCloseModal} center>
        <div className="my-5 w-[500px]">
            <h1 className="text-3xl font-bold text-center">Give Mark here</h1>
            <p>Pdf Link : <span>{pendingLo.pdf}</span></p>
            <p>Notes : <span>{pendingLo.note}</span></p>
            <p>Give Mark : <span>{pendingLo.assignment_mark}</span></p>
            <form  className="space-y-3">
                <div>
                    <input type="text" name="giveMark" defaultValue={pendingLo.obtained_marks} placeholder="Give mark" className="w-full p-3 border-2" />
                </div>
                <div>
                    <label htmlFor="">Write Feedback</label>
                    <textarea className="w-full p-3 border-2" name="feedback" rows="5" cols="50" id=""></textarea>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    </Modal>
        </div>
              </div>)
            }
       
      </div>
        </div>
    );
};

export default PandingPage;