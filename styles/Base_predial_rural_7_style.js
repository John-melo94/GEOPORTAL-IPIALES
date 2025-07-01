var size = 0;
var placement = 'point';

var style_Base_predial_rural_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "9.1px \'Open Sans\', sans-serif";
    var labelFill = "#6d6d6d";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get(" substr( \"Codigo_predial_nacional\",18,4)") !== null && resolution > 0 && resolution < 1) {
        labelText = String(feature.get(" substr( \"Codigo_predial_nacional\",18,4)"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(174,174,174,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.57}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
