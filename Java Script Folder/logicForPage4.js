var map = null;

function initMap(){
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 41.8781, lng: -87.6298 },
        zoom: 12
    });

    new google.maps.Marker({
        position: { lat: 41.892654, lng: -87.610168 },
        map,
        title: "2nd thing",
        icon: "Media/Images/BehindTheScenesOfAPersonalModel.png.png"
    })

    new google.maps.Marker({
        position: { lat: 41.88835, lng: -87.79684 },
        map,
        title: "3rd thing",
        icon: "Media/Images/IHadToAddAnotherImages"
    })

    new google.maps.Marker({
        position: { lat: 41.8781, lng: -87.6298 },
        map,
        title: "hewo",
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

