import Me from './app/Me';
import Work from './app/Work';
import Project from './app/Project';

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
  },
  {
    pattern: '/projects',
    name: 'Projects',
    icon: 'book',
    component: Project
  }
];
