import Me from './app/Me';
import Work from './app/Work';

export default [
  {
    pattern: '/',
    exactly: true,
    name: 'Me',
    icon: 'user',
    component: Me
  },
  {
    pattern: '/work',
    name: 'Work',
    icon: 'environment',
    component: Work
  }
];
