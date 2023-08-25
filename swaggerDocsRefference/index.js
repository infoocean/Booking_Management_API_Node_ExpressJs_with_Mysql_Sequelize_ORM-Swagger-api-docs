const basicInfo = require('./basicInfo');
const servers = require('./server');
const components = require('./components');
const tags = require('./tags');
const modules = require('./modules')

module.exports = {
  ...basicInfo,
  ...servers,
  ...components,
  ...tags,
  ...modules,
};