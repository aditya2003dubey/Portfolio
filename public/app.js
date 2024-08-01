/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#2b3dda"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "blue"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#2b3dda",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

let ignore = document.querySelectorAll(".cardd-ignore");
let btn = document.querySelector(".view-more");
let click = true;
function viewMore(){

  if(click == true){
  ignore.forEach((e)=>{
    e.classList.remove("cardd-ignore");
  })
  btn.innerHTML = "View Less " + "&nbsp;<i class='fa-solid fa-arrow-right'></i>";
  click = false;
}
else{
  ignore.forEach((e)=>{
    e.classList.add("cardd-ignore");
    })
    btn.innerHTML = "View More" + "&nbsp;<i class='fa-solid fa-arrow-right'></i>";
    click = true;
    }
}


async function emailSend(){
  // e.preventDefault();
  let fullName = document.querySelector("#fullName").value;
  let phoneNo = document.querySelector("#phoneNo").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;
  
  let messageBody = "Name : " + fullName +
  "<br>Phone No : " + phoneNo +
  "<br>Email : " + email +
  "<br>Message : " + message;
  console.log("click");
 await Email.send({
    Host : "smtp.elasticemail.com",
    Username : "adityadubeypc@gmail.com",
    Password : "F316519C47378322EECEF4C1DCA5071A5298",
    To : 'adityadubeypc@gmail.com',
    From : "adityadubeypc@gmail.com",
    Subject : "This is the subject",
    Body: messageBody
}).then(
  message => alert(message)
);
}

let title = document.title;
let icon = document.querySelector("#icon");
window.addEventListener("blur",()=>{
  document.title ="Come Back To Portfoilo";
  icon.href = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAdVuIE_JahSUHUSoY4iweEJJXq4sXxJYSrg&s"
  
})
window.addEventListener("focus",()=>{
  document.title = title;
  icon.href = "./assets/pageicon.png"

  })
