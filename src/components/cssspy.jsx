//exposes browser values to css variables

export function cssSpy() {

      var coords = Array.from(document.getElementsByClassName("css-spy-coords"));
      var browserSpy = Array.from(document.getElementsByClassName("css-spy-scroll"));
      var root = document.documentElement;
      
      // set initial state
      browserSpy.forEach((element) => {
        addClass(element, "css-spy-not-scrolled");
      });

      // scroll past checkpoint listener
      if (window !== undefined) {
        window.addEventListener("scroll", (evt) => {
            let yScroll = window.scrollY;
            let scrollCheckpoint = getComputedStyle(root).getPropertyValue("--scroll-checkpoint");
            let scrolled = yScroll > scrollCheckpoint ? true : false;
            root.style.setProperty("--page-scroll-y", yScroll);
            root.style.setProperty("--checkpoint-flag", scrolled ? 1 : 0);
            
            browserSpy.forEach((element) => {
                removeClass(element, "css-spy-scrolled");
                removeClass(element, "css-spy-not-scrolled");
                let classname = scrolled ? "css-spy-scrolled" : "css-spy-not-scrolled";
                addClass(element, classname);
            });

      });
    }
    

    coords.forEach((element) => {
       element.addEventListener("mousemove", (evt) => {
          let xPos = evt.offsetX;
          let yPos = evt.offsetY;
          element.style.setProperty("--css-spy-xpos", xPos);
          element.style.setProperty("--css-spy-ypos", yPos);
        });
      });

      // auxilary functions
      function hasClass(ele, cls) {
        return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
      }
      function addClass(ele, cls) {
        if (!hasClass(ele, cls)) ele.className += " " + cls;
      }
      function removeClass(ele, cls) {
        if (hasClass(ele, cls)) {
          var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
          ele.className = ele.className.replace(reg, " ");
        }
      }
      function replaceClass(ele, oldClass, newClass) {
        if (hasClass(ele, oldClass)) {
          removeClass(ele, oldClass);
          addClass(ele, newClass);
        }
        return;
      }
    
      function toggleClass(ele, cls1, cls2) {
        if (hasClass(ele, cls1)) {
          replaceClass(ele, cls1, cls2);
        } else if (hasClass(ele, cls2)) {
          replaceClass(ele, cls2, cls1);
        } else {
          addClass(ele, cls1);
        }
      }
    }