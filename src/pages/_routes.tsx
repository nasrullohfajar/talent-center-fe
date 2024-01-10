import { SecurableRoute } from '@astarx-studio/react-core/router';

import Landing from '../pages/client/Landing';
import Main from './client/Main';
import DetailTalent from './client/DetailTalent';

const routes: SecurableRoute[] = [
  {
    index: true,
    element: <Landing />,
  },
  {
    path: '/talent',
    element: <Main />,
  },

  {
    path: '/talent/detail',
    element: <DetailTalent />,
  },
];

export default routes;
