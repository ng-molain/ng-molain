const _ = require('lodash');

const GLOBAL_PROXY_ITEM_CONFIG = {
  "changeOrigin": true,
  "secure": false,
  "bypass": function (req, res, proxyOptions) {
    req.headers["Origin"] = "http://" + req.headers['host'];
  },
  "logLevel": "debug"
};

const PROXY_CONFIGS = {
  local: {
    "/api/report-native": {
      "target": "http://localhost:7091",
      "pathRewrite": {
        "^/api/report-native": "/report-native"
      }
    },
    "/api": {
      "target": "http://localhost:8085"
    },
    "/content": {
      "target": "http://localhost:8085"
    },
  }
};

_.forEach(PROXY_CONFIGS, (conf, env) => {
  _.forEach(conf, (item, path) => {
    const defaultPathRewrite = {};
    _.set(defaultPathRewrite, ['pathRewrite', `^${path}`], `${path}`);

    conf[path] = _.assign({}, GLOBAL_PROXY_ITEM_CONFIG, (_.has(item, 'pathRewrite') ? {} : defaultPathRewrite), item);
  })
});
// console.log(PROXY_CONFIGS)

const PROXY_CONFIG_DEFAULT = PROXY_CONFIGS['local'];
const proxyTarget = process.env['NG_PROXY_TARGET'];

const proxyConfig = _.get(PROXY_CONFIGS, proxyTarget, PROXY_CONFIG_DEFAULT);

console.log("当前代理目标：\n", _.map(proxyConfig, (value, key) => `${key}:${value.target}`));

module.exports = proxyConfig;
