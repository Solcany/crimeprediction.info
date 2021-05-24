export function debounce(func, wait=25, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

export function get_array_range(length) {
  return [...Array(length).keys()]
}

export function rerange(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

export function get_height_of_page() {
	var body = document.body,
    	html = document.documentElement;
	return Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
}

export function get_width_of_page() {
    var html = document.documentElement;
	return Math.max( html.clientWidth, window.innerWidth );
}

export function round_to_two(num) {    
    return Number(Math.round(num + "e+2")  + "e-2");
}

export function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}