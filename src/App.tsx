import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import NotFoundPage from './pages/NotFoundPage';

const DegreesPage = lazy(() => import('./pages/DegreesPage'));
const DegreePage = lazy(() => import('./pages/DegreePage'));
const ComparePage = lazy(() => import('./pages/ComparePage'));
const QuizPage = lazy(() => import('./pages/QuizPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

export const routes = [
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'degrees', element: <DegreesPage /> },
          { path: 'degrees/:slug', element: <DegreePage /> },
          { path: 'compare', element: <ComparePage /> },
          { path: 'is-this-for-me', element: <QuizPage /> },
          { path: 'about', element: <AboutPage /> },
          { path: '*', element: <NotFoundPage /> },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export function App() {
  return <RouterProvider router={router} />;
}
