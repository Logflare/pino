global.process = { __proto__: process, pid: 123456 }
Date.now = function () { return 1459875739796 }
require('os').hostname = function () { return 'abcdefghijklmnopqr' }
var pino = require(require.resolve('./../../../'))
var log = pino({ prettyPrint: true })
process.once('beforeExit', pino.final(log, (_, logger) => {
  logger.info('beforeExit')
}))
