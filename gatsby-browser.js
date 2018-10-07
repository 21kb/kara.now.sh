require('./src/styles/global.css');
const ReactGA = require('react-ga');

ReactGA.initialize('UA-126770080-1');

module.exports = {
  onRouteUpdate: () => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  },
};
