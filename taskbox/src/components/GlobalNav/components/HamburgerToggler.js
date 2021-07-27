import React from 'react';
import styled from '@emotion/styled';
import { breakpoints, size } from '../../constant';
import { HAMBURGER_MENU_ID, NAV_HEIGHT } from '../utils/constants';

const Toggle = styled.label`
  cursor: pointer;
  display: inline-block;
  position: relative;
  height: ${({iconSize}) => iconSize}px;
  width: ${({iconSize}) => iconSize}px;
  padding: ${({iconSize}) => ((NAV_HEIGHT - iconSize)/2)}px ${size.sm/2}px;
  margin-right: ${size.sm/2}px;
  transform: rotateY(0deg);
  // transition: transform .4s ease;

  > svg {
    position: absolute;
    // backface-visibility: hidden;
    // transform-style: preserve-3d;

    &:first-of-type {
      // transform: rotateY(0deg);
      display: inline-block;
    }

    &:last-of-type {
      // transform: rotateY(180deg);
      display: none;
    }
  }

  @media (min-width: ${breakpoints.lg}px) {
    padding-right: ${size.md/2}px;
    padding-left: ${size.md/2}px;
    margin-right: ${size.md/2}px;
  }
`;

const ToggleBox = styled.input`
  display: none;

  &:checked {
    
    + label svg{
      &:first-of-type {
        display: none;
      }

      &:last-of-type {
        display: inline-block;
      }
    }
  }
`;

const HamburgerToggler = ({
  onMenuClick,
  menuOpenState,
  iconSize,
}) => {
  const { isMenuOpen, menuId } = menuOpenState;
  const isNavOpen = isMenuOpen && menuId === HAMBURGER_MENU_ID;
  
  return (
    <>
      <ToggleBox type={'checkbox'} id={HAMBURGER_MENU_ID} />
      <Toggle htmlFor={HAMBURGER_MENU_ID} iconSize={iconSize} onClick={onMenuClick} className={'menu-item'} data-menu-state={isNavOpen ? "open" : "closed"}>
      <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="white" className="bi bi-list" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="white" className="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
      </svg>
      </Toggle>
    </>
)};

export default HamburgerToggler;
