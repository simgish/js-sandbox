/*
 * bootstrap
 */

 document.addEventListener('DOMContentLoaded', function() {
 	doStuff();
 })

/*
 * classes
 */

var hasClass = function hasClass(el, className) {
	return new RegExp(' ' + className + '').test(' ' + elem.className + ' ');
}

var addClass = function addClass(el, className) {
 	el.classList.add(className);
}

var toggleClass = function removeClass(el, className) {
	el.classList.toggle(className);
}


/*
 * selectors
 */

var sel = function sel(el) {
	return document.querySelector(el);
}

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
 
