import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../Image';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to={`/@${encodeURIComponent(data.nickname)}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                </p>
                <span className={cx('user_name')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
