import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Button from '~/components/Button';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Menu({ items, children }) {
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

    return (
        <Tippy
            offset={[8, 12]}
            placement="bottom-end"
            interactive
            delay={[0, 700]}
            render={(attrs) => (
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
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                console.log('On hide');
                setHistory((prev) => {
                    const arr = prev.slice(0, 1);
                    setMenuTitle(arr);

                    return arr;
                });
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
