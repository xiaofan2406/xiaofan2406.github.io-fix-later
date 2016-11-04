import axios from 'axios';


function generateGithubData(item) {
  return new Promise((resolve, reject) => {
    axios.get(`https://api.github.com/repos/${item.slug}`)
    .then((res) => {
      const content = `
        <p>${res.data.description}</p>
      `;
      resolve(content);
    })
    .catch(reject);
  });
}

function generateNpmData(item) {
  return new Promise((resolve, reject) => {
    axios.get(`https://api.npms.io/v2/package/${item.slug}`)
    .then((res) => {
      const content = `
        <p>${res.data.collected.metadata.description}</p>
      `;
      resolve(content);
    })
    .catch(reject);
  });
}


export function getData() {
  const raw = require('./data'); // eslint-disable-line global-require

  return Promise.all(raw.map(async (item) => {
    switch (item.type) {
      case 'static':
      case 'external':
        return item;
      case 'github':
        return {
          ...item,
          content: await generateGithubData(item),
          link: `https://github.com/${item.slug}`
        };
      case 'npm':
        return {
          ...item,
          content: await generateNpmData(item),
          link: `https://www.npmjs.com/package/${item.slug}`
        };
      default:
        return item;
    }
  }));
}


export default {
  getData
};
