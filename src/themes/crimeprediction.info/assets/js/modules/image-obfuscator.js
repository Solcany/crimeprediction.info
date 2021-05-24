import {get_height_of_page} from './utils.js'
import {get_width_of_page} from './utils.js'
import {rerange} from './utils.js'

const HORIZONTAL_TILES = 80;
const DEBUG = false;
const DEBUG_GRID = false;

const BACKGROUND_ALPHABET =  '░  ▓'.split('');// '▒▨█░░░'.split('');
const BACKGROUND_GRAYS = [ 35, 10 ]

const OBFUSCATION_ALPHABET = '"▓▒░■#^^^^^<><>░░░▓▒░▓▒░<><$@#%#$!@#?"'.split('');

// will affect width of the face img
var APPROXIMATE_MASK_WIDTH;
const FACE_IMAGE_WIDTH_SCALAR = 0.855;
const FACE_REFRESH_RATE = 5;

// rect clip animation settings
const RECT_CLIP_STEPS_PER_CYCLE = 300;
const RECT_CLIP_TIMEOUT_PER_STEP = 2;


var BLACKSWAN_PROBABILITY = 0.4;
const BLACKSWAN_PROBABILITY2 = 0.8;
const FONT_NAME = 'FiraMono-regular';
const MASK_PATH = './images/home-page/hd2.png';

