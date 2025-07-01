var size = 0;
var placement = 'point';

var style_Manzanas_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "7.800000000000001px \'Open Sans\', sans-serif";
    var labelFill = "#633232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("right( \"Codigo_de_manzana\",4)") !== null && resolution > 0 && resolution < 1) {
        labelText = String(feature.get("right( \"Codigo_de_manzana\",4)"));
    }
    var style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(173,173,173,0.5372549019607843)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
