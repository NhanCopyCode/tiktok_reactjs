import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { FollowingIcon, FollowingIconActive, HomeIcon, HomeIconActive, LiveIcon, LiveIconActive } from '~/components/Icons';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For you"
                    to={config.routes.home}
                    icon={<HomeIcon width="3.2rem" height="3.2rem" />}
                    activeIcon={<HomeIconActive width="3.2rem" height="3.2rem" />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowingIcon width="3.2rem" height="3.2rem" />}
                    activeIcon={<FollowingIconActive width="3.2rem" height="3.2rem" />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon width="3.2rem" height="3.2rem" />}
                    activeIcon={<LiveIconActive width="3.2rem" height="3.2rem" />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
