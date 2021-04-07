import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { debounce, getScroll } from '../../../../helpers/scroll';
import useIsMobile from '../../../../useIsMobile';
import styles from './sticky.module.scss';

const Sticky = ({
  position = 'bottom',
  fullWidth = false,
  showOnScroll = true,
  className = '',
  children,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleOnScroll = () => {
        if (getScroll() > 0) {
          setIsScrolled(true);
        }
      };

      window.addEventListener(
        'scroll',
        debounce(() => handleOnScroll())
      );

      if (position === 'bottom') {
        document.documentElement.style.setProperty(
          '--scroll-to-top-bottom-offset',
          isMobile ? '18rem' : '11rem'
        );
      }

      return () => {
        window.removeEventListener('scroll', handleOnScroll);
        if (position === 'bottom' && document.getElementsByClassName(styles.sticky).length === 2) {
          document.documentElement.style.removeProperty('--scroll-to-top-bottom-offset');
        }
      };
    }

    return null;
  });

  return (
    <div
      className={`${styles.sticky} ${position === 'top' && styles.top} ${
        !isScrolled && showOnScroll ? styles.notScrolled : ''
      } ${className}`}
    >
      <div className={!fullWidth ? styles.container : ''}>{children}</div>
    </div>
  );
};

Sticky.propTypes = {
  position: PropTypes.string,
  showOnScroll: PropTypes.bool,
  fullWidth: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.any])
    .isRequired,
  className: PropTypes.string,
};

export default Sticky;
