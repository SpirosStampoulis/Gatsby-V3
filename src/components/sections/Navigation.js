import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// import Link from '@gigmedia/gatsby-theme/src/hooks/link';
import Link from '../../../hooks/link';
import Menu from '../molecules/menu';
import SearchForm from '../organisms/search';
// import { toggleScroll } from '@gigmedia/gatsby-theme/src/helpers/scroll';
import { toggleScroll } from '../../../helpers/scroll';
import ConditionalWrapper from '../atoms/conditional-wrapper';
import Sticky from '../molecules/sticky';

import NavigationProvider from '../organisms/navigation/navigationContext';

import styles from './navigation.module.scss';

const Navigation = ({
  section,
  logo = '../../../../../images/logo.svg',
  logoWidth = 200,
  logoHeight = 31,
  searchIcon = null,
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
  sticky = true,
  template,
}) => {
  const navRef = useRef(React.createRef());
  const showMenu = template !== 'ppc';
  const logoPosition = showMenu ? 'space-between' : 'center';

  if (options.mobile.stopScrollOnOpen) toggleScroll('', true);

  const onClickHandler = () => {
    if (
      typeof window !== 'undefined' &&
      window.location.href.replace(window.location.origin, '') === '/'
    ) {
      window.location.reload();
    }
  };

  return (
    <ConditionalWrapper
      condition={sticky}
      wrapper={(items) => (
        <Sticky position="top" fullWidth showOnScroll={false} className={styles.stickyNav}>
          {items}
        </Sticky>
      )}
    >
      <nav className={styles.nav} style={{ justifyContent: logoPosition }} ref={navRef}>
        <NavigationProvider>
          <Link className={styles.logo} to="/" onClick={onClickHandler}>
            <img alt="logo" src={logo} width={logoWidth} height={logoHeight} />
          </Link>
          {showMenu && (
            <>
              <Menu section={section} menu={menu} options={options} />
              <SearchForm className={styles.search} searchIcon={searchIcon} />
            </>
          )}
        </NavigationProvider>
      </nav>
    </ConditionalWrapper>
  );
};

Navigation.propTypes = {
  template: PropTypes.string,
  section: PropTypes.shape({
    modules: PropTypes.arrayOf(
      PropTypes.shape({
        short_code: PropTypes.string,
        children: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string,
            value: PropTypes.string,
          })
        ),
      })
    ),
  }).isRequired,
  logo: PropTypes.string,
  logoWidth: PropTypes.number,
  logoHeight: PropTypes.number,
  searchIcon: PropTypes.string,
  menu: PropTypes.string,
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
  sticky: PropTypes.bool,
};

export default Navigation;
