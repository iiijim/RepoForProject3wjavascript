var map = null;

function initMap(){
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 41.8781, lng: -87.6298 },
        zoom: 12
    });

    new google.maps.Marker({
        position: { lat: 41.8781, lng: -87.6298 },
        map,
        title: "hewo",
    })

    new google.maps.Marker({
        position: { lat: 41.846996, lng: -87.705315 },
        map,
        title: "2nd thing",
        icon: "Media/Images/BehindTheScenesOfAPersonalModel.png.png"
    })

}

google.maps.event.addDomListener(window, 'load', initMap);

function init(){

    function buttonLogic(){

        alert("If you have questions, contact me at: jmartinez84@hawk.illinoistech.edu");
    }

    document.getElementById("container").addEventListener("click", buttonLogic);
}
window.addEventListener('load', init);

