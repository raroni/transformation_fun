function Vector2(x, y) {
  this.set(x, y);
}

Vector2.prototype = {
  getCopy: function() {
    var Vector = new Vector2(this.x, this.y);
    return Vector;
  },
  transform: function(transformation) {
    var vector = transformation.multiply(this);
    this.set(vector[0], vector[1]);
  },
  set: function(x, y) {
    this.x = x;
    this.y = y;
    this[0] = x;
    this[1] = y;
    this[2] = 1;
  }
}
