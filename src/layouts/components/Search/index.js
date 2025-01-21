import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';
import * as request from '~/utils/request';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const DEBOUNCE_TIME = 500;
    const debounce = useDebounce(searchValue, DEBOUNCE_TIME);
    const inputRef = useRef();
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);

        const fetchApi = async () => {
            try {
                const res = await request.get('users/search', {
                    params: {
                        q: debounce,
                        type: 'less',
                    },
                });

                setSearchResult(res.data);
                setLoading(false);
            } catch (error) {
                console.log('error: ', error);
                setLoading(true);
            }
        };

        fetchApi();
    }, [debounce]);

    const handleClearSearchValue = () => {
        setSearchValue('');
        setSearchResult([]);

        inputRef.current.focus();
    };

    const handleShowResult = () => {
        setShowResult(false);
    };

    const handleHiddenResult = () => {
        setShowResult(false);
    };

    const handleSearchValue = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <div>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                interactive={true}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((data) => {
                                return (
                                    <AccountItem key={data.id} data={data} handleHiddenResult={handleHiddenResult} />
                                );
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
                        onChange={handleSearchValue}
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
        </div>
    );
}

export default Search;
