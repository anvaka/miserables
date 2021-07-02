var g  = require('../');
var test = require('tap').test;

test('it creates graph', function(t) {
  t.ok(g.getLinksCount() > 0, 'Graph has links');
  t.ok(g.getNodesCount() > 0, 'And graph has nodes');
  t.end();
});

test('it can create copies of the graph', function(t) {
  var otherGraph = g.create();

  t.equal(otherGraph.getLinksCount(), g.getLinksCount(), 'Graph has links');
  t.equal(otherGraph.getNodesCount(), g.getNodesCount(), 'And graph has nodes');
  t.not(otherGraph, g, 'Instances are not the same');
  t.end();
});
