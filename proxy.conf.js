const _ = require('lodash');

const PROXY_CONFIGS = {
  // yapi: {
  //   "/api": {
  //     "target": "http://yapi.parim.net",
  //     "secure": false,
  //     "pathRewrite": {
  //       "^/api": "/mock/15/api"
  //     }
  //   }
  // },
  // dev: {
  //   "/api": {
  //     "target": "http://dev.torhea.qimooc.net",
  //     "secure": false,
  //     "pathRewrite": {
  //       "^/api": "/api"
  //     }
  //   }
  // },
  local: {
    "/uims": {
      "target": "http://localhost:7200",
      "secure": false,
      "pathRewrite": {
        "^/uims": "/uims"
      }
    },
    "/system": {
      "target": "http://localhost:7003",
      "secure": false,
      "pathRewrite": {
        "^/system": "/system"
      }
    },
    "/v2/resources": {
      "target": "http://localhost:7004",
      "secure": false,
      "pathRewrite": {
        "^/v2/resources": "/v2/resources"
      }
    }
  }
};

_.forEach(PROXY_CONFIGS, (value) => {
  _.assign(value['/uims'], {
    "changeOrigin": true,
    "bypass": function (req, res, proxyOptions) {
      req.headers["Origin"] = "http://" + req.headers['host'];
    },
    "logLevel": "debug"
  });
  _.assign(value['/system'], {
    "changeOrigin": true,
    "bypass": function (req, res, proxyOptions) {
      req.headers["Origin"] = "http://" + req.headers['host'];
    },
    "logLevel": "debug"
  });
  _.assign(value['/resources'], {
    "changeOrigin": true,
    "bypass": function (req, res, proxyOptions) {
      req.headers["Origin"] = "http://" + req.headers['host'];
    },
    "logLevel": "debug"
  });
});

const PROXY_CONFIG_DEFAULT = PROXY_CONFIGS['local'];
const proxyTarget = process.env['NG_PROXY_TARGET'];

const proxyConfig = _.get(PROXY_CONFIGS, proxyTarget, PROXY_CONFIG_DEFAULT);

console.log("当前代理目标：", _.get(proxyConfig, ['/uims', 'target']));

module.exports = proxyConfig;
