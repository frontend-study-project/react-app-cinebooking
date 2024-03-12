import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BookPage from '../pages/BookPage';
import LoginPage from '../pages/LoginPage';
import JoinPage from '../pages/JoinPage';
import ReserveListPage from '../pages/ReserveListPage';
import MovieDetailPage from '../pages/MovieDetailPage';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/join', element: <JoinPage /> },
      { path: '/booking', element: <BookPage /> },
      { path: '/reserve', element: <ReserveListPage /> },
      { path: '/movie-detail/:id', element: <MovieDetailPage /> },
    ],
  },
]);

export default router;
