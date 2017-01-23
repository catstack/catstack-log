const combine = require('depject')

const Log = require('./')

const Heart = {
  gives: 'heart',
  needs: {
    log: {
      child: 'first'
    }
  },
  create: (api) => () => {
    const log = api.log.child({ organ: 'heart' })
    setInterval(() => log.info('beat'), 100)
  }
}

const sockets = combine([Log, Heart])

sockets.heart[0]()
