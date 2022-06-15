import { SearchIcon } from '@heroicons/react/outline';
import classNames from 'classnames/bind';

import React, { useState } from 'react';
import styles from './SearchBar.module.scss';
import SearchBarPopup from '../SearchBarPopup';
import Popup from '~/components/Popup';

const cx = classNames.bind(styles);

const SearchBar = () => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Popup
      visible={value.length > 0}
      content={<SearchBarPopup />}
      className={cx('pop-up-min-width')}
    >
      <div className={cx('input-wrapper')}>
        <input
          value={value}
          onChange={onChange}
          className={cx('input-inner')}
          placeholder="Search account and video"
        />
        <span className={cx('search-border')}></span>
        <button className={cx('search-btn')}>
          <SearchIcon width={24} height={24} />
        </button>
      </div>
    </Popup>
  );
};

export default SearchBar;
