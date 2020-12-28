//======================
//Navbar + Pagepiling.js
//======================

$(document).ready(function () {
	$("#pagepiling").pagepiling({
	  menu: "#myMenu",
	  scrollingSpeed: 200,
	  anchors: ["home", "about","stuff"],
	  sectionsColor: ["#000", "#000", "#000", "#000", "#000", "#000"],
	  afterRender: function () {
		$("#menu").addClass("custom");
	  },
	  afterLoad: function (anchorLink, index) {
		if (index > 1) {
		  $("#menu").removeClass("custom");
		} else {
		  $("#menu").addClass("custom");
		}
	  },
	});
  });