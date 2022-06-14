import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import React from 'react';
import Popup from '~/components/Popup';
import images from '~/assets/images';
import styles from './SearchBarPopup.module.scss';

const cx = classNames.bind(styles);

const SearchBarPopup = ({ avatar, userName, description }) => {
  return (
    <Popup>
      <div className={cx('SB-pop-up-title')}>Accounts</div>
      <div className={cx('SB-pop-up-content')}>
        <span className={cx('SB-pop-up-avatar')}>
          <img src={avatar || images.defaultAvatar} alt="avatar" />
        </span>

        <div className={cx('SB-pop-up-details')}>
          <h4 className={cx('SB-pop-up-description__title')}>
            {userName || 'userName'}
          </h4>
          <p className={cx('SB-pop-up-details__description')}>
            {description || 'description'}
          </p>
        </div>
      </div>
    </Popup>
  );
};

SearchBarPopup.propTypes = {
  avatar: PropTypes.string,
  userName: PropTypes.string,
  description: PropTypes.string,
};

export default SearchBarPopup;
