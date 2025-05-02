
import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Root from "../layouts/Root";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

const routs = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/contact",
            element: <ContactUs />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        },
    ]
  },
]);

export default routs;