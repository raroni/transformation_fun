(function() {
  function initialize() {
    var canvas = document.querySelector('.graph');
    var graph = new MyGraph(canvas);
    graph.render();
  }

  window.addEventListener('load', initialize);
})();
