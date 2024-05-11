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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        element: <CreateAssign></CreateAssign>
      },
      {
        path: '/assignPage',
        element: <AssignmentPage></AssignmentPage>,
        loader: () => fetch('http://localhost:5000/assignments')
      }
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
