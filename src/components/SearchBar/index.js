import { SearchIcon } from '@heroicons/react/solid';
import classNames from 'classnames/bind';

import React from 'react';
import styles from './SearchBar.module.scss';

const cx = classNames.bind(styles);

const SearchBar = () => {
  return (
    <div className={cx('input-wrapper')}>
      <input
        className={cx('input-inner')}
        placeholder="Search account and video"
      />

      <span className={cx('border')}></span>

      <button className={cx('search-btn')}>
        <SearchIcon width={24} height={24} />
      </button>
    </div>
  );
};

export default SearchBar;
