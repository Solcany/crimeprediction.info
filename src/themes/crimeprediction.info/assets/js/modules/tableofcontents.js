import {debounce} from './utils.js'
import {getScrollbarWidth} from './utils.js'
import {get_width_of_page} from './utils.js'

const HOVER_OFFSET = 4;
const TOC_INACTIVE_BG_COLOR = "#2D2D2D";
const TOC_ACTIVE_BG_COLOR = "#3D3D3D"; //"#fff";
const TOC_AMOUNT_OF_COLS = 5; // from _grid-setting.scss
const GRID_COLS_TOTAL = 16; // from _grid-setting.scss
const SCROLLBAR_WIDTH = 8; // px
	
const offset_toc = function(toc, toggle) {
	// offset table of contents so that only the toggle button can be seen
	const screen_width = get_width_of_page();
	const offset = screen_width - (toggle.offsetWidth + SCROLLBAR_WIDTH); //toc.offsetWidth - toggle.offsetWidth;
	toc.style.left = offset + "px";
}

export function init() {
	const toc = document.getElementById('toc-wrapper')
	const toggle = document.getElementById('toc-toggle')

	// set width of toc, so that it stays outside of the content column
	// WIP: implement on resize
	const screen_width = get_width_of_page();
	const col_width = screen_width / GRID_COLS_TOTAL;
	const toc_width = (col_width * TOC_AMOUNT_OF_COLS);
	toc.style.width = toc_width + "px";

	// initial offset
	offset_toc(toc, toggle)

	// show the initially hidden toc
	toc.style.visibility = "visible";

	// show full toc on click
	toggle.addEventListener('click', function() {
		if(toc.hasAttribute("data-toc-toggled")) {
			toc.removeAttribute("data-toc-toggled")

			// WIP: hover background color stops working after this is fired

			toc.style.backgroundColor = TOC_INACTIVE_BG_COLOR;
			offset_toc(toc, toggle)

		} else {
			toc.setAttribute("data-toc-toggled", "")
			toc.style.backgroundColor = TOC_ACTIVE_BG_COLOR;
			const page_width = get_width_of_page()
			const offset = page_width - toc.offsetWidth;
			toc.style.left = offset + "px";
		}
	})

	//show a little bit of toc on hover
	toggle.addEventListener('mouseenter', function() {
		if(!toc.hasAttribute("data-toc-toggled")) {
			toggle.style.cursor = "w-resize";
		} else {
			toggle.style.cursor = "e-resize";
		}
	})

	// table of contents scaling
	window.addEventListener('resize', debounce(function() {
		if(!toc.hasAttribute("data-toc-toggled")) {
			offset_toc(toc, toggle)
		}
	}, 10))
}