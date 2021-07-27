import React from 'react';
import styled from '@emotion/styled';

import { size, breakpoints, colors } from '../../constant';

import NavExpander from './NavExpander';
import { navbp, NAV_HEIGHT } from '../utils/constants';
import SubNav from './SubNav';


const NavItem = styled('div')`

  color: white;
  flex-grow: 0;
  display: inline-grid;
  flex-direction: column;
  position: relative;

  a {
    color: white;

    &:hover {
      text-decoration: none;
    }
  }

  > a,
  label {
    padding: ${size.sm}px;
    display: block;
  }

  @media (min-width: ${breakpoints.md}px) {
    display: flex;
  }

  @media (min-width: ${breakpoints.lg}px) {
    > a,
    label {
      padding-left: ${size.md}px;
      padding-right: ${size.md}px;
    }
  }

  @media (min-width: ${navbp.extraWideViewport}) {
    > a,
    label {
      display: inline-block;
      padding: ${size.lg}px ${size.md}px;
    }

    > ul {
      overflow: hidden;
      position: absolute;
      padding: 0;
      max-height: 0;
      top: ${NAV_HEIGHT}px;
      transition: 200ms ease-in;
      transition-property: max-height, padding-bottom, padding-top;

      li a {
        height: 0;
        padding-top: 0;
        padding-bottom: 0;
        overflow: hidden;
        transition: 200ms ease-in;
        transition-property: height, padding-bottom, padding-top;
      }
    }
    
    &:hover {
      background: ${colors.hoverNav};
      transition: background 100ms ease-out;

      > ul {
        padding: ${size.sm}px 0;
        max-height: 300px;
        transition: 200ms cubic-bezier(.55, .1, 1, 1);
        transition-property: max-height, padding-bottom, padding-top;
        
        li a {
          height: ${size.lg}px;
          padding: ${size.xs}px 36px;
          line-height: ${size.lg}px;
          transition: 200ms cubic-bezier(.55, .1, 1, 1);
          transition-property: height, padding-bottom, padding-top;
          
          &:hover {
            background-color: rgba(255,255,255, .2);
            padding-left: 31px;
            border-left: 5px solid ${colors.hoverNav};
          }
        }
      }
    }

    &:last-of-type {
      > ul {
        right: 0;
      }
    }

  }
`;


export default React.memo(({links, isDesktopView}) => links && links.length > 0 && 
  links.map((link, i) => {
    if (isDesktopView) {
      return (
        <NavItem data-index={i} key={i}>
          <a 
            data-analytics={link.omnitureTag} 
            data-partner={link.partnerLink} 
            data-tag-id={`PrimaryNavList${i}`} 
            data-index={i} 
            type={'unstyled'}
            href={link.url}>{link.name}</a> 
          {link.dropdownItems && link.dropdownItems.length > 0 && 
            <SubNav menuIndex={i} menuItems={link.dropdownItems} />
          }
        </NavItem>
      )
    }
    else {
      if (link.dropdownItems && link.dropdownItems.length > 0) {
        return (
          <NavItem data-index={i} key={i}>
            <NavExpander link={link} menuIndex={i}>
              <SubNav menuIndex={i} menuItems={link.dropdownItems} />
            </NavExpander>
          </NavItem>
        )
      }
      else {
        return (
          <NavItem data-index={i} key={i}>
            <a 
              data-analytics={link.omnitureTag} 
              data-partner={link.partnerLink} 
              data-tag-id={`PrimaryNavList${i}`} 
              data-index={i} 
              type={'unstyled'}
              href={link.url}>{link.name}</a> 
          </NavItem>
        )
      }
    }
  }));




