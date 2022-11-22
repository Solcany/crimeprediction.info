import {debounce} from './utils.js'
import {get_width_of_page} from './utils.js'

// WIP: PHONE BEHAVIOUR
const PANEL_AMOUNT_OF_COLS = 8; // from scss/settings/_grid-setting.scss
const GRID_COLS_TOTAL = 18; // from scss/settings/_grid-setting.scss
const SCROLLBAR_WIDTH = 0;//8; // in px, from scss/settings/_scrollbar.scss

// Media queries, from scss/settings_/media-queries.scscs
const MEDIA_QUERY_SMALL = window.matchMedia("(max-width: 768px)")

const TOGGLED_TOC_CHAPTER_MIN_HEIGHT = 20;
const ASIDE_EL_MARGIN = 10; // from <aside> ee scss/sidebar.

let TOC_FULL_WIDTH;

const get_panel_width = function() {
	const grid_column_width = get_width_of_page() / GRID_COLS_TOTAL
	const panel_expanded_width = grid_column_width * PANEL_AMOUNT_OF_COLS;
	return panel_expanded_width
}

// const track_reading_progress = function() {
// 	const headlines = document.querySelectorAll('article > h2, article > h3, article > h4')

// 	const toc = document.getElementById('TableOfContents')
// 	const toc_links = toc.querySelectorAll('a')

// 	const headlines_dist_from_top = Object.values(headlines).map(function(headline) {
// 		 return window.pageYOffset + headline.getBoundingClientRect().top
// 	})

// 	const get_currently_read_headline = function() {
// 		const user_scroll_y = window.pageYOffset;

// 	  	const differences = headlines_dist_from_top.map(function(dist) {
// 	                      								return Math.abs(user_scroll_y - dist)})
// 	  	const closest = Math.min(...differences);
// 	  	const index = differences.indexOf(closest);

// 	  	const closest_headline_dist = headlines_dist_from_top[index]
// 	  	const next_headline_dist = headlines_dist_from_top[index + 1]

// 	  	if (user_scroll_y < next_headline_dist
// 	  		&& user_scroll_y > closest_headline_dist) {
// 	  		return headlines[0]
// 	  	}
// 	}

// 	window.addEventListener('scroll', debounce(function() {
// 		console.log(get_currently_read_headline())
// 	}, 50))
// }

const folderize_toc = function() {
	const toc_chapters_raw = document.querySelectorAll('#TableOfContents > ol > li')
	toc_chapters_raw.forEach(function(chapter_raw, index) {
		chapter_raw.setAttribute("chapter", "");
		chapter_raw.classList.add("ch-" + index);
	})
	const toc_chapters = document.querySelectorAll('#TableOfContents [chapter]')

	// !!! SELECTS CONTENT FOLDERS OUTSIDE OF TOC !!!
	const article_sections = document.querySelectorAll('article section');

	// create a chapter toggle, push it to the dom
	toc_chapters.forEach(function(chapter, index) {

		let chapter_content = chapter.querySelector('ol')
		if(chapter_content != null && chapter_content != undefined) {

			// !!! THE RELATED CONTENT FOLDER OUTSIDE OF TOC !!!
			const the_section = article_sections[index];

			// create a button that can toggle chapter
			const chapter_toggle = document.createElement('button')
				  chapter_toggle.classList.add('chapter_toggle')
				  chapter_toggle.type= "button"

			// create a wrapper around the chapter link and the toggle
			const chapter_a = chapter.querySelector('a')
			const chapter_wrapper = document.createElement("div")
				  chapter_wrapper.classList.add("chapter_wrapper")
				  chapter_wrapper.appendChild(chapter_a)
				  chapter_wrapper.appendChild(chapter_toggle)

				  // prepend the wrapper to the chapter
				  chapter.prepend(chapter_wrapper)

				  // hide by all the sub-content within chapter
				  // chapter_content.style.height = "0px"
				  chapter.setAttribute("data-chapter-toggled", "false")

				  chapter_toggle.addEventListener('click', function() {
				  	if(chapter.getAttribute("data-chapter-toggled") === "false") {
				  		chapter.setAttribute("data-chapter-toggled", "true")
						chapter_content.style.height = "auto"
						let content_height = chapter_content.offsetHeight;
						chapter_content.style.minHeight = content_height + TOGGLED_TOC_CHAPTER_MIN_HEIGHT + "px"

				  	} else {
				  		chapter.setAttribute("data-chapter-toggled", "false")
						chapter_content.style.height = "45px"
						chapter_content.style.minHeight = "0px"

				  	}
					// !!! TOGGLE CONTENT FOLDER OUTSIDE OF TOC!!!
					// WIP: SYNCHRONISE WITH THE FUNC IN MANAGE-CONTENT-FOLDER.JS
					if(the_section.getAttribute("data-section-toggled") == "true") {
						let the_section_content = the_section.querySelector('div.content')
						let the_section_untoggled_height = the_section_content.getAttribute("data-untoggled_height");
						the_section.setAttribute("data-section-toggled", "false");
						the_section_content.style.height = the_section_untoggled_height + "px";
					} else {

						the_section.setAttribute("data-section-toggled", "true");
						let the_section_content = the_section.querySelector('div.content')
						the_section_content.style.height = "auto"

					}

				  })
		}
	})
}

