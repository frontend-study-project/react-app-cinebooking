import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BookPage from "../pages/BookPage";
import ConfirmPage from "../pages/ConfirmPage";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/booking", element: <BookPage /> },
      { path: "/confirm", element: <ConfirmPage /> },
    ],
  },
]);

export default router;
