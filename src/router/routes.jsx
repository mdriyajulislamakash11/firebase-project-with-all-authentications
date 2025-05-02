import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Root from "../layouts/Root";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import PrivateRoute from "../Private/PrivateRoute";
import Profile from "../pages/Profile";

const routs = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routs;
