import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Categories from '../Components/Categories/Categories'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/Signup/Signup'
import RoomDetails from '../Pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children:[
      {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/room/:id',
      element:<PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>
    }
  ]
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/signup',
    element:<SignUp></SignUp>
  },
  {
    path:'/dashboard',
    element:<DashboardLayout></DashboardLayout>,
    children:[{
      
    }]
  }
])
