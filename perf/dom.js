var init = function init() {
	var rootEl = document.getElementById('main');
	var frag, el;

	frag = document.createDocumentFragment();

	console.time('buildDOM');
	
	for (var i = 0; i < 1000; i++) {		
		el = document.createElement('div');
		el.style.border = '1px solid #ddd';
		el.innerHTML = 'div #' + i;
		frag.appendChild(el);
	}

	rootEl.appendChild(frag);

	console.timeEnd('buildDOM');
};

 document.addEventListener('DOMContentLoaded', function() {
 	init();
 });
