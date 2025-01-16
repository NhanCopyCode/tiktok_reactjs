import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faCircleQuestion,
    faCloudArrowUp,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faPlus,
    faRightFromBracket,
    faSearch,
    faSignIn,
    faSpinner,
    faUpload,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faMessage, faMoon, faUser } from '@fortawesome/free-regular-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper, Menu as MenuItems } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { NotificationBoxIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    let currentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faMoon} />,
            title: 'Dark mode',
        },
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Log out',
            seperate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo.default} alt="Logo image" />
                </div>
                <HeadlessTippy
                    visible={searchResult.length > 0}
                    interactive={true}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search_input')}>
                        <input placeholder="Search" spellCheck={false} />
                        <button className={cx('clear')}>
                            {/* Clear */}
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <HeadlessTippy content="Tìm kiếm">
                            <button className={cx('search')}>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </HeadlessTippy>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Inbox" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    {/* <FontAwesomeIcon icon={faCloudArrowUp} /> */}
                                    <NotificationBoxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <MenuItems items={currentUser ? userMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/6fb04d6191fe5c84e61af4dc8d527744~c5_100x100.jpeg?lk3s=30310797&nonce=48405&refresh_token=000a1a194f4fabd1f58d4728cb382b05&x-expires=1737075600&x-signature=9UBbRyZSGdccD2q%2Fe%2Bjy%2BEICVUk%3D&shp=30310797&shcp=-"
                                alt="User avatar"
                                // fallback="https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </MenuItems>
                </div>
            </div>
        </header>
    );
}

export default Header;
