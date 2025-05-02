import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routs from "./router/routes.jsx";
import AuthProvider from "./Auth/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={routs}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
