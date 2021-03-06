const { app, server } = require('./server');
const awsServerlessExpress = require('aws-serverless-express');

module.exports.handler = (event, context) => {
  app.prepare().then(() => {
    return awsServerlessExpress.proxy(
      awsServerlessExpress.createServer(server),
      event,
      context
    );
  });
};
