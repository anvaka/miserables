var data = require('./data.js');
var createGraph = require('ngraph.graph');
// By default we are exporting the graph itself
module.exports = createMiserablesGraph();

// But we also let people create new instances of the graph:
module.exports.create = createMiserablesGraph;

function createMiserablesGraph(){
  var graph = createGraph();

  for (var i = 0; i < data.nodes.length; ++i){
      graph.addNode(i, data.nodes[i]);
  }

  for (i = 0; i < data.links.length; ++i){
      var link = data.links[i];
      graph.addLink(link.source, link.target, link.value);
  }

  return graph;
}
