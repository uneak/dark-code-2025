 document.addEventListener("DOMContentLoaded", function () {
      const element = document.querySelector("main");
      console.log(element);
      element.style.backgroundColor = "#FFFF00";

    });

    let helloWorldState = false;

    function toggleHelloWorld() {
      
      if (helloWorldState == true) {
      helloWorldState = false;
      } else {
      helloWorldState = true;
      }



      const toggleTag = document.getElementsByClassName("toggle");
      console.log(toggleTag[0]);

      
      if (helloWorldState == true) {
        toggleTag[0].style.display = "none";
      } else {
        toggleTag[0].style.display = "block";
      }
      
    }

