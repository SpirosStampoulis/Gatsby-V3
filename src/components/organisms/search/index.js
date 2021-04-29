import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import { FaSearch } from 'react-icons/fa';

import { toggleScroll } from '../../../../helpers/scroll';

import { NavigationContext } from '../navigation/navigationContext';

import styles from './search.module.scss';

const SearchForm = ({ className, searchIcon, iconWidth = 24, iconHeight = 24 }) => {
  const { showSearch, setShowSearch, setShowMenu, showMenu } = useContext(NavigationContext);

  const Search = showSearch ? loadable(() => import('../../../molecules/search')) : <></>;
  const Operator = showSearch ? ( loadable(() => import('../../../components/atoms/search/autocomplete/operator')) ) : (<></>);
  const Game = showSearch ? loadable(() => import('../../../components/atoms/search/autocomplete/game')) : <></>;
  const Article = showSearch ? loadable(() => import('../../../components/atoms/search/autocomplete/article')) : <></>;

  const handleOnSearchIconClick = () => {
    setShowSearch(!showSearch);

    toggleScroll('search');

    if (showMenu) {
      setShowMenu(false);
      toggleScroll('menu');
    }
  };

  const handleOverlayClickClose = (event) => {
    if (event.target.classList.contains(styles.searchForm)) {
      toggleScroll('search');
      setShowSearch(false);
    }
  };

  return (
    <div className={className}>
      <button
        type="button"
        aria-label="Search"
        onClick={handleOnSearchIconClick}
        className={`${styles.searchButton} ${showSearch && styles.active}`}
      >
        {searchIcon === null ? (
          <FaSearch />
        ) : (
          <img alt="search" src={searchIcon} width={iconWidth} height={iconHeight} />
        )}
        <div className={styles.close} />
      </button>
      {showSearch && (
        <div
          onClick={handleOverlayClickClose}
          onKeyDown={handleOverlayClickClose}
          tabIndex={0}
          role="button"
          aria-label="Close search"
          className={`${styles.searchForm} ${styles.show}`}
        >
          <Search
            searchIcon={searchIcon}
            formSearchOptions={{
              autoComplete: true,
              sort: true,
              limit: 3,
            }}
          >
            {(item) => (
              <>
                <div type="operator">
                  <Operator item={item} />
                </div>
                <div type="game">
                  <Game item={item} />
                </div>
                <div type="article">
                  <Article item={item} />
                </div>
              </>
            )}
          </Search>
        </div>
      )}
    </div>
  );
};

SearchForm.propTypes = {
  className: PropTypes.string.isRequired,
  searchIcon: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
};

export default SearchForm;
