import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import React from 'react';
import Image from '~/components/Image';
import styles from './SearchBarPopup.module.scss';

const cx = classNames.bind(styles);

const SearchBarPopup = ({ dataList = [] }) => {
  return (
    <div className={cx('SB-pop-up-wrapper')}>
      <div className={cx('SB-pop-up-title')}>Accounts</div>
      {dataList.map((data) => (
        <Link
          to={`/@${data.nickname}`}
          className={cx('SB-pop-up-content')}
          key={data.id}
        >
          <span className={cx('SB-pop-up-avatar')}>
            <Image src={data.avatar} alt="avatar" />
          </span>

          <div className={cx('SB-pop-up-details')}>
            <h4 className={cx('SB-pop-up-description__title')}>
              {data.full_name}
            </h4>
            <p className={cx('SB-pop-up-details__description')}>
              {data.nickname}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

SearchBarPopup.propTypes = {
  dataList: PropTypes.array.isRequired,
};

export default SearchBarPopup;
