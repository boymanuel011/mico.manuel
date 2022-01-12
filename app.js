
var swIcon = document.querySelector(".icon");
var nav = document.querySelector(".nav-navbar");
 swIcon.onclick = () =>{
     swIcon.classList.toggle("icon-close");
     nav.classList.toggle("nav-navbar-active");

 }

      function initMap() {
        var uluru = {lat: 28.501859, lng: 77.410320};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }


      window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0)
    })


