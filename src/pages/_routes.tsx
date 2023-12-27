import { Navigate, Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { SecurableRoute } from '@astarx-studio/react-core/router';

import Landing from '../pages/client/Landing';

const routes: SecurableRoute[] = [
  {
    index: true,
    element: <Navigate to="/register" />,
  },
  {
    path: '/register',
    element: <Landing />,
  },
];

export default routes;
