import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from '~hooks/link';
import useIsMobile from '~hooks/useIsMobile';
import ConditionalWrapper from '~atoms/conditional-wrapper';

import styles from './item.module.scss';

export default function Item({
  item,
  hasChildren,
  showSubMenuHandler,
  options = {
    mobile: {
      subMenuDropDownButton: true,
    },
  },
}) {
  const [active, setActive] = useState('');
  useEffect(() => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    setActive(url.replace(/(.+\w\/)(.+)/, '$2') === item.value ? styles.active : '');
  }, [active, item]);

  const toggleDropDown = (e) => {
    e.target.classList.toggle(styles.active);
  };
  const isMobile = useIsMobile();

  return (
    <ConditionalWrapper
      condition={hasChildren}
      wrapper={(items) => (
        <div
          className={`${styles.itemWrapper} ${
            options.mobile.subMenuDropDownButton && isMobile ? styles.dropDownButton : ''
          }`}
          onTouchStart={!options.mobile.subMenuDropDownButton ? showSubMenuHandler : null}
        >
          {items}
        </div>
      )}
    >
      <Link
        className={`${styles.item} ${active} ${
          !options.mobile.subMenuDropDownButton && isMobile && hasChildren
            ? styles.inactiveLink
            : ''
        } ${hasChildren ? styles.hasChildren : ''} ${
          !options.mobile.subMenuDropDownButton ? styles.noDropDownButton : ''
        }`}
        to={item.value ? item.value : '#'}
        title={item.title}
      >
        {item.title}
      </Link>
      {options.mobile.subMenuDropDownButton && isMobile && hasChildren && (
        <button
          type="button"
          onClick={(e) => {
            showSubMenuHandler(styles);
            toggleDropDown(e);
          }}
        >
          {' '}
        </button>
      )}
    </ConditionalWrapper>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.string,
    children: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        value: PropTypes.string,
      })
    ),
  }).isRequired,
  hasChildren: PropTypes.bool,
  showSubMenuHandler: PropTypes.func,
  options: PropTypes.shape({
    mobile: PropTypes.shape({
      subMenuDropDownButton: PropTypes.bool,
    }),
  }),
};
