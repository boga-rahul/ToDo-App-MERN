import "../styles/App.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateToDoPage from "./CreateToDoPage.tsx";
import HomePage from "./HomePage.tsx";
import ProfilePage from "./ProfilePage.tsx";
import RegistrationPage from "./RegistrationPage.tsx";

const router = createBrowserRouter([
  {
    path: "/createTodo",
    element: <CreateToDoPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/",
    element: <RegistrationPage />,
  },
]);

function App() {
  return (
    <>
      <div className="container">
        <div className="card">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App;
