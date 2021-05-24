// WIP: lazy load lq images
const HQ_IMAGE_SUFFIX = "-hq.jpg"
const IMAGES_PATH = "./"
const SLICES = 10;
const DELAY_PER_SLICE = 100;

const tag_lq_images = function(figures) {
	figures.forEach(function(figure) {
		figure.setAttribute("data-image-quality", "placeholder")
	})
}

// const replace_images_with_hq_images = function(figures) {
// 	figures.forEach(function(figure) {

// 		const upgrade_image = function() {
// 			if(figure.getAttribute("data-image-quality") == "placeholder") {
// 				replace_placeholder()
// 			} else {
// 				load_and_replace_image()
// 			}		
// 		}

// 		const replace_placeholder = function() {
// 			figure.setAttribute("data-image-quality" ,"low")

// 			const placeholder = figure.querySelector('.placeholder')
// 				  placeholder.remove()

// 			const image = figure.querySelector('img')
// 				  image.style.display = 'block';

// 		}

// 		const load_and_replace_image = function() {
// 				const image = figure.querySelector('img')

// 				// get lq image's index
// 				const image_path = image.src;
// 				const image_name = image_path.match('[^/]*$')[0];
// 				const image_index = parseInt(image_name);

// 				// load & replace lq image with hq version
// 				const hq_image_name = image_index + HQ_IMAGE_SUFFIX
// 				const hq_image_path = IMAGES_PATH + hq_image_name; 
// 				const hq_image = new Image();
// 					  hq_image.src = hq_image_path;

// 					  // blur lq image during loading of the hq version
// 					  image.style.filter = "blur(8px)";

// 					  hq_image.onload = function() {
// 					  	image.style.filter = "blur(0px)";

// 					  	// set data-attribute to high
// 						figure.setAttribute("data-image-quality", "high")
// 						// replace old image with the new
// 					  	figure.replaceChild(hq_image, image);
// 					  	// select newly replaced image
// 					  	const replaced_image = figure.querySelector('img');
// 					  	// blur the image
// 					  	replaced_image.style.filter = "blur(8px)";
// 					  	// unblur it after 150 ms
// 					  	setTimeout(function() {
// 					  		replaced_image.style.filter = "blur(0px)";
// 					  	}, 200);

// 					  	figure.removeEventListener('click', load_and_replace_image);
// 					  }
// 		}
// 		figure.addEventListener('click', upgrade_image)
// 	})
// }

const retro_load_images = function(figures) {

	const insert_lq_image_into_dom = function(figure) {
			console.log("inserting lq")

			const image_name = figure.getAttribute("data-image-name");
			const image = new Image();
			image.src = image_name + "-lq.gif"
			image.classList.add("lq-image");

			image.onload = function() {
				figure.querySelector('div.placeholder').remove();
				retro_load_image(this, figure, "low");
			}
	}

	const insert_hq_image_into_dom = function(figure) {
		console.log("inserting HQ")
		const image_name = figure.getAttribute("data-image-name");
		const image = new Image();

		image.src = image_name + "-hq.jpg"
		image.classList.add("hq-image");

		image.onload = function() {
			figure.setAttribute('data-image-quality',"high");
			retro_load_image(this, figure, "high");
		}
	}

	const retro_load_image = function(image, figure, inserted_image_quality) {
		const content_column = document.querySelector('section div.content');
		const content_column_width = content_column.clientWidth;

		var aspect_ratio;

		if(image.width > image.height) {
			aspect_ratio = image.height / image.width;
		} else {
			aspect_ratio = image.width / image.height;
		}

		const canvas_width = content_column_width;
		const canvas_height = content_column_width * aspect_ratio;

		image.width = canvas_width;

		var canvas = document.createElement('canvas')
			canvas.id = "image-loader"
			canvas.width = canvas_width;
			canvas.height = canvas_height;
			canvas.position = "absolute";
		var context = canvas.getContext('2d');

		figure.prepend(canvas);

		var fake_canvas = document.createElement('canvas')
			fake_canvas.width = canvas_width;
			fake_canvas.height = canvas_height;

		var fake_context = fake_canvas.getContext('2d');
			fake_context.drawImage(image,0,0,canvas_width,canvas_height)

		const slice_w = image.width
		const slice_h = Math.floor(canvas_height / SLICES)

		function r(count) {
			if(count <= SLICES) {
				const row = slice_w;
				const col = slice_h * count;
				setTimeout(function() {
					var imgData = fake_context.getImageData(0,0, row, col);
						context.putImageData(imgData,0,0)
						if(count == SLICES) {

							if(inserted_image_quality == "low") {
								figure.setAttribute('data-image-quality',"low");
							} else if (inserted_image_quality == "high") {
								figure.setAttribute('data-image-quality',"high");
								let lq_image = figure.querySelector('img.lq-image');
								lq_image.remove();
							}

							// remove fake canvas
							fake_canvas.remove()
	
							// replace real canvas with the actual image
							canvas.remove()
							figure.prepend(image)
							figure.style.height = "100%"; //canvas_height + "px";

						}
					r(count + 1)
				},DELAY_PER_SLICE) 
			}
		}
	 figure.style.height = canvas_height + "px";
	 r(1)
	}

	figures.forEach(function(figure, index) {
		figure.addEventListener('click', function() {
			if(figure.getAttribute("data-image-quality") == "placeholder") {
				insert_lq_image_into_dom(figure)
			}
		//	else if(figure.getAttribute("data-image-quality") == "low"){
				//insert_hq_image_into_dom(figure)
		//	}
		})
	})
}




const replace_with_placeholders = function(figures) {
	figures.forEach(function(figure) {
		figure.setAttribute("data-image-quality", "placeholder")

		const placeholder = document.createElement('div')
			  placeholder.classList.add('placeholder')
			  // placeholder.style.width = image.clientWidth + "px";
			  // placeholder.style.height = image.clientHeight + "px";
			  // placeholder.style.border = "4px solid #0453d1";

		figure.prepend(placeholder)
	})
}

export function init() {
	const figures = document.querySelectorAll('figure');
	replace_with_placeholders(figures)
	tag_lq_images(figures);
	retro_load_images(figures);
}
