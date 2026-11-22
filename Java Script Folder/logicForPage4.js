function initMap(){
    const center = { lat: 41.8781, lng: -87.6298 };

    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: center,
    });

}

google.maps.event.addDomListener(window, 'load', initMap);

function init(){

    function buttonLogic(){

        alert("If you have questions, contact me at: jmartinez84@hawk.illinoistech.edu");
    }

    document.getElementById("container").addEventListener("click", buttonLogic);
}
window.addEventListener('load', init);