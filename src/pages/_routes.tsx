import { Navigate, Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { SecurableRoute } from '@astarx-studio/react-core/router';

import Landing from '../pages/client/Landing';
import Home from '../pages/client/Home';

const routes: SecurableRoute[] = [
  {
    index: true,
    element: <Landing />,
  },
  {
    path: '/home',
    element: <Home />,
  },
];

export default routes;
