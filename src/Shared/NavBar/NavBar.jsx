import { useContext } from "react";
import { BsBookHalf } from "react-icons/bs";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const NavBar = () => {
  const {user} = useContext(AuthContext);
  console.log(user)

    return (
      <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
      <div className='flex-1'>
        <div className='flex gap-2 items-center'>
          <BsBookHalf></BsBookHalf>
          <span className='font-bold'>E-<span className="text-[#ff724f] font-bold">Learn</span></span>
        </div>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>

        x b<div className='dropdown dropdown-end z-50'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            <div className='w-10 rounded-full' title=''>
              <img
                referrerPolicy='no-referrer'
                alt='User Profile Photo'
                src=''
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <div className='justify-between'>Add Job</div>
            </li>
            <li>
              <div>My Assignment</div>
            </li>
            <li className='mt-2'>
              <button className='bg-gray-200 block text-center'>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    );
};

export default NavBar;