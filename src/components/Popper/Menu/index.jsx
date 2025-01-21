import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Menu({ items, hideOnClick, children }) {
    const [history, setHistory] = useState([{ data: items }]);
    const [headerMenuTitle, setHeaderMenuTitle] = useState('');
    const current = history[history.length - 1];

    const setMenuTitle = (arr) => {
        if (arr[arr.length - 1]?.title) {
            setHeaderMenuTitle(arr[arr.length - 1]?.title);
        } else {
            setHeaderMenuTitle('');
        }
    };
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                            item.children?.title !== null
                                ? setHeaderMenuTitle(item.children.title)
                                : setHeaderMenuTitle('');
                        }
                    }}
                />
            );
        });
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {headerMenuTitle !== '' ? (
                    <Header
                        title={headerMenuTitle}
                        onBack={() => {
                            setHistory((prev) => {
                                const arr = prev.slice(0, -1);
                                setMenuTitle(arr);
                                return arr;
                            });
                        }}
                    />
                ) : null}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    const HandleResetMenuWhenHide = () => {
        setHistory((prev) => {
            const arr = prev.slice(0, 1);
            setMenuTitle(arr);

            return arr;
        });
    };
    return (
        <Tippy
            offset={[8, 12]}
            placement="bottom-end"
            interactive
            hideOnClick={hideOnClick}
            delay={[0, 700]}
            render={renderResult}
            onHide={HandleResetMenuWhenHide}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
};

export default Menu;
