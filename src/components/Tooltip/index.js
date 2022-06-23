import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import PropTypes from 'prop-types';

const Tooltip = ({
  children,
  content,
  delay = [0, 200],
  placement = 'bottom',
}) => {
  return (
    <Tippy content={content} delay={delay} placement={placement}>
      {children}
    </Tippy>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string.isRequired,
  delay: PropTypes.array,
  placement: PropTypes.string,
};

export default Tooltip;
