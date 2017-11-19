# Quasar App

> A Quasar project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ quasar dev

# build for production with minification
$ quasar build

# lint code
$ quasar lint
```


## Environment
* Macbook Pro late 2013, macOS High Sierra (10.13.1), Intel i7 2.7GHz, 16Gb RAM, 256Gb SSD;
* Using Google Chrome Canary v64.0.3273.0 (Official Build) canary (64-bit);
* Web app hosted at: https://pablohpsilva.github.io/toodo ;
* Internet hired: 60Mb Brazil;
* Internet speed (average): 6 Mbps;
* Internet latency (average): 29.8ms;

## Measurements

### App build output
```
          fonts/Roboto-Bold.ad140ff.woff    89.2 kB
fonts/MaterialIcons-Regular.012cf6a.woff    57.6 kB
         fonts/Roboto-Light.37fbbba.woff    89.2 kB
       fonts/Roboto-Regular.081b11e.woff    89.4 kB
        fonts/Roboto-Medium.303ded6.woff    89.7 kB
          fonts/Roboto-Thin.90d3804.woff    87.8 kB
            js/0.4473108481bbf6322437.js      24 kB
            js/1.3ae311ee644d8961a15d.js    1.86 kB
                               js/app.js     270 kB  [big]
app.4c805a02ed26becdba812fc011640591.css     127 kB
                              index.html  522 bytes
```

### Network:

|    What                     |   Measure   |
|:----------------------------|:------------|
|    Requests                 |      6      |
| KB transferred              |    291KB    |
| DOMContentLoaded (average)  |   541.3ms   |
| Load time (average)         |  1241.7ms   |


### Performance:

|      What             |   Time    |
|:----------------------|:----------|
| Loading (average)     | 6.839ms   |
| Scripting (average)   | 91ms      |
| Rendering (average)   | 39.1ms    |
| Painting (average)    | 14.8ms    |
| Other (average)       | 100.5ms   |

<!--
var sum = (arr) => arr.reduce((acc, curr) => curr + acc; return acc, 0)

// Measures:
var measuresDOMContentLoadedMilliseconds = []
var measuresLoadTimeMilliseconds         = []
var measuresLoadingMilliseconds          = []
var measuresScriptingMilliseconds        = []
var measuresRenderingMilliseconds        = []
var measuresPaintingMilliseconds         = []
var measuresOtherMilliseconds            = []


var measures = [
  measuresDOMContentLoadedMilliseconds,
  measuresLoadTimeMilliseconds,
  measuresLoadingMilliseconds,
  measuresScriptingMilliseconds,
  measuresRenderingMilliseconds,
  measuresPaintingMilliseconds,
  measuresOtherMilliseconds
]

console.log(measures.map(el => sum(el) / el.length))

// console:
[
  541.3,
  1241.7,
  6.839999999999999,
  91.00000000000001,
  39.1,
  14.8,
  100.96
]

-->
