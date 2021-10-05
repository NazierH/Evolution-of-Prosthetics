const checkpoint = 450;
 
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }

  document.querySelector(".arrow").style.opacity = opacity;
});


document.addEventListener("DOMContentLoaded", function(event) {
  document.addEventListener("scroll", function(event) {
      const animatedBoxes = document.getElementsByClassName("slide1");
      const windowOffsetTop = window.innerHeight + window.scrollY;

      Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
          const animatedBoxOffsetTop = animatedBox.offsetTop;

          if (windowOffsetTop >= animatedBoxOffsetTop) {
            setTimeout(() => {addClass(animatedBox, "fade-in");}, 50);
            
          }
      });
  });
  document.addEventListener("scroll", function(event) {
    const animatedBoxes = document.getElementsByClassName("slide2");
    const windowOffsetTop = window.innerHeight + window.scrollY;

    Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
        const animatedBoxOffsetTop = animatedBox.offsetTop;

        if (windowOffsetTop >= animatedBoxOffsetTop) {
          setTimeout(() => {addClass(animatedBox, "fade-in");}, 125);
          
        }
    });
});
});

function addClass(element, className) {
  const arrayClasses = element.className.split(" ");
  if (arrayClasses.indexOf(className) === -1) {
      element.className += " " + className;
  }
}

