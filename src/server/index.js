import axios from 'axios';


function safeAnchor(href, content) {
  return `<a target="_blank" rel="noopener noreferrer" href="${href}">${content}</a>`;
}

function generateGithubData(item) {
  return new Promise((resolve, reject) => {
    axios.get(`https://api.github.com/repos/${item.slug}`)
    .then((res) => {
      const content = `
        <h4>${safeAnchor(res.data.html_url, res.data.name)}</h4>
        <pre>${res.data.description}</pre>
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
        <h4>${safeAnchor(res.data.collected.metadata.links.npm, res.data.collected.metadata.name)}</h4>
        <pre>${res.data.collected.metadata.description}</pre>
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
        return item;
      case 'github':
        return {
          ...item,
          content: await generateGithubData(item)
        };
      case 'npm':
        return {
          ...item,
          content: await generateNpmData(item)
        };
      default:
        return item;
    }
  }));
}


export default {
  getData
};