const add_pretitles_to_labels = function() {
	const chapters_headlines = document.querySelectorAll('article button.folder-toggle');
	var pretitles = []

	// get content from the thesis article
	chapters_headlines.forEach(function(headline) {
		let pretitle = headline.querySelector('.pretitle');
		if(pretitle != undefined || null) {
			let pretitle_content = pretitle.innerHTML;
			pretitles.push(pretitle_content)
		} else {
			pretitles.push(null)

		}
	})

	const toc_chapter_wrappers = document.querySelectorAll('#TableOfContents div.chapter_wrapper');
	toc_chapter_wrappers.forEach(function(wrapper, index) {
		let pretitle = pretitles[index];
		if(pretitle != null) {
			let toc_pretitle = document.createElement('span');
				toc_pretitle.classList.add('toc_pretitle');
				toc_pretitle.innerHTML = pretitle;
				wrapper.prepend(toc_pretitle);

		}
	})
}

const adjust_labels_top_pos = function() {
	const toc_chapter_wrappers = document.querySelectorAll('#TableOfContents div.chapter_wrapper');

	toc_chapter_wrappers.forEach(function(wrapper) {
		let wrapper_height = wrapper.offsetHeight;
			wrapper_height -= 2
			wrapper_height *= -1.0
			wrapper.style.top = wrapper_height + "px";
	})
}

const adjust_self_top_pos = function() {
	const sidebar = document.querySelector('aside');
	const header_height = document.querySelector('header').offsetHeight;
	sidebar.style.top = header_height + "px";

}

const sticky_on_scroll = function() {

	window.addEventListener('scroll', debounce(function() {
		let scrollTop = Math.abs(document.body.getBoundingClientRect().top);
		let headerHeight = document.querySelector('header').offsetHeight;
		let sidebar = document.querySelector('aside');
		if(scrollTop > headerHeight) {
			sidebar.style.top = "0px";
			sidebar.style.position = "fixed";
		} else {
			sidebar.style.position = "absolute";
			adjust_self_top_pos();
		}
	}, 5))
}


const adjust_toc_on_resize = function() {
	window.addEventListener('resize', debounce(function() {
		adjust_self_top_pos();

		// update the width of toc
		const toc_toggle = document.getElementById('toc-toggle')
		TOC_FULL_WIDTH = get_responsive_toc_width(toc_toggle);

		//update toc width
		const toc = document.getElementById('TableOfContents')
		      toc.style.width = TOC_FULL_WIDTH + "px";

	}, 50))
}

const get_responsive_toc_width = function(toc_toggle) {
	let width;
	if(MEDIA_QUERY_SMALL.matches) {
		const toggle_width = toc_toggle.offsetWidth;
		const page_width = get_width_of_page();
		return page_width - toggle_width - ASIDE_EL_MARGIN;
	} else {
		return get_panel_width();
	}
}


export function init() {
	const toc = document.getElementById('TableOfContents')
	const toc_toggle = document.getElementById('toc-toggle')
	const rs = document.getElementById('Settings')
	const rs_toggle = document.getElementById('rs-toggle')
	TOC_FULL_WIDTH = get_responsive_toc_width(toc_toggle);

	toc.setAttribute("data-panel-toggled","false")

	toc_toggle.addEventListener('click', function() {
			if(toc.getAttribute("data-panel-toggled") === "false") {
				toc.setAttribute("data-panel-toggled", "true");
				// expand the panel
				toc.style.width = TOC_FULL_WIDTH + "px";
				// change toggle cursor
	 			toc_toggle.style.cursor = "e-resize";

			} else {
				toc.setAttribute("data-panel-toggled", "false");
				toc.style.width = 0 + "px";
				toc_toggle.style.cursor = "w-resize";
			}

		})


	// manage TOC folders and content folders

	folderize_toc();

	add_pretitles_to_labels();

	adjust_labels_top_pos();

	adjust_self_top_pos();

	sticky_on_scroll();

	//if(!MEDIA_QUERY_SMALL.matches) {
	//	toc.setAttribute("data-panel-toggled", "true");
	//	toc_toggle.style.cursor = "e-resize";
	//	toc.style.width = TOC_FULL_WIDTH + "px"; // toggle toc on desktop
//	} else {
		toc.style.width = "0px";
//	}

	adjust_toc_on_resize();

	//
	// Track reading progress and show it in the table of contents
	// continue here :) track_reading_progress();

	// Resize panels on window resize
	// window.addEventListener('resize', debounce(function() {
	// 	toggles_and_panels.forEach(function(toggle_panel_pair) {
	// 		const panel = toggle_panel_pair[0]
	// 		if(panel.getAttribute("data-panel-toggled") === "true") {
	// 			const panel_expanded_width = get_panel_width();
	// 			panel.style.width = panel_expanded_width + "px";
	// 		}
	// 	})
	// }, 50))
}
