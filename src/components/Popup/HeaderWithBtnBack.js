import { ChevronLeftIcon } from '@heroicons/react/outline';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import React from 'react';
import styles from './Popup.module.scss';

const cx = classNames.bind(styles);

const HeaderWithBtnBack = ({ onBack = () => {}, headerWithBtnBackTitle }) => {
  return (
    <header className={cx('header-wrapper')}>
      <button className={cx('btn-back')} onClick={onBack}>
        <ChevronLeftIcon />
      </button>
      <p className={cx('header-title')}>{headerWithBtnBackTitle}</p>
    </header>
  );
};

HeaderWithBtnBack.propTypes = {
  onBack: PropTypes.func,
  headerWithBtnBackTitle: PropTypes.string,
};

export default HeaderWithBtnBack;
