/* Pirca Plugin
 * @author: Pablo Cazorla
 * @e-mail: pablo.cazorla@huddle.com.ar
 * @date: 22/08/2012
 */
var Pirca = (function($) {
	"use strict";
	return function(selection, options) {
		var config = $.extend({
				classElements: 'box'
			}, options),
			$grid = (function() {
				var g = $(selection).eq(0);
				if (g.css('position') === 'static') {
					g.css('position', 'relative');
				}
				return g;
			})(),
			$boxes = $(selection).find('>.' + config.classElements).css('position', 'absolute'),
			points,
			render = function() {
				points = [
					[0, 0]
				];
			};
		//
		render();
		//
		return {
			render: render
		};
	};
})(jQuery);