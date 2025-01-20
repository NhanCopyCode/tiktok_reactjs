import config from '~/config';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Home/Upload';
import { HeaderOnly } from '~/components/layouts';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.nickname, component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
