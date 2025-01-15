import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/34e8748c783973cb6a47d0a0dcf3cb6a.jpeg?lk3s=a5d48078&nonce=56007&refresh_token=5d60aac0d60f19389b2674f570564039&x-expires=1736996400&x-signature=6Ja3tVrFxrsFpDPo6XRihBz8r%2Bg%3D&shp=a5d48078&shcp=b59d6b55"
                alt="hoaa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </p>
                <span className={cx('user_name')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
