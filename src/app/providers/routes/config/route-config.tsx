import { Link, Outlet, createBrowserRouter } from 'react-router-dom';
import { Main } from '@pages/main';
import { About } from '@pages/about';


export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="main">На главную</Link>
        <Link to="about">О сайте</Link>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: 'main',
        element: <Main />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);
