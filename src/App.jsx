import Root from "./pages/Root";
import HomeScreen from "./pages/HomeScreen";
import About from "./pages/About";
import Technologies from "./pages/Technologies";
import Projects from "./pages/Projects";
import AcademicProjects from "./pages/AcademicProjects";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import AcademicProjectDetails from "./components/AcademicProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <HomeScreen /> },
      { path: "/sobre", element: <About /> },
      { path: "/tecnologias", element: <Technologies /> },
      {
        path: "/projetos",
        element: <Projects />,
      },
      { path: "/projetos/academicos", element: <AcademicProjects /> },
      {
        path: "/projetos/academicos/:semester",
        element: <AcademicProjectDetails />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
