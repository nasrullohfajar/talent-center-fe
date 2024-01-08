import { SecurableRoute } from '@astarx-studio/react-core/router';

import Landing from '../pages/client/Landing';
import Main from './client/Main';

const routes: SecurableRoute[] = [
  {
    index: true,
    element: <Landing />,
  },
  {
    path: '/home',
    element: <Main />,
  },
];

export default routes;
