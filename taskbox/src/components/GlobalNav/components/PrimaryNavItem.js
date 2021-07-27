import React from 'react';
import styled from '@emotion/styled';
import { size, colors } from '../../constant';

import { NAV_HEIGHT } from '../utils/constants';

const { primary, blue } = colors;

const PrimaryNavItem = styled('div')`
  color: white;

  > a {
    color: white;
    display: inline-block;
    padding: ${size.lg}px 20px;
    line-height: ${NAV_HEIGHT - size.lg*2}px;
  }

  ul {
    display: none;
  }
  
  &:hover {
    > a {
      background: blue;
    }

    ul {
      display: flex;
      position: absolute;
      top: ${NAV_HEIGHT}px;
    }
  }

  &:last-of-type {
    ul {
      right: 0;
    }
  }

  a:hover {
    text-decoration: none;
  }

`;

PrimaryNavItem.displayName = 'PrimaryNavItem';

export default React.memo(PrimaryNavItem);
