import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import SingleProduct from "./pages/home/SingleProduct";
import Cart from "./pages/home/Cart";


// eslint-disable-next-line no-unused-vars
const Layout = ()=>{
  return(
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/shop/:id",
        element:<SingleProduct />
      },
      {
        path:"/cart",
        element:<Cart />
      }
    ]
  }
])
function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}
export default App
