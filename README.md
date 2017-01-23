# catstack-log

[depject module](https://github.com/dominictarr/depject) for logging.

exports a subset of the [`pino`](https://github.com/pinojs/pino) API.

```shell
npm install --save ahdinosaur/catstack-log
```

## usage

### `Log = require('catstack-log')`

### [`log = Log.create(api)`](https://github.com/pinojs/pino/blob/master/docs/API.md#pinooptions-stream)

`log` can be configured with the following plugs:

```js
{
  config: {
    log: {
      stream,
      name,
      serializers,
      level,
      enabled 
    }
  }
}
```

### [`childLog = log.child(bindings)`](https://github.com/pinojs/pino/blob/master/docs/API.md#childbindings)

### [`log.fatal([obj], msg, [...])`](https://github.com/pinojs/pino/blob/master/docs/API.md#fatalobj-msg-)
### [`log.error([obj], msg, [...])`](https://github.com/pinojs/pino/blob/master/docs/API.md#errorobj-msg-)
### [`log.warn([obj], msg, [...])`](https://github.com/pinojs/pino/blob/master/docs/API.md#warnobj-msg-)
### [`log.info([obj], msg, [...])`](https://github.com/pinojs/pino/blob/master/docs/API.md#infoobj-msg-)
### [`log.debug([obj], msg, [...])`](https://github.com/pinojs/pino/blob/master/docs/API.md#debugobj-msg-)
### [`log.trace([obj], msg, [...])`](https://github.com/pinojs/pino/blob/master/docs/API.md#traceobj-msg-)


## license

The Apache License

Copyright &copy; 2017 Michael Williams

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
