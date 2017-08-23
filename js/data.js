// Set your data here

// Full documentation can be found at
// https://www.mapbox.com/mapbox-gl-js/style-spec/
var style = {
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    zoom:  5.0,
    center: [-100.376546, 40.175968],
    minZoom: 0,
    maxZoom: 15
};

var smallMapStyle = {
    container: "mapsmall",
    style: "mapbox://styles/mapbox/streets-v10",
    zoom: 2,
    center: [-120.867069, 42.931101],
    minZoom: 0,
    maxZoom: 4,
    attributionControl: false
};

var textSize = {
    "base": 1,
    "stops": [
        [
            7,
            11.5
        ],
        [
            14,
            16
        ]
    ]
};


/*
 * textField is used for the title of the point of interest
 */
textField = "{iata} + {title}";

/*
 * Create full HTML for 'mousever' and 'click' events
 */
function setHTML(feature) {
  var html = feature.properties.title;
      html += " (" + feature.properties.iata + ")" + "<br>";
      html += feature.properties.city + ", " + feature.properties.state + "<br><hr>";
      html += feature.geometry.coordinates[1].toFixed(4) + ", " + feature.geometry.coordinates[0].toFixed(4);

    return html;
}
