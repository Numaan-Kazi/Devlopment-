import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./pages/AppLayout";
import { LoginPage } from "./pages/LoginPage";
import { Landing } from "./pages/user/Landing";
import { CompetencyPage } from "./pages/user/Competency-Page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <LoginPage /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/Landing", element: <Landing /> },
        { path: "/Competency", element: <CompetencyPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
