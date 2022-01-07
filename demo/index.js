var graph = require('../');

// We use svg renderer, but this could be any renderer
var render = require('ngraph.svg');
var svg = render.svg;

var renderer = render(graph, {
  physics: {
    springLength : 35,
    springCoefficient : 0.00055,
    dragCoefficient : 0.09,
    gravity : -1
  }
});

renderer.node(function() {
  return svg('circle', {
    r: 7,
    stroke: '#fff',
    fill: '#ff00ef',
    'stroke-width': '1.5px'
  });
}).placeNode(function nodePositionCallback(nodeUI, pos) {
  nodeUI.attr('cx', pos.x).attr('cy', pos.y);
});


renderer.run();
