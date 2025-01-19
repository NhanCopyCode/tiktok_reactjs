import RouteConfig from '~/config/routes';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Home/Upload';
import { HeaderOnly } from '~/components/Layout';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';

const publicRoutes = [
    { path: RouteConfig.home, component: Home },
    { path: RouteConfig.following, component: Following },
    { path: RouteConfig.upload, component: Upload, layout: HeaderOnly },
    { path: RouteConfig.search, component: Search, layout: null },
    { path: RouteConfig.nickname, component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
