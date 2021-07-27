import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Overlay = styled('div')`
  transition: opacity .15s linear, visibility .15s linear;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  pointer-events: none;
  z-index: 6;
  opacity: ${props => props.mouseOverItemIndex !== null ? 1 : 0};
  visibility: ${props => props.mouseOverItemIndex !== null ? 'visible' : 'hidden'};
`;

Overlay.displayName = 'Overlay';

Overlay.propTypes = {
  inStoryBook: PropTypes.bool,
  mouseOverItemIndex: PropTypes.number,
};

export default Overlay;
