# miserables [![Build Status](https://travis-ci.org/anvaka/miserables.svg)](https://travis-ci.org/anvaka/miserables)

The encounters between the characters of Les Misérables as a graph (see [`ngraph.graph`](https://github.com/anvaka/ngraph.graph)
for the API):

![Les Miserables graph](https://cloud.githubusercontent.com/assets/225407/11013996/91160ad2-84d8-11e5-9f4a-b7a8a2d4d578.png)

I'm just using this graph over and over, so I thought it's a good time to
extract it into npm module.

Original graph was created by Donald Knuth [here](http://www-cs-staff.stanford.edu/~uno/sgb.html).

# usage

``` js
var graph = require('miserables');
// Graph is now an instance of ngraph.graph:
assert(graph.getLinksCount() > 0);
assert(graph.getNodesCount() > 0);

// For simplicity exported instance is a singletone, but if you need to
// have multiple instances of this graph, then use `create()` method:
var create = require('miserables').create;
var g1 = create();
var g2 = create();
assert(g1 !== g2);
assert(g1.getLinksCount() === g2.getLinksCount());
```

# install

With [npm](https://npmjs.org) do:

```
npm install miserables
```

# license

MIT
