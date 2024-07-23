// assets
import { IconBrandChrome, IconAddressBook, IconCircles } from '@tabler/icons-react';

// constant
const icons = { IconBrandChrome, IconAddressBook, IconCircles };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

// const other = {
//   id: 'sample-docs-roadmap',
//   type: 'group',
//   children: [
//     {
//       id: 'sample-page',
//       title: 'Sample Page',
//       type: 'item',
//       url: '/sample-page',
//       icon: icons.IconBrandChrome,
//       breadcrumbs: false
//     },
//     {
//       id: 'documentation',
//       title: 'Documentation',
//       type: 'item',
//       url: 'https://codedthemes.gitbook.io/berry/',
//       icon: icons.IconHelp,
//       external: true,
//       target: true
//     }
//   ]
// };


const users = {
  id: 'users-roadmap',
  type: 'group',
  children: [
    {
      id: 'users',
      title: 'Users',
      type: 'item',
      url: '/Users',
      icon: icons.IconCircles,
      breadcrumbs: false
    }
  ]
};

export default users;
