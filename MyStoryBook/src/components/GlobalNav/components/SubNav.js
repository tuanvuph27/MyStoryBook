import React from 'react';
import styled from '@emotion/styled';

import { colors, size, breakpoints } from '../../constant';

import { navbp } from '../utils/constants';


const Menu = styled('ul')`

  background-color: ${colors.hoverNav};
  color: white;
  list-style: none;
  margin: 0 0 ${size.md}px ${size.sm}px;
  border-left: 1px solid white;
  padding: 0;

  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  a {
    display: block;
    padding: ${size.xs}px ${size.sm}px;
    line-height: ${size.sm}px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    margin-left: ${size.md}px;

    a {
      padding: ${size.xs}px ${size.md}px;
    }
  }

  @media (min-width: ${navbp.extraWideViewport}) {
    columns: ${props => Math.ceil(props.children.length / 6)};
    column-gap: 0;
    column-rule: 1px solid white;
    white-space: nowrap;
    list-style: none;
    margin: 0;
    border: 0;
    padding: ${size.sm}px 0;

    li {
      break-inside: avoid;
    }

    a {
      padding: ${size.xs}px 36px;
      line-height: ${size.lg}px;
    }
  }
`;



export default ({ menuItems, ...rest }) => (
  <Menu {...rest}>
    {menuItems.map((menuLink, i) => (
      <li key={i}>
        <a 
          data-analytics={menuLink.omnitureTag} 
          data-partner={menuLink.partnerLink} 
          data-tag-id={`NavDropdown${i}`} 
          type={'unstyled'}
          href={menuLink.url}>{menuLink.name}</a>
      </li>
    ))}
  </Menu>
)