import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BookPage from "../pages/BookPage";
import LoginPage from "../pages/LoginPage";
import JoinPage from "../pages/JoinPage";
import ConfirmPage from "../pages/ConfirmPage";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/join", element: <JoinPage /> },
      { path: "/booking", element: <BookPage /> },
      { path: "/confirm", element: <ConfirmPage /> },
    ],
  },
]);

export default router;
