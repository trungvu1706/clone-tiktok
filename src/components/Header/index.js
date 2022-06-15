import classNames from 'classnames/bind';
import { PlusSmIcon } from '@heroicons/react/solid';

import React from 'react';
import styles from './Header.module.scss';
import images from '~/assets/images';
import SearchBar from './components/SearchBar';
import Button from '../Button';

let cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('container')}>
        <img src={images.logo} alt="logo" />
        <div className={cx('search-bar')}>
          <SearchBar />
        </div>
        <div className={cx('btn-group')}>
          <Button variant="outlined" startIcon={<PlusSmIcon />}>
            Upload
          </Button>
          <Button color="primary">Login</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
