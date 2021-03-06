var width, height, center;

var handleHighlightColor = "#666";
var handleDimOpacity = 0.3;
var handleOverOpacity = 0.5;

var mousePos = view.center / 2;
var pathHeight = mousePos.y;
var mouseIsDown = false;
var circles = [];

var centerX = window.innerWidth / 2;
var centerY = window.innerHeight / 2;
var startY = centerY - 200;
var endY = centerY + 200;

var handleCount = 10;
var shapeWidth = 100;

var path;

initializePath();
console.log(spectrum);

function onFrame(event) {
  if (getInput) {
    updatePath();
  };
}

function initializePath() {
  var i = 0;
  var x = 100;
  var y = startY;
  var yStep = (endY - startY) / (handleCount + 1);

  // CHOOSE THE BODY COLOR, HAIRS, ETC
  var h = Math.random();
  var bodyColor = HSVColor.hsvToHex(h, 0.4, 0.9);

  // hue shift the secondary color by half of the color spectrum (green -> red, etc)
  h += 0.5;
  if (h > 1.0) h -= 1.0; // hue only goes up to 1, so loop around otherwise

  var hairColor = HSVColor.hsvToHex(h, 0.4, 0.9);

  path = new Path({
    fillColor: bodyColor,
    strokeWidth: Math.random() * 20 + 10,
    strokeColor: hairColor,
    dashArray: [Math.random() * 5, Math.random() * 8 + 2]
  });

  // MAKE THE EYES
  var eyeSize = 5 + Math.random() * 15;
  var irisSize = eyeSize / 3.0;
  var irisShiftX = (Math.random() - 0.5) * irisSize;
  var irisShiftY = (Math.random() - 0.5) * irisSize;

  var rightEye = new Path.Circle(new Point(centerX + 20, startY + 100), eyeSize);
  rightEye.fillColor = "white";

  var rightIris = new Path.Circle(new Point(irisShiftX + centerX + 20,
    irisShiftY + startY + 100), irisSize);
  rightIris.fillColor = "black";

  var leftEye = new Path.Circle(new Point(centerX - 20, startY + 100), eyeSize);
  leftEye.fillColor = "white";

  var leftIris = new Path.Circle(new Point(irisShiftX + centerX - 20,
    irisShiftY + startY + 100), irisSize);
  leftIris.fillColor = "black";

  // CREATE THE BODY OF THE AMOEBA, AND THE DRAGGABLE HANDLES

  path.add(new Point(centerX, startY));

  while (i < handleCount) {
    x = centerX + Math.sin(Math.PI * ((i + 1) / (handleCount + 1))) *
      shapeWidth + Math.random() * 50;
    y += yStep;

    var c = new Path.Circle(new Point(x, y), 15);
    c.fillColor = "white";
    c.opacity = handleDimOpacity;

    addMouseEvents(c);
    circles.push(c);
    path.add(c.position);
    circles[i].pathRightId = path.segments.length - 1;
    i++;
  }

  path.add(new Point(centerX, endY));

  // LOOP AROUND FOR THE LEFT SIDE, WHICH IS MIRRORED

  while (i > 0) {
    i--;
    y -= yStep;
    x = centerX - 100;
    path.add(new Point(x, y));
    circles[i].pathLeftId = path.segments.length - 1;
  }

  path.closePath();

  updatePath();
}

// UPDATE THE PATH POINTS TO MATCH THE HANDLE POSITIONS

function updatePath() {
  var i = 0;
  var c, s;
  while (i < circles.length) {
    c = circles[i];
    right = path.segments[c.pathRightId];
    left = path.segments[c.pathLeftId];

    //right.point.x = c.position.x;
    if (getInput) {
      right.point.x = simpleSpectrum[i] + 400;
      console.log(simpleSpectrum[i]);
    } else {
      right.point.x = c.position.x;
      console.log(c.position.x);
    }
    right.point.y = c.position.y;

    left.point.x = centerX - (right.point.x - centerX);
    left.point.y = right.point.y;
    i++;
  }
  path.smooth();
}

// ADD MOUSE EVENTS TO THE HANDLES

function addMouseEvents(obj) {
  obj.on({
    mousedown: function (event) {
      mouseIsDown = true;
    },
    mouseup: function (event) {
      mouseIsDown = false;
    },
    mousedrag: function (event) {
      this.position += event.delta;
      updatePath();
    },
    mouseenter: function (event) {
      this.opacity = handleOverOpacity;
    },
    mouseleave: function (event) {
      this.opacity = handleDimOpacity;
    }
  });
}