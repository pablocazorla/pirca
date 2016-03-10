$('document').ready(function() {
	"use strict";

	var $grid = $('#grid');

	var width = 100,
		height = 60,
		margin = 10,
		options = 3,
		total = 2;

		var counter = 1;

	for (var i = 0; i < total; i++) {
		var w = width * (Math.floor(Math.random() * options) + 1),
			h = height * (Math.floor(Math.random() * options) + 1);
		$('<div class="box" id="box-'+counter+'" style="width:' + w + 'px;height:' + h + 'px;">'+counter+'</div>').appendTo($grid);
		counter++;
	}
	//
	var myPirca = Pirca($grid);


	$('#btn-add').click(function(){
		var w = width * (Math.floor(Math.random() * options) + 1),
			h = height * (Math.floor(Math.random() * options) + 1);
		var $box = $('<div class="box" id="box-'+counter+'" style="width:' + w + 'px;height:' + h + 'px;">'+counter+'</div>');
		counter++;
		myPirca.append($box);

		$box.click(function(){
			myPirca.quit($(this));
		});

	});





});