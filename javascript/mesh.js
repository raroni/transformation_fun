function Mesh() {
  this.points = [];
  this.edges = [];
}

Mesh.prototype = {
  getCopy: function() {
    var mesh = new Mesh();
    this.points.forEach(function(point) {
      mesh.points.push(point.getCopy());
    });
    this.edges.forEach(function(edge) {
      var startPoint = mesh.points.filter(function(p) { return p[0] == edge.start[0] && p[1] == edge.start[1]; })[0];
      var endPoint = mesh.points.filter(function(p) { return p[0] == edge.end[0] && p[1] == edge.end[1]; })[0];
      var edgeCopy = new Edge(startPoint, endPoint);
      mesh.edges.push(edgeCopy);
    });

    return mesh;
  },
  transform: function(transformation) {
    this.points.forEach(function(point) {
      point.transform(transformation);
    })
  }
};
