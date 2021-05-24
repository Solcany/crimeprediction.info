// WIP: lazy load lq images
const HQ_IMAGE_SUFFIX = "-hq.jpg"
const IMAGES_PATH = "./"

const tag_lq_images = function(figures) {
	figures.forEach(function(figure) {
		figure.setAttribute("data-image-quality", "low")
	})
}

const replace_images_with_hq_images = function(figures) {
	figures.forEach(function(figure) {

		const upgrade_image = function() {
			if(figure.getAttribute("data-image-quality") == "placeholder") {
				replace_placeholder()
			} else {
				load_and_replace_image()
			}		
		}

		const replace_placeholder = function() {
			figure.setAttribute("data-image-quality" ,"low")

			const placeholder = figure.querySelector('.placeholder')
				  placeholder.remove()

			const image = figure.querySelector('img')
				  image.style.display = 'block';

		}

		const load_and_replace_image = function() {
				const image = figure.querySelector('img')

				// get lq image's index
				const image_path = image.src;
				const image_name = image_path.match('[^/]*$')[0];
				const image_index = parseInt(image_name);

				// load & replace lq image with hq version
				const hq_image_name = image_index + HQ_IMAGE_SUFFIX
				const hq_image_path = IMAGES_PATH + hq_image_name; 
				const hq_image = new Image();
					  hq_image.src = hq_image_path;

					  // blur lq image during loading of the hq version
					  image.style.filter = "blur(8px)";

					  hq_image.onload = function() {
					  	image.style.filter = "blur(0px)";

					  	// set data-attribute to high
						figure.setAttribute("data-image-quality", "high")
						// replace old image with the new
					  	figure.replaceChild(hq_image, image);
					  	// select newly replaced image
					  	const replaced_image = figure.querySelector('img');
					  	// blur the image
					  	replaced_image.style.filter = "blur(8px)";
					  	// unblur it after 150 ms
					  	setTimeout(function() {
					  		replaced_image.style.filter = "blur(0px)";
					  	}, 200);

					  	figure.removeEventListener('click', load_and_replace_image);
					  }
		}
		figure.addEventListener('click', upgrade_image)
	})
}

const replace_with_placeholders = function(figures) {
	figures.forEach(function(figure) {
		figure.setAttribute("data-image-quality", "placeholder")

		const image = figure.querySelector('img')

		const placeholder = document.createElement('div')
			  placeholder.classList.add('placeholder')
			  // placeholder.style.width = image.clientWidth + "px";
			  // placeholder.style.height = image.clientHeight + "px";
			  // placeholder.style.border = "4px solid #0453d1";

		image.style.display = "none"
		figure.prepend(placeholder)
	})
}

export function init() {
	const figures = document.querySelectorAll('figure');
	replace_with_placeholders(figures)
	// tag_lq_images(figures);
	replace_images_with_hq_images(figures);
}