import classNames from 'classnames/bind';

import React from 'react';
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);

const SideBar = () => {
  return <aside className={cx('wrapper')}>SideBar</aside>;
};

export default SideBar;
