import classNames from 'classnames/bind';

import React from 'react';
import styles from './Header.module.scss';
import images from '~/assets/images';
import SearchBar from './components/SearchBar';

let cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('container')}>
        <img src={images.logo} alt="logo" />
        <div className={cx('search-bar')}>
          <SearchBar />
        </div>
        <div className={cx('icon-container')}></div>
      </div>
    </header>
  );
};

export default Header;
