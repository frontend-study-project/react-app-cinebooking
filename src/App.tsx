import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getNowPlayingMovies, getPopularMovies, getUpcomingMovies } from "./utils/http";
import { setNowPlaying, setPopular, setUpcoming } from "./slices/movieSlice";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import ConfirmPage from "./pages/ConfirmPage";
import Header from "./components/Header/Header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      let data = await getNowPlayingMovies();
      dispatch(setNowPlaying(data.results));

      data = await getPopularMovies();
      dispatch(setPopular(data.results));

      data = await getUpcomingMovies();
      dispatch(setUpcoming(data.results));
    };
    fetchData();
  }, []);

  const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <Header />
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
