L.Nextzen.apiKey = 'Y-we2PskQ2eil_68prPjqQ';

var map = L.Nextzen.map('map', {
    center: [-9.211, -74.641],
    zoom: 6,
    maxZoom: 20,
    iframeDetection: true,
    tangramOptions: {
        apiKey: L.Nextzen.apiKey,
        //scene: L.Nextzen.BasemapStyles.ZincMoreLabels
        scene:{import : 'basic.yaml'}
 }
 });
L.Nextzen.hash({map: map});
L.Nextzen.locator().addTo(map);
L.Nextzen.geocoder('search-Y2Sr2RD').addTo(map);

function initHUD() {
    var typesDOM = document.getElementById('types');
    typesDOM.innerHTML = '<div id="coorner-top-left" class="coorner"></div><div id="coorner-top-right" class="coorner"></div><div id="coorner-bottom-left" class="coorner"></div><div id="coorner-bottom-right" class="coorner"></div>';
    typesDOM.innerHTML += '<span class="title" >Infectados</span><hr/>';
    typesDOM.innerHTML+='<div id="tabla_places"style="height: 300px;"></div>';

    var typesList = document.getElementById('tabla_places');
    typesList.innerHTML= '<span class="labelInner">Lima: 70</span>';
    typesList.innerHTML+='<input type="checkbox" name="checkbox" id="checkbox" class="hide-checkbox"><label for="checkbox">Callao : 3</label> ';


}
function readJSON() {
    var places=[];
    $(document).ready(function () {
        $.getJSON("/public/infected.json",function (json) {
            var datos = json.places;
            var typesList = document.getElementById('tabla_places');

            for(i in datos)
            {
                places.push([datos[i].place, datos[i].infected]);

            }

        })
    });



}
initHUD();