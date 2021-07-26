import {init as secondary_content_init} from './modules/toggle-secondary-content.js'
import {init as super_lazy_loading_init} from './modules/super-lazy-loading.js'
import {init as super_lazy_retro_loading_init} from './modules/super-lazy-retro-loading.js'

// import {init as reading_settings_init} from './modules/reading-settings.js'
import {init as sidebar_init} from './modules/sidebar.js'

import {init as manage_content_folders_init} from './modules/manage-content-folders.js'
import {manage_toc_from_article} from './modules/manage-content-folders.js'

function unblur_on_load() {
	const loader_blurred_el = document.querySelector("body")
	loader_blurred_el.style.filter = "blur(0px)";

	window.setTimeout(function() {
		loader_blurred_el.style.removeProperty("filter");
	}, 10)

}

window.onload = function() {
	// WIP: check if is content page, maybe do on hugo side???
	sidebar_init();

	secondary_content_init();
	super_lazy_retro_loading_init();
	manage_content_folders_init();
	manage_toc_from_article();
	unblur_on_load();
}



