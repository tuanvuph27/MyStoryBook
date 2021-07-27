import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../constant';

const MobileNavItem = styled('label')`
  display: flex;
  justify-content: space-between;
  align-content: center;

  span {
    color: white;
  }

  svg {
    float: right;
  }
`;

const ExpanderContent = styled('div')`
  background: rgba(79, 76, 196, 1);
`;

export const ExpanderToggler = styled('input')`
  display: none;

  + label {
    display: block;
    position: relative;
    z-index: 1;
    background: transparent;
    transition-delay: .5s;

    svg {
      transform: rotate(0deg);
      transition: transform .5s ease;
    }
  }

  &:checked + label {
    background: ${colors.hoverNav};
    transition: background 50ms;
    transition-delay: 0;

    svg {
      transform: rotate(-180deg);
      transition: transform .5s ease;
    }
  }

  ~ div {
    background-color: ${colors.hoverNav};
    position: relative;
    padding-bottom: 0;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s ease;
  }

  &:checked ~ div {
    max-height: 600px;
    transition: max-height 1s ease;

    a {
      line-height: 16px;
    }
  }
`;

export default ({ link, menuIndex, children }) => {
  return (
    <>
      <ExpanderToggler type={'checkbox'} id={link.id} />
      <MobileNavItem htmlFor={link.id} data-analytics={link.omnitureTag} data-partner={link.partnerLink} data-tag-id={`PrimaryNavList${menuIndex}`} data-index={menuIndex}>
        <span>{link.name}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-chevron-down" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        </svg>
      </MobileNavItem>
      <ExpanderContent>
        {children}
      </ExpanderContent>
    </>
  )
}
