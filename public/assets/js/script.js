//======================
//Navbar + Pagepiling.js
//======================

// $(document).ready(function () {
// 	$("#pagepiling").pagepiling({
// 	  menu: "#myMenu",
// 	  scrollingSpeed: 200,
// 	  anchors: ["home", "about","stuff"],
// 	  sectionsColor: ["#000", "#000", "#000", "#000", "#000", "#000"],
// 	  afterRender: function () {
// 		$("#menu").addClass("custom");
// 	  },
// 	  afterLoad: function (anchorLink, index) {
// 		if (index > 1) {
// 		  $("#menu").removeClass("custom");
// 		} else {
// 		  $("#menu").addClass("custom");
// 		}
// 	  },
// 	});
//   });

  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', (e) => {
	  cursor.style.left = e.pageX + 'px';
	  cursor.style.top = e.pageY + 'px';
  })

  setTimeout(function(){
	document.getElementById('vid').play();
},1000);

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

var scene = document.getElementById('scene1');
var parallaxInstance = new Parallax(scene);

var scene = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene);

var scene = document.getElementById('scene3');
var parallaxInstance = new Parallax(scene);
