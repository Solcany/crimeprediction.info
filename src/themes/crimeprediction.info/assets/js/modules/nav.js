import {debounce} from './utils.js'

const hideNavbarOnScrollOnMobile = function() {
      var lastYPos = 0,
          yPos = 0,
          yPosDelta = 1,
          nav = document.getElementsByTagName('header')[0],
          navHeight = nav.clientHeight;

          window.onscroll = debounce(function() {
            yPos = window.scrollY;

              if(Math.abs(lastYPos - yPos) >= yPosDelta) {
                  if (yPos > lastYPos && yPos > navHeight){
                      console.log("DOWN!")
                  		nav.classList.remove("nav-down");
                  		nav.classList.add("nav-up");
                  } else {
                      console.log("UP!")
                  		nav.classList.remove("nav-up");
                  		nav.classList.add("nav-down");
                  }
                  lastYPos = yPos;
              }
          }, 50)
};

export function init() {
    hideNavbarOnScrollOnMobile(); 
}
