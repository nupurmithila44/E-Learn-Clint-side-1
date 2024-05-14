import { useContext, useEffect, useState } from "react";
import { BsBookHalf } from "react-icons/bs";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, settheme] = useState('light')

  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localtheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localtheme)
  }, [theme])


  const handletoggle = e => {
    if (e.target.checked) {
      settheme('synthwave')
    }
    else {
      settheme('light')
    }
  }
  console.log(user)
  const handleLogOut = () => {
    logOut()
      .then()
      .catch()
  }

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
            <Link to='/CreateAssign'>Create Assignment</Link>
          </li>
          <li>
            <Link to='/assignPage'>Assignment page</Link>
          </li>
          <li>
            <Link to='/pendingPage'>Pending Assignments</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
        </ul>
        {
          user?.email ? <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div className='w-10 rounded-full' title=''>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
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
              <li><Link to='/mySubmitted'>My Submitted</Link></li>
              <li className='mt-2'>
                <button onClick={handleLogOut} className='bg-gray-200 block text-center'>Logout</button>
              </li>
            </ul>
          </div> :
            <ul>
              <li>
                <Link to='/login'>Login</Link>
              </li>

            </ul>
        }
      </div>
      {/* theme  */}
      <label className="cursor-pointer grid place-items-center">
        <input onChange={handletoggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      </label>
    </div>
  );
};

export default NavBar;