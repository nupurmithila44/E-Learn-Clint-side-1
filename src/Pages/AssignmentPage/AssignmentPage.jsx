
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import AssainmentCard from "../Assainment/AssainmentCard";


const AssignmentPage = () => {
    const assignmentPage = useLoaderData()
    const { user } = useContext(AuthContext)
    const [assignPage, setAssignPage] = useState(assignmentPage)
    console.log(assignmentPage)
    const handleDelete = _id => {
        if (!user) {
            return alert('sorry')
        }
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
                fetch(`https://e-learn-server-side.vercel.app/assignments/${_id}`, {
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
        <Tabs>
            <div className=' container px-6 py-10 mx-auto'>
               

                <h1 className="text-4xl font-bold text-center mt-10">Online Group-Study <br /> assignment</h1>
                
                <div className='flex items-center justify-center mt-5 text-2xl'>
                    
                    <TabList>
                        <Tab>Hard</Tab>
                        <Tab>Medium</Tab>
                        <Tab>Easy</Tab>
                    </TabList>
                </div>
                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {assignPage
                            .filter(j => j.assign === 'easy')
                            .map(assignment => (
                                <AssainmentCard key={assignment._id} assignment={assignment} handleDelete={handleDelete}></AssainmentCard>                             
                            ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {assignPage
                            .filter(j => j.assign === 'medium')
                            .map(assignment => (
                                <AssainmentCard key={assignment._id} assignment={assignment} handleDelete={handleDelete}></AssainmentCard>                             
                            ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {assignPage
                            .filter(j => j.assign === 'hard')
                            .map(assignment => (
                                <AssainmentCard key={assignment._id} assignment={assignment} handleDelete={handleDelete}></AssainmentCard>                             
                            ))}
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default AssignmentPage;