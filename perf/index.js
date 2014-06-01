/*
 * bootstrap
 */

 document.addEventListener('DOMContentLoaded', function() {
 	doStuff();
 })

/*
 * classes
 */

 var addClass = function addClass(el, className) {
 	if (!hasClass(el, className)) {
 		el.className += ' ' + className;
 	}
 }

var hasClass = function hasClass(el, className) {
	return new RegExp(' ' + className + '').test(' ' + elem.className + ' ');
}

/*
 * selectors
 */

 [].forEach.call(document.querySelector('a'), function(el) {
 	el.addEventListener('click', function() {
 		doStuff();
 	})
 })

/*
 * prototype method shortcuts
 */

 var _hasOwnProperty = Object.prototype.hasOwnProperty;

 if (_hasOwnProperty.call(object, 'property')) {
 	doStuff();
 }
 
