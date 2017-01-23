const pino = require('pino')
const assign = require('object-assign')

module.exports = {
  needs: {
    config: {
      log: {
        stream: 'first',
        name: 'first',
        serializers: 'map',
        level: 'first',
        enabled: 'first'
      }
    }
  },
  gives: {
    config: {
      log: {
        stream: true,
        name: true,
        serializers: true,
        level: true,
        enabled: true
      }
    },
    log: {
      child: true,
      fatal: true,
      error: true,
      warn: true,
      info: true,
      debug: true,
      trace: true
    }
  },
  create: (api) => {
    var log
    return {
      config: {
        log: {
          stream: () => process.stdout,
          name: () => {},
          serializers: () => [],
          level: () => 'info',
          enabled: () => true
        }
      },
      log: {
        child: Child,
        fatal: LogLevel('fatal'),
        error: LogLevel('error'),
        warn: LogLevel('warn'),
        info: LogLevel('info'),
        debug: LogLevel('debug'),
        trace: LogLevel('trace')
      }
    }

    function Log () {
      if (log === undefined) {
        const config = api.config.log
        const options = {
          name: config.name(),
          serializers: assign(...config.serializers()),
          level: config.level(),
          enabled: config.enabled()
        }
        const stream = config.stream()
        log = pino(options, stream)
      }
      return log
    }

    function Child (bindings) {
      const child = Log().child(bindings)
      return {
        child: child.child.bind(child),
        fatal: child.fatal.bind(child),
        error: child.error.bind(child),
        warn: child.warn.bind(child),
        info: child.info.bind(child),
        debug: child.debug.bind(child),
        trace: child.trace.bind(child)
      }
    }

    function LogLevel (level) {
      return (a, b, c, d, e, f, g, h, j, k) => {
        Log()[level](a, b, c, d, e, f, g, h, j, k)
        return true
      }
    }
  }
}
