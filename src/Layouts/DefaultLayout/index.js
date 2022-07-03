import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import SideBar from '~/components/SideBar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <SideBar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
