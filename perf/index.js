/*
 * bootstrap
 */

var ready = function ready() {
 document.addEventListener('DOMContentLoaded', function() {
 	doStuff();
 });
}

/*
 * classes
 */

var hasClass = function hasClass(el, className) {
	return new RegExp(' ' + className + '').test(' ' + elem.className + ' ');
}

var addClass = function addClass(el, className) {
 	el.classList.add(className);
}

/*
 * selectors
 */

var sel = function sel(el) {
	return document.querySelector(el);
}

[].forEach.call(document.querySelector(el), function(f) {
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
 
