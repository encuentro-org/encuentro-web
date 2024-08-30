import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// APP COMPONENT
import App from "./App.tsx";

// COMPONENT
import Nosotros from "./components/Nosotros.tsx";
import Novedades from "./components/Novedades.tsx";
import Actividades from "./components/Actividades.tsx";
import Contacto from "./components/Contacto.tsx";
import Donar from "./components/Donar.tsx";

// STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";

// REACT ROUTER DOM
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Oops!</div>,
  },
  {
    path: "/inicio",
    element: <App />,
    errorElement: <div>Oops!</div>,
  },
  {
    path: "/novedades",
    element: <Novedades />,
  },
  {
    path: "/nosotros",
    element: <Nosotros />,
  },
  {
    path: "/actividades",
    element: <Actividades />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
  {
    path: "/donar",
    element: <Donar />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
