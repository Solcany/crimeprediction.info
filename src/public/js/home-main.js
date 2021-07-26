import {init as image_obfuscator_init} from './modules/image-obfuscator.js'

function unblur_on_load() {
	const loader_blurred_el = document.querySelector("body")
		  loader_blurred_el.style.filter = "blur(0px)";
}

window.onload = function() {
	// WIP: check if is content page, maybe do on hugo side???
	image_obfuscator_init(unblur_on_load);	
}



