import {debounce} from './utils.js'
import {getScrollbarWidth} from './utils.js'
import {get_width_of_page} from './utils.js'

const HOVER_OFFSET = 4;
const TOC_INACTIVE_BG_COLOR = "#2D2D2D";
const TOC_ACTIVE_BG_COLOR = "#3D3D3D"; //"#fff";
const TOC_AMOUNT_OF_COLS = 5; // from _grid-setting.scss
const GRID_COLS_TOTAL = 16; // from _grid-setting.scss
const SCROLLBAR_WIDTH = 8; // in px, from global.scss 
	
const offset_rs = function(rs, toggle) {
	// offset table of contents so that only the toggle button can be seen
	const screen_width = get_width_of_page();
	const offset = screen_width - (toggle.offsetWidth + SCROLLBAR_WIDTH + 40); //toc.offsetWidth - toggle.offsetWidth;
	rs.style.left = offset + "px";
}

export function init() {
	const rs = document.getElementById('rs-wrapper')
	const toggle = document.getElementById('rs-toggle')

	// set width of toc, so that it stays outside of the content column
	// WIP: implement on resize
	const screen_width = get_width_of_page();
	const col_width = screen_width / GRID_COLS_TOTAL;
	const toc_width = (col_width * TOC_AMOUNT_OF_COLS);
	rs.style.width = toc_width + "px";

	// initial offset
	offset_rs(rs, toggle)

	// show the initially hidden toc
	rs.style.visibility = "visible";

	// show full toc on click
	toggle.addEventListener('click', function() {
		if(rs.hasAttribute("data-toc-toggled")) {
			rs.removeAttribute("data-toc-toggled")

			// WIP: hover background color stops working after this is fired

			rs.style.backgroundColor = TOC_INACTIVE_BG_COLOR;
			offset_rs(rs, toggle)

		} else {
			rs.setAttribute("data-toc-toggled", "")
			rs.style.backgroundColor = TOC_ACTIVE_BG_COLOR;
			const page_width = get_width_of_page()
			const offset = page_width - rs.offsetWidth;
			rs.style.left = offset + "px";
		}
	})

	//show a little bit of toc on hover
	toggle.addEventListener('mouseenter', function() {
		if(!rs.hasAttribute("data-toc-toggled")) {
			toggle.style.cursor = "w-resize";
		} else {
			toggle.style.cursor = "e-resize";
		}
	})

	// table of contents scaling
	window.addEventListener('resize', debounce(function() {
		if(!rs.hasAttribute("data-toc-toggled")) {
			offset_rs(rs, toggle)
		}
	}, 10))
}