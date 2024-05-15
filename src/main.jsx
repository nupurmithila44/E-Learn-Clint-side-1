import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import AuthProvider from './Provider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { ToastContainer} from 'react-toastify';
import CreateAssign from './Pages/CreateAssign/CreateAssign';
import AssignmentPage from './Pages/AssignmentPage/AssignmentPage';
import UpdateAssign from './Pages/AssignmentPage/UpdateAssign';
import VeiwDetails from './Pages/AssignmentPage/VeiwDetails';
import SubmissionFrom from './Pages/AssignmentPage/SubmissionFrom';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import PandingPage from './Pages/PandingPage/PandingPage';
import ErrorPage from './Pages/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/CreateAssign',
        element: <PrivateRoutes>
          <CreateAssign></CreateAssign>
        </PrivateRoutes>
      },
      {
        path: '/assignPage',
        element: <AssignmentPage></AssignmentPage>,
        loader: () => fetch('https://e-learn-server-side.vercel.app/assignments')
      },
      {
        path:'/updateAssign/:id',
        element: <UpdateAssign></UpdateAssign>,
        loader:({params}) => fetch(`https://e-learn-server-side.vercel.app/assignments/${params.id}`)
        
      },
      {
        path: '/view/:id',
        element:<VeiwDetails></VeiwDetails>,
        loader: () => fetch('https://e-learn-server-side.vercel.app/assignments')
      },
      {
        path: '/mySubmitted',
        element: <PrivateRoutes>
          <SubmissionFrom></SubmissionFrom>
        </PrivateRoutes>
      },
      {
        path: '/pendingPage',
        element: <PandingPage></PandingPage>,
        loader: () => fetch('https://e-learn-server-side.vercel.app/data')
      },
    
      // {
      //   path: '/giveMark/:id',
      //   element:<GiveMarkPage></GiveMarkPage>,
      //   loader: ({params}) => fetch(`https://e-learn-server-side.vercel.app/data/${params.id}`)
       
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <ToastContainer></ToastContainer>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
