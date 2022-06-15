import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = (props) => {
  const {
    children,
    to,
    href,
    variant = 'container',
    size = 'medium',
    disabled,
    color = 'default',
    className,
    startIcon,
    endIcon,
    ...rest
  } = props;

  let Btn = 'button';

  if (to) {
    Btn = Link;
  } else if (href) {
    Btn = 'a';
  }

  const classes = cx('btn-wrapper', {
    [className]: className,
    disabled,
    [color]: color,
    [variant]: variant,
    'btn-link': to || href,
    'btn-size-s': size === 'small' ? 'btn-size-s' : '',
    'btn-size-l': size === 'large' ? 'btn-size-l' : '',
  });

  return (
    <Btn className={classes} disabled={disabled} {...rest}>
      {startIcon && <span className={cx('start-icon')}>{startIcon}</span>}
      <span className={cx('btn-label')}>{children}</span>
      {endIcon && <span className={cx('end-icon')}>{endIcon}</span>}
    </Btn>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
};

export default Button;
