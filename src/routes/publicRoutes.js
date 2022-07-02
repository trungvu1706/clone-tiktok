import { HeaderOnly } from '~/components';
// routes
import { HOME_PAGE, PROFILE_PAGE, UPLOAD_PAGE } from './routes';

// pages
import { HomePage, Profile, Upload } from '~/pages';

const publicRoutes = [
  {
    path: HOME_PAGE,
    component: HomePage,
  },
  {
    path: PROFILE_PAGE,
    component: Profile,
  },
  {
    path: UPLOAD_PAGE,
    component: Upload,
    layout: HeaderOnly,
  },
];

export default publicRoutes;
