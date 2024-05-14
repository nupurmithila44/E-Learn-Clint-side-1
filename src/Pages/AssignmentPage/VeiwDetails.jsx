import { Link, useLoaderData, useParams } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const VeiwDetails = () => {
    const viewLoader = useLoaderData()
    const { user } = useContext(AuthContext)
    console.log(viewLoader)
    const { id } = useParams()
    const details = viewLoader.find(view => view._id == id)
    console.log(details)
    const { _id, assign, date, description, mark, photo, title } = details;
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const handleModal = (e) => {
        e.preventDefault();
        const form = e.target;
        const pdf = form.pdf.value;
        const note = form.note.value;
        const userEmail = user.email;

        const assignments = {
            assignTitle: title,
            assignment_mark: mark,
            pdf,
            note,
            userEmail,
            obtained_marks: 'pending',
            status: 'pending',
            feedback: 'pending'


        }
        // console.log(assignment);
        fetch('http://localhost:5000/data', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(assignments)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('checkOut success fully')
                }
            })
    }




    return (
        <div className="my-10">
            <div className="flex lg:flex-row flex-col justify-between items-center gap-5 border-2 lg:w-[1140px] md:w-[600px] w-[350px] mx-auto">
                <div className=" w-[500px] p-3">
                    <img src={photo} alt="" />
                </div>
                <div className=" w-[500px] p-3 space-y-3">
                    <h2><span className="text-xl font-semibold">Learning Assignment :</span>{title} </h2>
                    <h2><span className="text-xl font-semibold"> assignment description:</span> {description}</h2>
                    <h2><span className="text-xl font-semibold">Total_mark:</span> ${mark}</h2>
                    <h2><span className="text-xl font-semibold">Assignment difficulty :</span> {assign}</h2>
                    <h2><span className="text-xl font-semibold">Date:</span> {date}</h2>
                    <div>
                        <Link ><button onClick={onOpenModal} className="btn btn-success"> Assainment view</button></Link>
                        <Modal open={open} onClose={onCloseModal} center>
                            <div className="my-5 w-[500px]">
                                <form onSubmit={handleModal} className="space-y-3">
                                    <div>
                                        <label htmlFor="">PDF Link</label>
                                        <input type="text" name="pdf" placeholder="PDF Link" className="w-full p-3 border-2" />
                                    </div>
                                    <div>
                                        <label htmlFor="">Note</label>
                                        <textarea className="w-full p-3 border-2" name="note" rows="5" cols="50" id=""></textarea>
                                    </div>
                                    <button className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VeiwDetails;