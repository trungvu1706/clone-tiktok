import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Popup.module.scss';
import HeaderWithBtnBack from './HeaderWithBtnBack';

const cx = classNames.bind(styles);

const Popup = ({
  children,
  hideOnClick,
  content,
  visible,
  className,
  delay,
  headerWithBtnBackTitle,
  hasHeaderWithBtnBack,
  onBack,
  placement,
  interactive,
  onClickOutside = () => {},
  onHide = () => {},
  ...rest
}) => {
  const classes = cx('pop-up-content', {
    [className]: className,
  });

  return (
    <Tippy
      interactive={interactive}
      visible={visible}
      delay={delay}
      placement={placement}
      onHide={onHide}
      onClickOutside={onClickOutside}
      hideOnClick={hideOnClick}
      render={(attrs) => (
        <div className={cx('pop-up-wrapper')} tabIndex="-1" {...attrs}>
          {hasHeaderWithBtnBack && (
            <HeaderWithBtnBack
              headerWithBtnBackTitle={headerWithBtnBackTitle}
              onBack={onBack}
            />
          )}
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
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  visible: PropTypes.bool,
  delay: PropTypes.array,
  headerWithBtnBackTitle: PropTypes.string,
  hasHeaderWithBtnBack: PropTypes.bool,
  placement: PropTypes.string,
  interactive: PropTypes.bool,
  onHide: PropTypes.func,
  onClickOutside: PropTypes.func,
  hideOnClick: PropTypes.bool,
};

export default Popup;
