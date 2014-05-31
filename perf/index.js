/*
 * bootstrap
 */

 document.addEventListener('DOMContentLoaded', function() {
 	doStuff();
 })

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
 
