const zoomInBtn = document.getElementById('');
const zoomOutBtn = document.getElementById('');
const findLocationBtn = document.getElementById('');
const toggle3DBtn = document.getElementById('');

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 100, lng: 100},
      zoom: 15,
    });

    function showLocation(position) {
        const { latitude, longitude } = position.coords;
    
        const userLatLng = new google.maps.LatLng(latitude, longitude);
    
        map.setCenter(userLatLng);
        new google.maps.Marker({
          position: userLatLng,
          map: map,
          title: "Current Location",
        });
      }
  
    zoomInBtn.addEventListener("click", function() {
        // zoom in
      map.setZoom(map.getZoom() + 1);
    });
  
    zoomOutBtn.addEventListener("click", function() {
        // zoom out
      map.setZoom(map.getZoom() - 1);
    });
  
    findLocationBtn.addEventListener("click", function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showLocation);
        } else {
            alert("Geolocation is not supported by your browser!!!");
        }
    });
  
    toggle3DBtn.addEventListener("click", function() {
        
    });
  }

  initMap();