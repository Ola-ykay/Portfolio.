
//autotyping//
let typed = new Typed(".auto-type", {
        strings: ["Olayinka FAGBEMI", " a Frontend Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        loop:true
      })


//dropdown//
let dropdown = document.getElementById("dropdown");

      const openmenu= ()=>{
          dropdown.style.right = "0";
      }

      const closemenu= ()=>{
          dropdown.style.right = "-200px";
      }