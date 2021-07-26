import {rerange} from './utils.js'
import {round_to_two} from './utils.js'
import {debounce} from './utils.js'

const HIDDEN_CONTENT_HEIGHT_RANGE = {min: 100,
							         max: 300}
const TOGGLE_POS_TOP_OFFSET = 1; // px

const TOGGLE_MIN_WIDTH = 300;
const TOGGLE_WIDTH_OFFSET = 30;

const MEDIA_QUERY_SMALL = window.matchMedia("(max-width: 768px)")

// WIP: IS ALSO SET IN SIDEBAR.JS, the value should be set as data attribute in sidebar.js
// and then gotten from the element here

const TOGGLED_TOC_CHAPTER_MIN_HEIGHT = 60;

const adjust_toggles_pos_top = function(toggles) {
	toggles.forEach(function(toggle) {
		let height = toggle.clientHeight;
			height += TOGGLE_POS_TOP_OFFSET;
			height *= -1;
		toggle.style.top = height + "px";
	})
}

const adjust_toggles_headlines = function(toggles) {
	toggles.forEach(function(toggle) {
		if(toggle.querySelector('.pretitle') == null || undefined) {
			let headline = toggle.querySelector('h1');
				headline.classList.add('without-pretitle');
		}
	})
}

const adjust_toggles_width_on_mobile = function(toggles) {
	if(MEDIA_QUERY_SMALL.matches) {
		console.log("mobile adjustment")
		toggles.forEach(function(toggle) {
			let new_width = toggle.querySelector('h1').offsetWidth;
		
			if(new_width > TOGGLE_MIN_WIDTH) {
				toggle.style.width = new_width - TOGGLE_WIDTH_OFFSET + "px";
			}
		})
	} else {
		toggles.forEach(function(toggle) {
			toggle.style.width = "auto";
		})
	}
}

const adjust_content_folders_on_resize = function(toggles) {
	window.addEventListener('resize', debounce(function() {
		adjust_toggles_width_on_mobile(toggles);
		adjust_toggles_pos_top(toggles);


	}, 50))
}





export function manage_toc_from_article() {
	const toc_chapters = document.querySelectorAll('#TableOfContents [chapter]')
	const toggles = document.querySelectorAll('button.folder-toggle')

	// make toggles hide and show chapters in toc
	toggles.forEach(function(toggle, index) {
		const toc_chapter = toc_chapters[index]

		toggle.addEventListener('click', function() {
	

			let toc_chapter_content = toc_chapter.querySelector('ul')
			if(toc_chapter_content != null && toc_chapter_content != undefined) {
				if(toc_chapter.getAttribute("data-chapter-toggled") == "false") {
			  		toc_chapter.setAttribute("data-chapter-toggled", "true")
					toc_chapter_content.style.height = "auto"
					let content_height = toc_chapter_content.offsetHeight;
					toc_chapter_content.style.minHeight = content_height + TOGGLED_TOC_CHAPTER_MIN_HEIGHT + "px"
				} else {
			  		toc_chapter.setAttribute("data-chapter-toggled", "false")
					toc_chapter_content.style.height = "45px"
					toc_chapter_content.style.minHeight = "0px"
				}
			}
		})
	})
}





export function init() {
	const sections = document.querySelectorAll('article section')
	const toggles = document.querySelectorAll('button.folder-toggle')
	const contents = document.querySelectorAll('div.content')

	/* VISUALIZE THE AMOUNT OF CONTENT IN FOLDERS */

	const contents_children = Object.values(contents).map(function(content) { return content.children })
	const heights_of_contents = contents_children.map(function(child) {
														return Object.values(child).map(function(el) {return el.clientHeight})
													})
	const heights_combined = heights_of_contents.map(function(content_heights) { 
																return content_heights.reduce(function(acc, val) { return acc + val})})

	const height_record = heights_combined.reduce(function(acc, max) { return Math.max(acc, max)})

	const untoggled_content_heights = heights_combined.map(function(height) {
		let new_height = rerange(height, 
								 100, 
								 height_record,
								 HIDDEN_CONTENT_HEIGHT_RANGE.min,
								 HIDDEN_CONTENT_HEIGHT_RANGE.max)
		return round_to_two(new_height)
	})


	/* MANAGE TOGGLING OF FOLDERS */

	// add toggled data attributes to sections
	sections.forEach(function(section,index) {
		if(!section.hasAttribute("data-section-toggled")) {
			section.setAttribute("data-section-toggled", "false");
		}
		// add sections ids
		section.id = "section-" + index;
	})

	// set initial content's height depending on amount of content in the section
	contents.forEach(function(content,index) {
		let height = untoggled_content_heights[index]
		content.setAttribute("data-untoggled_height", height);
		content.style.height = height + "px";
	})


	// make sections in hidden state show their contents on click
	sections.forEach(function(section) {
		section.addEventListener('click', function handler() {
			if(section.getAttribute("data-section-toggled") == "false") {
				// WIP : listener on section blocks TOGGLE's listener
				//section.setAttribute("data-section-toggled", "true");
				// remove the listener from the section so that 
				// toggle button can listen for events instead
      			//this.removeEventListener('click', handler);
			}	
		})
	})

	toggles.forEach(function(toggle, index) {
		const section = sections[index]
		const content = contents[index]

		// add icon to toggles
		const toggle_icon = document.createElement('span');
			  toggle_icon.classList.add('toggle-icon');
			  toggle.appendChild(toggle_icon)

		// make toggles hide and show folder's contents
		toggle.addEventListener('click', function() {
		if(section.getAttribute("data-section-toggled") == "true") {
			section.setAttribute("data-section-toggled", "false");
			let height = untoggled_content_heights[index]
			content.style.height = height + "px";

			// add listener to closed section again
			// so that section can be opened by clicking on it
			// as an alternative to clicking on the toggle
			//section.addEventListener('click', function handler() {
				//section.setAttribute("data-section-toggled", "true");
      			//this.removeEventListener('click', handler);
			//})
		} else {
			section.setAttribute("data-section-toggled", "true");
			content.style.height = "auto"

		}
		})
	})
	adjust_toggles_headlines(toggles);
	adjust_toggles_width_on_mobile(toggles);
	adjust_toggles_pos_top(toggles);


	adjust_content_folders_on_resize(toggles);

}