export function init(callback)  {

	var font = new FontFaceObserver(FONT_NAME);

	font.load().then(function() {
		var canvas = document.createElement('canvas')
			canvas.id = "thecanvas"
			canvas.position = "absolute";
			canvas.width = get_width_of_page();
			canvas.height = get_height_of_page();
			const context = canvas.getContext("2d");

		const canvas_container = document.querySelector('main#home')

			canvas_container.appendChild(canvas);

			const tile_width = Math.ceil(canvas.width / HORIZONTAL_TILES);
			const vertical_tiles = Math.round(canvas.height / tile_width);
			const tile_height = Math.ceil(canvas.height / vertical_tiles);

			if(DEBUG) {
				console.log("##### GETTING GRID DIMENSIONS"); 
				console.log("tile width: " + tile_width); 
				console.log("vert tiles amount: " + vertical_tiles); 
				console.log("tile height: " + tile_height); 
				console.log(" "); 
			}

			var mask_image = new Image();
				mask_image.src = MASK_PATH;

			var mask = [];

			mask_image.onload = function() {

				var fake_canvas = document.createElement('canvas')
					fake_canvas.width = this.width;
					fake_canvas.height = this.height; 
				var fake_context = fake_canvas.getContext('2d');
					fake_context.drawImage(this,0,0)

				APPROXIMATE_MASK_WIDTH = (this.width) * tile_width;
				const face_image_DOM = document.getElementById('theface');
					  let w = APPROXIMATE_MASK_WIDTH * FACE_IMAGE_WIDTH_SCALAR;
					  face_image_DOM.style.width = w + "px";


				for(let i = 0; i < this.height; i++) {
					let row_raw = fake_context.getImageData(0, i, this.width, 1);
					let row_img_data = row_raw.data; 
					let row_gray_data = row_img_data.filter(function(value,index) {
						return index % 4 == 0 || index == 0; // gets the RED of R G B A
					})
					mask.push(row_gray_data);
				}

				if(DEBUG && DEBUG_GRID) {
					for(let x = 0; x < HORIZONTAL_TILES; x++) {
						for(let y = 0; y < vertical_tiles; y++) {
							let color = Math.random() * 255;
							let rgb = 'rgb(' + color + ',' + color + ',' + color + ')'
							context.fillStyle = rgb;
							context.fillRect(x * tile_width, y * tile_height, tile_width, tile_height);
						}
					}
				}

				// padd the mask

				const mask_rows = mask.length;
				const mask_cols = mask[0].length;

				const padding_left = Math.round((HORIZONTAL_TILES - mask_rows) / 2);
				const padding_right = HORIZONTAL_TILES - padding_left;

				const padding_top = Math.round((vertical_tiles - mask_cols) / 2);
				const padding_bottom = vertical_tiles - padding_top;

				if(DEBUG) {
					console.log("##### ADDING PADDING TO THE MASK"); 
					console.log("mask_rows: " + mask_rows); 
					console.log("mask_cols: " + mask_cols); 
					console.log("padding_left: " + padding_left); 
					console.log("padding_right: " + padding_right); 
					console.log("padding_top: " + padding_top); 
					console.log("padding_bottom: " + padding_bottom); 
					console.log(" "); 

				}

				var mask_padded = [];

				function add_padding_to_mask() {
					for(let x = 0; x < HORIZONTAL_TILES; x++) {
						let row = []
						for(let y = 0; y < vertical_tiles; y++) {
								if(y >= padding_top && y <= padding_bottom && x >= padding_left && x <= padding_right) {
									let mask_y_index = Math.round(rerange(y,padding_top,padding_bottom,0,mask_cols-1));
									let mask_x_index = Math.round(rerange(x,padding_left,padding_right,0,mask_rows-1));
									let mask_gray_pixel = mask[mask_x_index][mask_y_index];
									if(mask_gray_pixel > 0) {
										row.push({type: "face",
											      color: mask_gray_pixel});
									} else {
										let bg_gray_index = Math.floor(Math.random() * BACKGROUND_GRAYS.length)
										let bg_gray = BACKGROUND_GRAYS[bg_gray_index]
										// let rgb = 'rgb('+ bg_gray + ',' + bg_gray + ',' + bg_gray + ')'
										let index = Math.floor(Math.random() * BACKGROUND_ALPHABET.length)
										let char = BACKGROUND_ALPHABET[index]

									if(Math.random() < BLACKSWAN_PROBABILITY2) {
										bg_gray = bg_gray
									} else {
										bg_gray = 0;
									}

										let bg_el = {type: "bg",
											         color: bg_gray, 
													 char: char}
										row.push(bg_el);								
									}
								} else {
									let bg_gray_index = Math.floor(Math.random() * BACKGROUND_GRAYS.length)
									let bg_gray = BACKGROUND_GRAYS[bg_gray_index]
									// let rgb = 'rgb('+ bg_gray + ',' + bg_gray + ',' + bg_gray + ')'
									let index = Math.floor(Math.random() * BACKGROUND_ALPHABET.length)
									let char = BACKGROUND_ALPHABET[index]

									if(Math.random() < BLACKSWAN_PROBABILITY2) {
										bg_gray = bg_gray
									} else {
										bg_gray = 0;
									}

									let bg_el = {type: "bg",
										         color: bg_gray, 
												 char: char}
									row.push(bg_el);
								}
						}
						mask_padded.push(row);
					}
				}
				add_padding_to_mask();

				if(DEBUG) {
					console.log("##### FINISHED PADDING"); 
					console.log("total tiles rows: " + HORIZONTAL_TILES); 
					console.log("total tiles cols: " + vertical_tiles); 
					console.log("padded mask rows: " + mask_padded.length); 
					console.log("padded mask cols: " + mask_padded[0].length); 
					console.log(" ");
				}


				if(DEBUG) {
					console.log("##### RENDERING THE GRID"); 
					console.log(" ");
				}

				context.font = '24px ' + FONT_NAME;
				context.textAlign = 'center';
				context.textBaseline = 'middle';

				// draw the background
				mask_padded.forEach(function(row, x_index) {
					row.forEach(function(mask_object, y_index) {
						let xpos = x_index * tile_width;
						let ypos = y_index * tile_height;
						if(mask_object["type"] == "bg" && mask_object["color"] != 0) {
							let bg_gray = mask_object["color"]
							let rgb = 'rgb('+ bg_gray + ',' + bg_gray + ',' + bg_gray + ')'
							context.fillStyle = rgb;
							context.fillText(mask_object["char"], xpos, ypos);
						}
					})
				})

				let clear_rect_x = (padding_left-1)*tile_width;
				let clear_rect_y = (padding_top-1)*tile_height;
				let clear_rect_w = (mask_rows) * tile_width;
				let clear_rect_h = (mask_cols) * tile_height;

				function draw_face() {
					setTimeout(function() {
					context.clearRect(clear_rect_x, clear_rect_y, clear_rect_w, clear_rect_h);

					for(let x = padding_left-1; x < padding_right+1; x++) {
						for(let y = padding_top-1; y < padding_bottom+1; y++) {
						let xpos = x * tile_width;
						let ypos = y * tile_height;
						let mask_object = mask_padded[x][y];

						if(mask_object != undefined) {
							if(mask_object["type"] == "face") {
								context.font = '32px ' + FONT_NAME;

								let index = Math.floor(Math.random() * OBFUSCATION_ALPHABET.length)
								let char = OBFUSCATION_ALPHABET[index]
								let rgb
								let color = mask_object["color"];

								if(Math.random() < BLACKSWAN_PROBABILITY) {
									rgb = 'rgb(0,0,0)'

								} else {
									rgb = 'rgb(30,0,'+ color + ')'
								}

								context.fillStyle = rgb;
								context.fillText(char, xpos, ypos);

							} else if (mask_object["type"] == "bg" && mask_object["color"] != 0) {
								context.font = '24px ' + FONT_NAME;
								let color = mask_object["color"]
								let rgb = 'rgb('+ color + ',' + color + ',' + color + ')'
								let char = mask_object["char"]
								context.fillStyle = rgb;
								context.fillText(char, xpos, ypos);
							}
						}
						}
					}
					draw_face();
				}, FACE_REFRESH_RATE);
				}
 
				function init_overlay_mask() {
					const overlay_div = document.getElementById("overlay");
					overlay_div.style.clip = "rect(0px, 100vw, 50vh, 0px)";		
					const render_line_el = document.querySelector("[data-render-line]");

					const window_width = get_width_of_page();
					const step = Math.round(window_width / RECT_CLIP_STEPS_PER_CYCLE);

					var CLIP_WIDTH = 0;

					function animate_overlay_mask(dir) {
						if(dir == "RIGHT-ERASE" && CLIP_WIDTH < window_width) {
							setTimeout(function() {
								overlay_div.style.clip = "rect(0px, 100vw, 100vh," + CLIP_WIDTH +"px)";
								render_line_el.style.left = CLIP_WIDTH + "px";
								CLIP_WIDTH += step; 
								animate_overlay_mask(dir);
							}, RECT_CLIP_TIMEOUT_PER_STEP)
						} else if(dir == "RIGHT-DRAW" && CLIP_WIDTH < window_width) {
							setTimeout(function() {
								overlay_div.style.clip = "rect(0px," + CLIP_WIDTH + "px, 100vh, 0px)";
								render_line_el.style.left = CLIP_WIDTH + "px";
								CLIP_WIDTH += step; 
								animate_overlay_mask(dir);
							}, RECT_CLIP_TIMEOUT_PER_STEP)
						} else {
							CLIP_WIDTH = 0;
							if(dir == "RIGHT-ERASE") {
								animate_overlay_mask("RIGHT-DRAW");
							} else {
								animate_overlay_mask("RIGHT-ERASE");
							}
						}
					}
					animate_overlay_mask("RIGHT-ERASE");
				}


				draw_face();
				init_overlay_mask();
				callback();	

			}
		})
}


