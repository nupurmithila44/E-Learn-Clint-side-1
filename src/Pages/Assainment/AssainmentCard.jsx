import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const AssainmentCard = ({ assignment, handleDelete}) => {
    const {user} = useContext(AuthContext)
    console.log(user)
    const {_id,mark,date,  description,photo,title,assign, }=assignment || {}
    return (
        <div className="card lg:w-96 w-[300px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body ">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <p className="text-bold text-sm text-green-500">Difficulty Level: {assign}</p>
            <div className="flex justify-between">
                <p className="font-bold">Date Posted : {new Date(date).toLocaleDateString()}</p>
                <p className="font-bold">Mark: {mark}</p>
            </div>
            <div className="card-actions">
                <Link to={`/view/${_id}`}><button  className="btn btn-success"> view </button></Link>
                <Link to={`/updateAssign/${_id}`}><button className="btn btn-success"> update </button></Link>
                <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-error">delete</button>
            </div>
        </div>
    </div>)
    
};

export default AssainmentCard;