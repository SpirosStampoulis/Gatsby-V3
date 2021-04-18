import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import Items from '../../../components/atoms/menu/items';
import MenuIcon from '../../../components/atoms/menu/menu-icon';
import styles from './menu.module.scss';
import keygen from '../../../../helpers/keygen';
import { toggleScroll } from '../../../../helpers/scroll';

const Menu = ({
  section,
  menu = 'main',
  options = {
    mobile: {
      animation: 'collapse',
      closeHandler: null,
      stopScrollOnOpen: true,
      canOpenAllSubMenus: false,
      subMenuDropDownButton: true,
    },
    desktop: {
      orientation: 'horizontal',
    },
  },
}) => {
  const menuList = useRef(null);

  let menuObject;

  if (section.modules) {
    menuObject = section.modules.find((module) => module.menu_short_code === menu);
  }

  const menuListClasses = `${styles.menuList} ${
    options.mobile.animation ? styles[options.mobile.animation] : ''
  } ${options.desktop.orientation ? styles[options.desktop.orientation] : ''}`;

  function handleMenuIconClick() {
    if (options.mobile.stopScrollOnOpen) {
      toggleScroll('menu');
    }

    menuList.current.classList.toggle(styles.show);
    return options.mobile.closeHandler != null && options.mobile.closeHandler();
  }

  return (
    <div className={styles.menuContainer}>
      <MenuIcon onClick={handleMenuIconClick} />
      <ul ref={menuList} className={menuListClasses}>
        {menuObject &&
          menuObject.children.map((child) => {
            return (
              <Items
                key={keygen()}
                item={child}
                menuListRef={menuList}
                options={{
                  mobile: {
                    canOpenAllSubMenus: options.mobile.canOpenAllSubMenus,
                    subMenuDropDownButton: options.mobile.subMenuDropDownButton,
                  },
                }}
              />
            );
          })}
      </ul>
    </div>
  );
};

Menu.propTypes = {
  options: PropTypes.shape({
    mobile: PropTypes.shape({
      animation: PropTypes.string,
      closeHandler: PropTypes.func,
      stopScrollOnOpen: PropTypes.bool,
      canOpenAllSubMenus: PropTypes.bool,
      subMenuDropDownButton: PropTypes.bool,
    }),
    desktop: PropTypes.shape({
      orientation: PropTypes.string,
    }),
  }),
  section: PropTypes.shape({
    modules: PropTypes.arrayOf(
      PropTypes.shape({
        menu_short_code: PropTypes.string,
        children: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string,
            value: PropTypes.string,
          })
        ),
      })
    ),
  }).isRequired,
  menu: PropTypes.string.isRequired,
};

export default Menu;
