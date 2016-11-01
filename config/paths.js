const path = require('path');

const rootDir = path.join(__dirname, '..');
const srcDir = path.join(rootDir, 'src');
const nodeModulesDir = path.join(rootDir, 'node_modules');


module.exports = {
  rootDir,
  srcDir,
  nodeModulesDir
};
