import { HeaderOnly } from '~/components';

// pages
import { HomePage, Profile, Upload } from '~/pages';

const publicRoutes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly,
  },
];

// const privateRoutes = [];

export { publicRoutes };
