import React, {useState} from 'react';
import styled from '@emotion/styled';
import { size, breakpoints, colors } from '../constant';
import PrimaryNavItem from './components/PrimaryNavItem';
import image from "../../assets/logo.png"
import MobileNav from './components/MobileNav';
import NavLinks from './components/NavLinks';
import { navbp, NAV_HEIGHT, RIBBON_HEIGHT } from './utils/constants';

const Header = styled('header')`
  display: flex;
  justify-content: center;
  background-color: ${colors.globalNav};
  color: white;
  height: ${NAV_HEIGHT}px;
  min-height: ${NAV_HEIGHT}px;
  position: ${props => props.withPromoExpander ? 'sticky' : 'absolute'};
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
  transition: transform .2s linear;
  transform: ${props => props.isLocked ? `translateY(0)` : `translateY(-${RIBBON_HEIGHT}px)`};

  .expander-content {
    margin: 0 -${size.sm};
  }

  * {
    box-sizing: content-box;
  }

  @media print {
    display: none;
  }
`;

const HeaderWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > hr {
    display: none;
  }

  @media (min-width: ${navbp.extraWideViewport}) {
    > hr {
      display: block;
      height: 40%;
      margin-left: 0;
      margin-right: 0;
    }
  }


  @media (min-width: ${navbp.ipadLandscape}) {
    max-width: ${props => props.maxWidth || size.contentMaxWidth || 1280}px;
  }
`;

const DesktopNav = styled('nav')`
  display: none;
  padding: 0 ${size.md}px;
  right: 0;
  white-space: nowrap;

  @media (min-width: ${navbp.extraWideViewport}) {
    position: relative;
    padding: 0;
    display: flex;
    align-items: center;
  }
`;


const LogoContainer = styled('div')`
  flex-grow: 2;
  position: relative;
  z-index: 11;

  a {
    display: inline-block;
    height: ${NAV_HEIGHT}px;
    margin-left: ${size.sm}px;

    div {
      height: ${NAV_HEIGHT}px;
      max-width: 250px;
      position: relative;
      align-items: initial;
      justify-content: left;
    }
  }

  @media (min-width: ${breakpoints.md}px) {
    a div {
      max-width: 280px;
    }
  }

  @media (min-width: ${breakpoints.lg}px) {
    a {
      margin-left: ${size.md}px;
    }
  }
`;

const ImageContainer = styled("img")`
  width: auto;
  height: 100%;
`

// #endregion Styles

export const Logo = () => (
  <LogoContainer>
    <a><div><ImageContainer src={image}></ImageContainer></div></a>
  </LogoContainer>
);

const DesktopLinks = ({ links }) => {
  if (typeof window !== 'undefined') {
    console.warn('Global-nav fallback headerlinks are used instead of latest navigation in s3 bucket file.');
  }
  return (
    <DesktopNav>
      <NavLinks links={links} isDesktopView={true} />
    </DesktopNav>
  );
};

export const DesktopNavBase = DesktopLinks;

export const MobileNavBase = ({navMenuLegal, links, onMenuClick, menuOpenState}) => {
  return (
    <MobileNav onMenuClick={onMenuClick} menuOpenState={menuOpenState}>
      <NavLinks links={links} />
    </MobileNav>
  )
};

const GlobalNav = ({navLinks})=>{

  const [ menuOpenState, setMenuOpenState ] = useState({
    isMenuOpen: false,
    menuId: ''
  });
  const onMenuClick = (e) => {
    // e.preventDefault();
    const { isMenuOpen, menuId } = menuOpenState;
    const targetId = e.currentTarget.id || e.currentTarget.getAttribute('for');
    const openTargetMenu = targetId !== menuId || (targetId === menuId && !isMenuOpen);
    setMenuOpenState({
        isMenuOpen: openTargetMenu,
        menuId: targetId
    });
}
  return (
    <Header isLocked>
      <HeaderWrapper>
        <Logo/>
        <DesktopNavBase links={navLinks} />
        <MobileNavBase links={navLinks}  onMenuClick={onMenuClick} menuOpenState={menuOpenState} />
      </HeaderWrapper>
    </Header>
  )
}

export default GlobalNav
