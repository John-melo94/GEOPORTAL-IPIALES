var size = 0;
var placement = 'point';

var style_Red_vial_U_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "10.4px \'Open Sans\', sans-serif";
    var labelFill = "#861e1e";
    var bufferColor = "#ffffff";
    var bufferWidth = 0.30000000000000004;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("Nomenclatura") !== null && resolution > 0 && resolution < 1) {
        labelText = String(feature.get("Nomenclatura"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,27,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.57}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
