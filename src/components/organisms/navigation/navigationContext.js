import React, { useState, createContext } from "react";

export const NavigationContext = createContext(false);

const NavigationProvider = props => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <NavigationContext.Provider value={{ showMenu, setShowMenu, showSearch, setShowSearch }}>
      {props.children}
    </NavigationContext.Provider>
  //   <nav
  //   className='navigation-nav'
  //   style={{justifyContent : 'space-between'}}>
  //   <a aria-current='page' className='navigation-logo' href='/'>
  //     <img
  //       alt='logo'
  //       src={logo}
  //       width='200'
  //       height='31'
  //     />
  //   </a>
  //   <div className='menu-menuContainer'>
  //     <div
  //       className='menu-icon-menuIconContainer'
  //       role='button'
  //       aria-label='Menu Icon'
  //       tabindex='0'>
  //       <div className='menu-icon-menuIcon false'>
  //         <div></div>
  //       </div>
  //     </div>
  //     <ul className='menu-menuList menu-collapseFull menu-horizontal false'>
  //       <li className='items-menuItem'>
  //         <div className='item-itemWrapper'>
  //           <a
  //             className='item-item undefined '
  //             title='Casino Reviews'
  //             href='/casino-reviews'>
  //             Casino Reviews
  //           </a>
  //         </div>
  //         <ul className='items-subMenuList'>
  //           <li className='items-menuItem'>
  //             <a
  //               className='item-item'
  //               title='New Online Casinos'
  //               href='/new-online-casinos'>
  //               New Online Casinos
  //             </a>
  //           </li>
  //           <li className='items-menuItem'>
  //             <a
  //               className='item-item'
  //               title='Mobile Casinos'
  //               href='/mobile-casino'>
  //               Mobile Casinos
  //             </a>
  //           </li>
  //           <li className='items-menuItem'>
  //             <a
  //               className='item-item'
  //               title='Low Deposit Casinos'
  //               href='/low-deposit-casinos'>
  //               Low Deposit Casinos
  //             </a>
  //           </li>
  //         </ul>
  //       </li>
  //       <li className='items-menuItem'>
  //         <div className='item-itemWrapper'>
  //           <a
  //             className='item-item undefined '
  //             title='Casino Bonuses'
  //             href='/casino-bonus'>
  //             Casino Bonuses
  //           </a>
  //         </div>
  //         <ul className='items-subMenuList'>
  //           <li className='items-menuItem'>
  //             <a
  //               className='item-item'
  //               title='No Deposit Bonuses'
  //               href='/no-deposit-casinos'>
  //               No Deposit Bonuses
  //             </a>
  //           </li>
  //         </ul>
  //       </li>
  //       <li className='items-menuItem'>
  //         <div className='item-itemWrapper'>
  //           <a
  //             className='item-item undefined '
  //             title='Casino Games'
  //             href='/casino-games'>
  //             Casino Games
  //           </a>
  //         </div>
  //         <ul className='items-subMenuList'>
  //           <li className='items-menuItem'>
  //             <a
  //               className='item-item'
  //               title='Slots'
  //               href='/slots'>
  //               Slots
  //             </a>
  //           </li>
  //           <li className='items-menuItem'>
  //             <a
  //               className='item-item'
  //               title='Bingo'
  //               href='/bingo'>
  //               Bingo
  //             </a>
  //           </li>
  //           <li className='items-menuItem'>
  //             <a
  //               className='item-item'
  //               title='Blackjack'
  //               href='/blackjack'>
  //               Blackjack
  //             </a>
  //           </li>
  //           <li className='items-menuItem'>
  //             <a
  //               className='item-item'
  //               title='Baccarat'
  //               href='/baccarat'>
  //               Baccarat
  //             </a>
  //           </li>
  //           <li className='items-menuItem'>
  //             <a
  //               className='item-item'
  //               title='Roulette'
  //               href='/roulette'>
  //               Roulette
  //             </a>
  //           </li>
  //         </ul>
  //       </li>
  //       <li className='items-menuItem'>
  //         <a
  //           className='item-item'
  //           title='Free Spins'
  //           href='/free-spins'>
  //           Free Spins
  //         </a>
  //       </li>
  //       <li className='items-menuItem'>
  //         <div className='item-itemWrapper'>
  //           <a
  //             className='item-item undefined '
  //             title='Sports'
  //             href='/sports'>
  //             Sports
  //           </a>
  //         </div>
  //         <ul className='items-subMenuList'>
  //           <li className='items-menuItem'>
  //             <a
  //               className='item-item'
  //               title='Horse Racing'
  //               href='/sports/horse-racing'>
  //               Horse Racing
  //             </a>
  //           </li>
  //           <li className='items-menuItem'>
  //             <a
  //               className='item-item'
  //               title='Gaelic Football'
  //               href='/sports/gaelic-football'>
  //               Gaelic Football
  //             </a>
  //           </li>
  //           <li className='items-menuItem'>
  //             <a
  //               className='item-item'
  //               title='All Ireland Hurling'
  //               href='/sports/hurling'>
  //               All Ireland Hurling
  //             </a>
  //           </li>
  //           <li className='items-menuItem'>
  //             <a
  //               className='item-item'
  //               title='Boxing'
  //               href='/sports/boxing-betting'>
  //               Boxing
  //             </a>
  //           </li>
  //           <li className='items-menuItem'>
  //             <a
  //               className='item-item'
  //               title='Rugby'
  //               href='/sports/rugby-betting'>
  //               Rugby
  //             </a>
  //           </li>
  //           <li className='items-menuItem'>
  //             <a
  //               className='item-item'
  //               title='Irish Football'
  //               href='/sports/football-betting'>
  //               Irish Football
  //             </a>
  //           </li>
  //           <li className='items-menuItem'>
  //             <a
  //               className='item-item'
  //               title='Golf'
  //               href='/sports/golf-betting'>
  //               Golf
  //             </a>
  //           </li>
  //           <li className='items-menuItem'>
  //             <a
  //               className='item-item'
  //               title='MMA'
  //               href='/sports/mma-betting'>
  //               MMA
  //             </a>
  //           </li>
  //         </ul>
  //       </li>
  //       <li className='items-menuItem'>
  //         <a
  //           className='item-item    '
  //           title='Payment Methods'
  //           href='/payment-methods'>
  //           Payment Methods
  //         </a>
  //       </li>
  //       <li className='items-menuItem'>
  //         <a className='item-item' title='News' href='/news'>
  //           News
  //         </a>
  //       </li>
  //     </ul>
  //   </div>
  //   <div className='navigation-search'>
  //     <button
  //       type='button'
  //       aria-label='Search'
  //       className='search-searchButton false'>
  //       <img
  //         alt='search'
  //         src={search}
  //         width='24'
  //         height='24'
  //       />
  //       <div className='search-close'></div>
  //     </button>
  //   </div>
  // </nav>
  );
};

export default NavigationProvider;