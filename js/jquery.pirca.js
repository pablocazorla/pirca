/* Pirca Plugin
 * @author: Pablo Cazorla
 * @e-mail: pablo.cazorla@huddle.com.ar
 * @date: 22/08/2012
 */
var Pirca = (function($) {
	"use strict";
	return function(selection, options) {
		var config = $.extend({
				classElements: 'box',
				width:100
			}, options),
			$grid = (function() {
				var g = $(selection).eq(0);
				if (g.css('position') === 'static') {
					g.css('position', 'relative');
				}
				return g;
			})(),
			$boxes = $(selection).find('>.' + config.classElements).css('position', 'absolute'),
			segments,
			render = function() {
				var len = 0;
				segments = (function(){
					var arr = [],
						len = Math.ceil($grid.width()/config.width);
					for(var i = 0;i<len;i++){
						arr.push([i,0]);
					}
					return arr;
				})();



				$boxes.each(function(){
					var $this = $(this),
						segs = Math.ceil($this.width()/config.width),
						h = $this.height();

					var segmentsOrdered = segments;




				});





				[
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