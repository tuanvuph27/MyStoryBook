import React from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Task from './Task';

export default {
  component: Task,
  title: 'Task',
  decorators: [withKnobs],
};

const Template = args => <Task {...args} />;

export const Default = ()=>{
  const title = text('Title', 'Task Vu');
  const state = boolean('State', true);
  const props = {
    task: { id: '1', title: title, state: state? 'TASK_INBOX' : 'TASK_PINNED' }
  }
  return <Task {...props} />
}
// export const Default = Template.bind({});
// Default.args = {
//   task: {
//     id: '1',
//     title: 'Test Task',
//     state: 'TASK_INBOX',
//     updatedAt: new Date(2021, 0, 1, 9, 0),
//   },
// };

// export const Pinned = Template.bind({});
// Pinned.args = {
//   task: {
//     ...Default.args.task,
//     state: 'TASK_PINNED',
//   },
// };

// export const Archived = Template.bind({});
// Archived.args = {
//   task: {
//     ...Default.args.task,
//     state: 'TASK_ARCHIVED',
//   },
// };