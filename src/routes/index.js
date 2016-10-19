import axios from 'axios';

export default [
  {
    pattern: '/',
    exactly: true,
    name: 'Me',
    icon: 'user',
    preload() {
      return new Promise((resolve, reject) => {
        axios.get('https://api.github.com/users/xiaofan2406')
        .then((values) => {
          resolve({
            github: values[0]
          });
        })
        .catch(reject);
      });
    },
    data: 'me.json'
  },
  {
    pattern: '/work',
    name: 'Work',
    icon: 'environment',
    preload() {
      return new Promise((resolve, reject) => {
        Promise.all([
          axios.get('https://api.github.com/users/xiaofan2406')
        ])
        .then((values) => {
          resolve({
            github: values[0]
          });
        })
        .catch(reject);
      });
    },
    data: 'work.json'
  },
  {
    pattern: '/projects',
    name: 'Project',
    icon: 'book',
    preload() {
      return new Promise((resolve, reject) => {
        Promise.all([
          axios.get('https://api.github.com/users/xiaofan2406')
        ])
        .then((values) => {
          resolve({
            github: values[0]
          });
        })
        .catch(reject);
      });
    },
    data: 'project.json'
  }
];
