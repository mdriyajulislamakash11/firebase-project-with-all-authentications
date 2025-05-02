
import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Root from "../layouts/Root";

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
    ]
  },
]);

export default routs;