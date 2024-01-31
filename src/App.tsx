import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getUpcomingMovies,
} from "./utils/http";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import ConfirmPage from "./pages/ConfirmPage";
import Header from "./components/Header/Header";

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/booking", element: <BookPage /> },
        { path: "/confirm", element: <ConfirmPage /> },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
