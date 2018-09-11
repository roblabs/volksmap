// Set your data here

// Full documentation can be found at
// https://www.mapbox.com/mapbox-gl-js/style-spec/
var style = {
    container: 'map',
    style: 'mapbox://styles/friendsoftheinyo/cjlnqqble6hay2rnxb2kabu67',
    zoom:  8.0, center: [-118.092631, 36.883175],
    minZoom: 5,
    maxZoom: 15
};


/*
 * textField is used for the title of the point of interest
 */
textField = "{project}";


/*
 * Create full HTML for 'mousever' and 'click' events
 */
function setHTML(feature) {

    // Propser formatting
    html = "<div style=\"font-family: 'Open Sans',sans-serif; display:block; width: 340px; font-size:13px;\">";

    html += "<span style=\"font-size:19px;\">";

    html += feature.properties.project;
    html += "</span>";

    if(feature.properties.svg_array) {

      var svgs = feature.properties.svg_array.split(",");
      console.log(svgs);

      html += "<br>";

      svgs.forEach(function(element) {
        console.log(element);
        html += "<object data=\"svg/" + element + ".svg\" type=\"image/svg+xml\"></object>"
      });
    }


    if(feature.properties.image) {
      html += "<br><img width=\"340 px\" src=\"";
      html += feature.properties.image;
      html += "\">";
    } else {
      html += "<br><hr>";
    }

    if(feature.properties.description) {
      html += feature.properties.description;
      html += "<br><hr>";
    }

    if(feature.properties.directions) {
      html += "<i>";
      html += feature.properties.directions;
      html += "</i>";
    }

    if(feature.properties.url) {
      html += "<br><br><a target=\"_blank\" style=\"color:#f58025; text-decoration:none;\" href=\"";
      html += feature.properties.url;
      html += "\">";
      html += "<i>";
      html += feature.properties.url_description;
      html += "</i></a>";
    }

    html += "</div>";

    console.log(html);
    return html;
}
