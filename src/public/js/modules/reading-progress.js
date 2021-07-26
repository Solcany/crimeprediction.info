import {debounce} from './utils.js'
import {rerange} from './utils.js'
import {get_height_of_page} from './utils.js'

export function init() {
	const progress_bar = document.getElementById("reading-progress-bar");
	const window_height = window.innerHeight;
	const page_height = get_height_of_page() - window_height;

	window.addEventListener('scroll', debounce(function() {
		let user_top_scroll = window.pageYOffset || document.documentElement.scrollTop;
		let new_width = rerange(user_top_scroll, 0, page_height, 0, 100)
		progress_bar.style.width = new_width + "%";
	}, 5))
}