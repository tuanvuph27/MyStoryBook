import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { colors, size } from '../../constant';
import { NAV_HEIGHT } from '../utils/constants';

export const MobileMenuWrapper = styled('div')`
  height: calc(100vh - ${NAV_HEIGHT}px);
  overflow: auto;
  width: 100vw;
  right: -100vw;
  top: ${NAV_HEIGHT}px;
  position: fixed;
  transition: transform .4s ease;
  transform: translate(0, 0);

  /* react-transition-group styles */
  &.enter-active, &.enter-done {
    transform: translateX(-100%);
  }


  @media (min-width: 480px) {
    right: -75vw;
    width: 75vw;
  };

  @media (min-width: 768px) {
    right: -50vw;
    width: 50vw;
  };
`;

const MobileDropdownBase = styled('div')`
  background-color: ${colors.globalNav};
  list-style-type: none;
  overflow-y: auto;
  margin: 0;
  padding: ${size.md}px 0 ${size.xl}px 0;
  height: 100vh;
  width: 100%;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const MobileMenu = ({ children }) => (
  <MobileMenuWrapper>
    <MobileDropdownBase>
      {children}
    </MobileDropdownBase>
  </MobileMenuWrapper>
);

MobileMenu.displayName = 'MobileMenu';

MobileMenu.propTypes = {
  children: PropTypes.node,
};

export default MobileMenu;
