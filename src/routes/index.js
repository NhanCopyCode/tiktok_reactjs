import config from '~/config';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Home/Upload';
import { HeaderOnly } from '~/layouts';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import Live from '~/pages/Live';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.nickname, component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
