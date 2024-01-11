import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import ConfirmPage from "./pages/ConfirmPage";
import Header from "./components/Header/Header";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/booking', element: <BookPage /> },
        { path: '/confirm', element: <ConfirmPage /> },
      ],
    },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  )
}

export default App
