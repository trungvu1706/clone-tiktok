import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { forwardRef } from 'react';
import style from './Image.module.scss';

const cx = classNames.bind(style);

const Image = forwardRef(({ src, alt, className, ...rest }, ref) => {
  const classes = cx({
    [className]: className,
  });
  return <img ref={ref} src={src} alt={alt} className={classes} {...rest} />;
});

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  classNames: PropTypes.string,
};

export default Image;
