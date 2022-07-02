import React from 'react';
import Header from '~/components/Header';
import classNames from 'classnames/bind';
import styles from './HeaderOnly.module.scss';

const cx = classNames.bind(styles);

const HeaderOnly = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default HeaderOnly;
