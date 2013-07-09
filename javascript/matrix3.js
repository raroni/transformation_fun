function Matrix3() {
  var column, i;

  for(i=0; 2>=i; i++) {
    this[i] = [];
  }

  for(var i=0; arguments.length>i; i++) {
    column = i % 3;
    this[column][Math.floor(i/3)] = arguments[i];
  }
}

Matrix3.prototype = {
  multiply: function(vectorOrMatrix) {
    if(vectorOrMatrix instanceof  Vector2) {
      return this.multiplyVector2(vectorOrMatrix);
    }
    else if(vectorOrMatrix instanceof Matrix3) {
      return this.multiplyMatrix3(vectorOrMatrix);
    } else {
      throw new Error('Cannot multiply ' + vectorOrMatrix + '.');
    }
  },
  multiplyMatrix3: function(other) {
    var components = [];
    for(i=0; 9>i; i++) components[i] = 0;
    for(var row=0; 3>row; row++) {
      for(var column=0; 3>column; column++) {
        for(var i=0; 3>i; i++) {
          components[row*3+column] += this[i][row] * other[column][i];
        }
      }
    }
    var factoryFunction = Matrix3.bind.apply(Matrix3, [null].concat(components));
    var matrix = new factoryFunction();
    return matrix;
  },
  multiplyVector2: function(vector) {
    var components = [0, 0, 0];
    for(var row=0; 3>row; row++) {
      for(var column=0; 3>column; column++) {
        components[row] += vector[column] * this[column][row];
      }
    }
    var result = new Vector2(components[0], components[1], components[2]);
    return result;
  }
};

Matrix3.translation = function(x, y) {
  var translation = new Matrix3(
    1, 0, x,
    0, 1, y,
    0, 0 , 1
  );

  return translation;
};

Matrix3.rotation = function(angle) {
  angle *= -1;
  var rotation = new Matrix3(
    Math.cos(angle), Math.sin(angle), 0,
    -Math.sin(angle), Math.cos(angle), 0,
    0, 0, 1
  );
  
  return rotation;
}
