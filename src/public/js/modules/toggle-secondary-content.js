import {debounce} from './utils.js'
import {get_array_range} from './utils.js'

const OBFUSCATION_ALPHABET = ("▓▒░█■!#$@#%#$!@▓▒░█#4864512?▓▒░█").split('')
const OBFUSCATION_LEVELS_AMOUNT = 15

export function init() {
	const toggles = document.querySelectorAll('button[data-toggle-content]');
	const contents = document.getElementsByClassName('secondary-content');

	// collect unobfuscated html contents
	const unobfuscated_html = Object.values(contents).map(function(content) {
		let content_span = content.querySelector('.content')
		return content_span.innerHTML;
	})

	// generate layers of obsfuscation
	const obfuscated_html = Object.values(contents).map(function(content) {
		let content_span = content.querySelector('.content')
		let html = content_span.innerHTML;

		const levels_range = get_array_range(OBFUSCATION_LEVELS_AMOUNT);

		const obfuscated_strings = levels_range.map(function(_) {

			const range = get_array_range(html.length)

			return range.reduce(function(string_accumulator, _) {
				let index = Math.floor(Math.random() * OBFUSCATION_ALPHABET.length)
				let char = OBFUSCATION_ALPHABET[index]
				return string_accumulator + char
			})
		})
		return obfuscated_strings
	})

	// obfuscate all html content
	Object.values(contents).forEach(function(content, index) {
		let content_span = content.querySelector('.content')
			content_span.innerHTML = obfuscated_html[index][0];
	})




	toggles.forEach(function(toggle, index) {
		toggle.addEventListener('click', function() {
			// display footnote content when toggle is clicked
			const content = contents[index];
			const content_state = content.getAttribute('data-toggled')

			if(content_state == "false") {
				content.setAttribute("data-toggled", "true")
			} else if (content_state == "true") {
				content.setAttribute("data-toggled", "false")
			}

			if (!content.hasAttribute("data-legible")) {

				const html = unobfuscated_html[index]
				const obfuscated_layers = obfuscated_html[index]
				const content_span = content.querySelector('.content')
				const time = 30

				content_span.style.filter = "blur(4px)"

				let depth = OBFUSCATION_LEVELS_AMOUNT-1;

				const unobfuscate = function(count) {
					if (count > -1) {
						setTimeout(function() {
							if(count > 0) {
								content_span.innerHTML = obfuscated_layers[count]
							} else {
								content_span.innerHTML = html
								content.setAttribute("data-legible", "")
								content_span.style.filter = "blur(0px)"
							}
							unobfuscate(count - 1)
						}, time)
					}
				}

				unobfuscate(depth)
			}
		})
	})




	// contents.map(function(content) {
	// 	return content.innerHTML;
	// })



}
