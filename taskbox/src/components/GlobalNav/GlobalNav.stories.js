import React, {useState} from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import GlobalNav from './index';

export default {
  title: 'Nav',
  component: GlobalNav,
  decorators: [withKnobs],
};


export const Default = ()=>{
  const navLinks = [
    {
      url: '#',
      name: 'Link with Submenu',
      id: 'link1',
      dropdownItems: [{
          url: '#',
          name: 'Sub Link'
        }]
    },
    {
      url: '#',
      id: 'link2',
      name: 'Link'
    }]
  return (
    <div style={{width: '100%', position:'relative', height:'200px'}}>
    <GlobalNav navLinks={navLinks}/>
    </div>
  )
}