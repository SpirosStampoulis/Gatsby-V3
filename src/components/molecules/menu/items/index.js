import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Item from './item';
import styles from './items.module.scss';
import keygen from '../../../organisms/node_modules/~helpers/keygen';

// Test included with menu molecule test
const Items = ({
  item,
  menuListRef,
  options = {
    mobile: {
      canOpenAllSubMenus: false,
      subMenuDropDownButton: true,
    },
  },
}) => {
  let link;
  let menu;

  const subMenuList = useRef(null);

  function showSubMenu(itemStyles) {
    if (!options.mobile.canOpenAllSubMenus) {
      const showingSubMenu = menuListRef.current.querySelector(`.${styles.show}`);

      if (showingSubMenu && showingSubMenu !== subMenuList.current) {
        showingSubMenu.classList.toggle(styles.show);

        if (itemStyles !== null) {
          if (options.mobile.subMenuDropDownButton) {
            showingSubMenu.parentNode.querySelector('button').classList.toggle(itemStyles.active);
          }
        }
      }
    }

    if (subMenuList.current) {
      subMenuList.current.classList.toggle(styles.show);
    }
  }

  if (item.children) {
    link = (
      <Item
        hasChildren
        item={item}
        showSubMenuHandler={showSubMenu}
        options={{
          mobile: {
            subMenuDropDownButton: options.mobile.subMenuDropDownButton,
          },
        }}
      />
    );
    menu = (
      <ul ref={subMenuList} className={styles.subMenuList}>
        {item.children.map((child) => {
          return (
            <Items
              key={keygen()}
              item={child}
              menuListRef={menuListRef}
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
    );
  } else {
    link = (
      <Item
        hasChildren={false}
        item={item}
        options={{ mobile: { subMenuDropDownButton: options.mobile.subMenuDropDownButton } }}
      />
    );
  }

  return (
    <li className={styles.menuItem}>
      {link}
      {menu}
    </li>
  );
};

Items.propTypes = {
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
  menuListRef: PropTypes.shape(),
  options: PropTypes.shape({
    mobile: PropTypes.shape({
      canOpenAllSubMenus: PropTypes.bool,
      subMenuDropDownButton: PropTypes.bool,
    }),
  }),
};

export default Items;
