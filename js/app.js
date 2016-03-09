$('document').ready(function() {
	"use strict";

	var $grid = $('#grid');

	var width = 100,
		height = 60,
		margin = 10,
		options = 3,
		total = 4;
	for (var i = 0; i < total; i++) {
		var w = width * (Math.floor(Math.random() * options) + 1),
			h = height * (Math.floor(Math.random() * options) + 1);
		$('<div class="box" style="width:' + w + 'px;height:' + h + 'px;"></div>').appendTo($grid);
	}
	//
	var myPirca = Pirca($grid);
});