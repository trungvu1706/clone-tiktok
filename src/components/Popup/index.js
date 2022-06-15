import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Popup.module.scss';

const cx = classNames.bind(styles);

const Popup = ({ children, content, visible, className, ...rest }) => {
  const classes = cx('pop-up-content', {
    [className]: className,
  });
  return (
    <Tippy
      visible={visible}
      render={(attrs) => (
        <div className={cx('pop-up-wrapper')} tabIndex="-1" {...attrs}>
          <div className={classes} {...rest}>
            {content}
          </div>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
};

Popup.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
};

export default Popup;
