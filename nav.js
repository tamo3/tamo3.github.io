// Based on: https://stackoverflow.com/questions/44502243/single-navigation-bar-across-website

// var html =
//   '<ul>\
// <li><a href="index.html">Home</a></li>\
// <li><a href="1-photos.html">Photos</a></li>\
// <li><a href="2-music.html">Music</a></li>\
// <li><a href="3-tech.html">Technology</a></li>\
// </ul>';

var html = '<ul class="navbar-nav">\
<li class="nav-item active">  <a class="nav-link"  href="#">Home</a></li>\
<li class="nav-item"><a class="nav-link"  href="2-photos.html">Photos</a></li>\
<li class="nav-item"><a class="nav-link"  href="#">Music</a></li>\
<li class="nav-item"><a class="nav-link"  href="#">Technology</a></li>\
</ul>';

document.getElementById('nav').innerHTML = html;


