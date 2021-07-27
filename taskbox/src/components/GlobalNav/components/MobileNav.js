import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import MobileMenu from './MobileMenu';
import HamburgerToggler from './HamburgerToggler';
import { CSSTransition } from 'react-transition-group';
import { HAMBURGER_MENU_ID, navbp } from '../utils/constants';

const MainMobileNavBase = styled('div')`
  position: relative;

  @media (min-width: ${navbp.extraWideViewport}) {
    display: none;
    flex: 0;
  };
`;


const MobileNav = ({
  onMenuClick,
  menuOpenState,
  children
}) => (
  <MainMobileNavBase>
    <HamburgerToggler iconSize="24" onMenuClick={onMenuClick} menuOpenState={menuOpenState} />
    <CSSTransition mountOnEnter={true} unmountOnExit={true} in={menuOpenState.isMenuOpen && menuOpenState.menuId === HAMBURGER_MENU_ID} timeout={400}>
      <MobileMenu>
        {children}
      </MobileMenu>
    </CSSTransition>
  </MainMobileNavBase>
);

MobileNav.displayName = 'MobileNav';

MobileNav.propTypes = {
  children: PropTypes.node,
};

export default MobileNav;
