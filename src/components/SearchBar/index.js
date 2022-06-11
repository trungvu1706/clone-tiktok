import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

      <div>
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
