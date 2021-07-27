import React from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import SkeletonImage from './index.tsx';

export default {
  title: 'SkeletonImage',
  component: SkeletonImage,
  decorators: [withKnobs],
};


export const Default = ()=>{

  return (
    <div style={{width: '100%', position:'relative', height:'200px'}}>
    <SkeletonImage padding="lg" width="64"/>
    </div>
  )
}