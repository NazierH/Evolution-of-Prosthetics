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


function runAnimationOnScroll(slideNum)
{
  document.addEventListener("DOMContentLoaded", function(event) {
    document.addEventListener("scroll", function(event) {
        const animatedBoxes = document.getElementsByClassName(slideNum);
        const windowOffsetTop = window.innerHeight + window.scrollY;
  
        Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
            const animatedBoxOffsetTop = animatedBox.offsetTop;
  
            if (windowOffsetTop >= animatedBoxOffsetTop) {
              setTimeout(() => {addClass(animatedBox, "fade-in");}, 25);
              
              
              
            }

        });
    });
    
  });
}
document.addEventListener("DOMContentLoaded", function(event) {
  document.addEventListener("scroll", function(event) {
      const animatedBoxes = document.getElementsByClassName('slide1');
      const windowOffsetTop = window.innerHeight + window.scrollY;

      Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
          const animatedBoxOffsetTop = animatedBox.offsetTop;

          if (windowOffsetTop >= animatedBoxOffsetTop) {
            setTimeout(() => {addClass(animatedBox, "fade-in");}, 25);
            
            
            
          }

      });
  });
  
});
document.addEventListener("DOMContentLoaded", function(event) {
  document.addEventListener("scroll", function(event) {
      const animatedBoxes = document.getElementsByClassName('slide2');
      const windowOffsetTop = window.innerHeight + window.scrollY;

      Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
          const animatedBoxOffsetTop = animatedBox.offsetTop;

          if (windowOffsetTop >= animatedBoxOffsetTop) {
            setTimeout(() => {addClass(animatedBox, "fade-in");}, 25);
            
            
            
          }

      });
  });
  
});
document.addEventListener("DOMContentLoaded", function(event) {
  document.addEventListener("scroll", function(event) {
      const animatedBoxes = document.getElementsByClassName('slide3');
      const windowOffsetTop = window.innerHeight + window.scrollY;

      Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
          const animatedBoxOffsetTop = animatedBox.offsetTop;

          if (windowOffsetTop >= animatedBoxOffsetTop) {
            setTimeout(() => {addClass(animatedBox, "fade-in");}, 25);
            
            
            
          }

      });
  });
  
});
document.addEventListener("DOMContentLoaded", function(event) {
  document.addEventListener("scroll", function(event) {
      const animatedBoxes = document.getElementsByClassName('slide4');
      const windowOffsetTop = window.innerHeight + window.scrollY;

      Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
          const animatedBoxOffsetTop = animatedBox.offsetTop;

          if (windowOffsetTop >= animatedBoxOffsetTop) {
            setTimeout(() => {addClass(animatedBox, "fade-in");}, 25);
            
            
            
          }

      });
  });
  
});

document.addEventListener("DOMContentLoaded", function(event) {
  document.addEventListener("scroll", function(event) {
      const animatedBoxes = document.getElementsByClassName('slide5');
      const windowOffsetTop = window.innerHeight + window.scrollY;

      Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
          const animatedBoxOffsetTop = animatedBox.offsetTop;

          if (windowOffsetTop >= animatedBoxOffsetTop) {
            setTimeout(() => {addClass(animatedBox, "fade-in");}, 25);
            
            
            
          }

      });
  });
  
});
document.addEventListener("DOMContentLoaded", function(event) {
  document.addEventListener("scroll", function(event) {
      const animatedBoxes = document.getElementsByClassName('slide6');
      const windowOffsetTop = window.innerHeight + window.scrollY;

      Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
          const animatedBoxOffsetTop = animatedBox.offsetTop;

          if (windowOffsetTop >= animatedBoxOffsetTop) {
            setTimeout(() => {addClass(animatedBox, "fade-in");}, 25);
            
            
            
          }

      });
  });
  
});
document.addEventListener("DOMContentLoaded", function(event) {
  document.addEventListener("scroll", function(event) {
      const animatedBoxes = document.getElementsByClassName('slide7');
      const windowOffsetTop = window.innerHeight + window.scrollY;

      Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
          const animatedBoxOffsetTop = animatedBox.offsetTop;

          if (windowOffsetTop >= animatedBoxOffsetTop) {
            setTimeout(() => {addClass(animatedBox, "fade-in");}, 25);
            
            
            
          }

      });
  });
  
});
document.addEventListener("DOMContentLoaded", function(event) {
  document.addEventListener("scroll", function(event) {
      const animatedBoxes = document.getElementsByClassName('thanks');
      const windowOffsetTop = window.innerHeight + window.scrollY;

      Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
          const animatedBoxOffsetTop = animatedBox.offsetTop;

          if (windowOffsetTop >= animatedBoxOffsetTop) {
            setTimeout(() => {addClass(animatedBox, "fade-in");}, 25);
            
            
            
          }

      });
  });
  
});


// runAnimationOnScroll('slide1');
// runAnimationOnScroll('slide2');
// runAnimationOnScroll('slide3');
// runAnimationOnScroll('slide4');

// document.addEventListener("scroll", function(event) {
//   const animatedBoxes = document.getElementsByClassName("slide2");
//   const windowOffsetTop = window.innerHeight + window.scrollY;

//   Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
//       const animatedBoxOffsetTop = animatedBox.offsetTop;

//       if (windowOffsetTop >= animatedBoxOffsetTop) {
//         setTimeout(() => {addClass(animatedBox, "fade-in");}, 125);
        
//       }
//   });
// });

function addClass(element, className) {
  const arrayClasses = element.className.split(" ");
  if (arrayClasses.indexOf(className) === -1) {
      element.className += " " + className;
  }
}

