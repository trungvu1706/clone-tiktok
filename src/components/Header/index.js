import classNames from 'classnames/bind';

import React from 'react';
import styles from './Header.module.scss';

let cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('container')}>
        <h1>Header</h1>
      </div>
    </header>
  );
};

export default Header;
