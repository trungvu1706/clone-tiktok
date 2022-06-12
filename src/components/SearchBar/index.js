import { SearchIcon } from '@heroicons/react/solid';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import React, { useState } from 'react';
import styles from './SearchBar.module.scss';
import Popup from '../Popup';

const cx = classNames.bind(styles);

const SearchBar = () => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Tippy
      visible={value.length > 0}
      render={(attrs) => (
        <div className={cx('search-pop-up-wrapper')} tabIndex="-1" {...attrs}>
          <Popup />
        </div>
      )}
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
    </Tippy>
  );
};

export default SearchBar;
