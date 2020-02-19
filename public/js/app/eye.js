'use strict';

var b = document.body;
var i = document.querySelector('#eye');
var p = document.querySelector('#pupil');
var iw = i.offsetWidth / 2;
var ih = i.offsetHeight / 2;
var pw = p.offsetWidth / 2;
var ph = p.offsetHeight / 2;

b.addEventListener('mousemove', e => {
  var x1 = b.offsetWidth / 2;
  var y1 = b.offsetHeight / 2;
  var x2 = e.clientX;
  var y2 = e.clientY;
  var px = x2 - x1;
  var py = y2 - y1;
  var t = Math.atan2(py, px);
  var ax = iw + pw * Math.cos(t);
  var ay = ih + ph * Math.sin(t);

  if (x2 > x1 && y2 > y1) {
    px = px + iw > ax ? ax - iw : px;
    py = py + ih > ay ? ay - ih : py;
  } else
  if (x2 < x1 && y2 < y1) {
    px = px + iw < ax ? ax - iw : px;
    py = py + ih < ay ? ay - ih : py;
  } else
  if (x2 > x1 && y2 < y1) {
    px = px + iw > ax ? ax - iw : px;
    py = py + ih < ay ? ay - ih : py;
  } else
  if (x2 < x1 && y2 > y1) {
    px = px + iw < ax ? ax - iw : px;
    py = py + ih > ay ? ay - ih : py;
  }

  p.style.left = px + pw + 'px';
  p.style.top = py + pw + 'px';
});

b.addEventListener('mouseleave', e => {
  p.style.left = 'calc(50% - ' + pw + 'px)';
  p.style.top = 'calc(50% - ' + ph + 'px)';
});