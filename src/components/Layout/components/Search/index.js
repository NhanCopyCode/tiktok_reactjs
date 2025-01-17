import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                const data = res.data;
                setLoading(false);
                setSearchResult(data);
            })
            .catch((err) => {
                setLoading(true);
            });
    }, [searchValue]);

    const handleClearSearchValue = () => {
        setSearchValue('');
        setSearchResult([]);

        inputRef.current.focus();
    };

    const handleShowResult = () => {
        setShowResult(false);
    };

    return (
        <>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                interactive={true}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((data) => {
                                return <AccountItem key={data.id} data={data} />;
                            })}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleShowResult}
            >
                <div className={cx('search_input')}>
                    <input
                        ref={inputRef}
                        placeholder="Search"
                        spellCheck={false}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={(e) => setShowResult(true)}
                    />
                    {searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClearSearchValue}>
                            {/* Clear */}
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <HeadlessTippy content="Tìm kiếm">
                        <button className={cx('search')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </HeadlessTippy>
                </div>
            </HeadlessTippy>
        </>
    );
}

export default Search;
