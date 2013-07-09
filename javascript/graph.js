function Graph(canvas, scale, width, height) {
  this.canvas = canvas;
  this.context = canvas.getContext('2d');
  this.scale = scale;
  this.meshes = [];
  this.pointRadius = 10;
  this.unitIndicatorLength = 8;

  canvas.width = width*window.devicePixelRatio;
  canvas.height = height*window.devicePixelRatio;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
}

Graph.prototype = {
  render: function() {
    this.renderAxes();
    this.renderMeshes();
  },
  renderMeshes: function() {
    var mesh;
    for(var i=0; this.meshes.length>i; i++) {
      mesh = this.meshes[i];
      this.renderEdges(mesh.edges, mesh.color);
    }
    for(var i=0; this.meshes.length>i; i++) {
      mesh = this.meshes[i];
      this.renderPoints(mesh.points, mesh.color);
    }
  },
  renderEdges: function(edges, color) {
    edges.forEach(function(edge) {
      this.renderEdge(edge, color);
    }.bind(this));
  },
  renderPoints: function(points, color) {
    points.forEach(function(point) {
      this.renderPoint(point, color);
    }.bind(this));
  },
  renderEdge: function(edge, color) {
    this.context.lineWidth = 2;

    this.context.strokeStyle = color;
    this.context.beginPath();
    this.context.moveTo(this.getLeft(edge.start.x), this.getTop(edge.start.y));
    this.context.lineTo(this.getLeft(edge.end.x), this.getTop(edge.end.y));
    this.context.stroke();
  },
  renderPoint: function(point, color) {
    this.context.fillStyle = color;
    this.context.beginPath();
    this.context.arc(this.getLeft(point.x), this.getTop(point.y), this.pointRadius, 0, Math.PI*2, true); 
    this.context.closePath();
    this.context.fill();
  },
  renderAxes: function() {
    var i;

    this.context.lineWidth = 4;
    this.context.beginPath();
    this.context.moveTo(this.canvas.width/2, 0);
    this.context.lineTo(this.canvas.width/2, this.canvas.height);
    this.context.stroke();

    for(i=0; this.canvas.width/this.scale>=i; i++) {
      this.context.beginPath();
      this.context.moveTo(i*this.scale, this.canvas.height/2+this.unitIndicatorLength);
      this.context.lineTo(i*this.scale, this.canvas.height/2-this.unitIndicatorLength);
      this.context.stroke();
    }

    this.context.beginPath();
    this.context.moveTo(0, this.canvas.height/2);
    this.context.lineTo(this.canvas.width, this.canvas.height/2);
    this.context.stroke();

    for(i=0; this.canvas.height/this.scale>=i; i++) {
      this.context.beginPath();
      this.context.moveTo(this.canvas.width/2+this.unitIndicatorLength, i*this.scale);
      this.context.lineTo(this.canvas.width/2-this.unitIndicatorLength, i*this.scale);
      this.context.stroke();
    }
  },
  getLeft: function(x) {
    return this.canvas.width/2 + x*this.scale;
  },
  getTop: function(y) {
    return this.canvas.height/2 + -y*this.scale;
  }
};
