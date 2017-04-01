const express = require("express");
const helmet = require('helmet')

module.exports = function(){

  // we begin witht he basic foundation //
  const app = express();

  // use helmet.
  app.use(helmet());

  // disable x-powered
  app.disable('x-powered-by')

  // allow user to const express = require("hardened-express"); and expect most safe thigns to work.
  return app;

}
