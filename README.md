Transformation fun
==================

I wrote this Javascript application to improve my understanding of matrix transformations of vertices. To keep things simple I chose to do it in 2D.

This turned out to be a very educational exercise for me. I think others who want to be better at joggling transformations can benefit from reading the code. Or better yet, re-writing it own their own :-)

The meat of the application is in `MyGraph`'s constructor (see `my_graph.js`). When everything is set up properly matrix transformations are a thing of beauty:

    var rotatedHouse = originalHouse.getCopy();
    transformation = Matrix3.translation(5, 3);
    transformation = transformation.multiply(Matrix3.rotation(Math.PI/4));
    transformation = transformation.multiply(Matrix3.translation(-5, -3));
    rotatedHouse.transform(transformation);

![Screenshot of transformation fun](http://rasmusrn.github.io/transformation_fun/ss.jpg)

How to run
----------

Just host the static files through a web server and view the directory through a browser. On a Mac you can do this just by entering `python -m SimpleHTTPServer 8000` in your terminal and then visit `http://localhost:8000/`.
