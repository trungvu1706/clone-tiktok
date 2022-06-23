import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { forwardRef } from 'react';
import images from '~/assets/images';
import style from './Image.module.scss';

const cx = classNames.bind(style);

const Image = forwardRef(
  ({ src = images.noImage, alt, className, ...rest }, ref) => {
    const classes = cx({
      [className]: className,
    });
    return <img ref={ref} src={src} alt={alt} className={classes} {...rest} />;
  }
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  classNames: PropTypes.string,
};

export default Image;
