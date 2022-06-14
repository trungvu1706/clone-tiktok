import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Popup.module.scss';

const cx = classNames.bind(styles);

const Popup = ({ children }) => {
  return <div className={cx('pop-up-wrapper')}>{children}</div>;
};

Popup.propTypes = {
  children: PropTypes.node,
};

export default Popup;
