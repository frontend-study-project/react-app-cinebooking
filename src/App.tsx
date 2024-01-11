import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./components/pages/Home";
import Booking from "./components/pages/Booking";
import Print from "./components/pages/Print";
import './App.css'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        { path: '/', element: <Home /> },
        { path: '/booking', element: <Booking /> },
        { path: '/print', element: <Print /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
