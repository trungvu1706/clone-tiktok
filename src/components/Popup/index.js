import classNames from 'classnames/bind';

import styles from './Popup.module.scss';

const cx = classNames.bind(styles);

const Popup = () => {
  return (
    <div className={cx('pop-up-wrapper')}>
      <div className={cx('pop-up-title')}>Account</div>
      <div className={cx('pop-up-content')}>
        <span className={cx('pop-up-avatar')}>
          <img alt="avatar" />
        </span>

        <div className={cx('pop-up-details')}>
          <h4 className={cx('pop-up-description__title')}>user name</h4>
          <p className={cx('pop-up-details__description')}>description</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
