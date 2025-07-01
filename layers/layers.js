var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.551000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Manzanas_1 = new ol.format.GeoJSON();
var features_Manzanas_1 = format_Manzanas_1.readFeatures(json_Manzanas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzanas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzanas_1.addFeatures(features_Manzanas_1);
var lyr_Manzanas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Manzanas_1, 
                style: style_Manzanas_1,
                popuplayertitle: 'Manzanas',
                interactive: true,
                title: '<img src="styles/legend/Manzanas_1.png" /> Manzanas'
            });
var format_Suelo_suburbano_2 = new ol.format.GeoJSON();
var features_Suelo_suburbano_2 = format_Suelo_suburbano_2.readFeatures(json_Suelo_suburbano_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suelo_suburbano_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suelo_suburbano_2.addFeatures(features_Suelo_suburbano_2);
var lyr_Suelo_suburbano_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suelo_suburbano_2, 
                style: style_Suelo_suburbano_2,
                popuplayertitle: 'Suelo_suburbano',
                interactive: true,
                title: '<img src="styles/legend/Suelo_suburbano_2.png" /> Suelo_suburbano'
            });
var format_Construcciones_3 = new ol.format.GeoJSON();
var features_Construcciones_3 = format_Construcciones_3.readFeatures(json_Construcciones_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Construcciones_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Construcciones_3.addFeatures(features_Construcciones_3);
var lyr_Construcciones_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Construcciones_3, 
                style: style_Construcciones_3,
                popuplayertitle: 'Construcciones',
                interactive: true,
                title: '<img src="styles/legend/Construcciones_3.png" /> Construcciones'
            });
var format_Municipios_colindantes_4 = new ol.format.GeoJSON();
var features_Municipios_colindantes_4 = format_Municipios_colindantes_4.readFeatures(json_Municipios_colindantes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_colindantes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_colindantes_4.addFeatures(features_Municipios_colindantes_4);
var lyr_Municipios_colindantes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_colindantes_4, 
                style: style_Municipios_colindantes_4,
                popuplayertitle: 'Municipios_colindantes',
                interactive: true,
                title: '<img src="styles/legend/Municipios_colindantes_4.png" /> Municipios_colindantes'
            });
var format_Base_predial_urbana_5 = new ol.format.GeoJSON();
var features_Base_predial_urbana_5 = format_Base_predial_urbana_5.readFeatures(json_Base_predial_urbana_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Base_predial_urbana_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Base_predial_urbana_5.addFeatures(features_Base_predial_urbana_5);
var lyr_Base_predial_urbana_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Base_predial_urbana_5, 
                style: style_Base_predial_urbana_5,
                popuplayertitle: 'Base_predial_urbana',
                interactive: true,
                title: '<img src="styles/legend/Base_predial_urbana_5.png" /> Base_predial_urbana'
            });
var format_Drenaje_sencillo_6 = new ol.format.GeoJSON();
var features_Drenaje_sencillo_6 = format_Drenaje_sencillo_6.readFeatures(json_Drenaje_sencillo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drenaje_sencillo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drenaje_sencillo_6.addFeatures(features_Drenaje_sencillo_6);
var lyr_Drenaje_sencillo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drenaje_sencillo_6, 
                style: style_Drenaje_sencillo_6,
                popuplayertitle: 'Drenaje_sencillo',
                interactive: true,
                title: '<img src="styles/legend/Drenaje_sencillo_6.png" /> Drenaje_sencillo'
            });
var format_Base_predial_rural_7 = new ol.format.GeoJSON();
var features_Base_predial_rural_7 = format_Base_predial_rural_7.readFeatures(json_Base_predial_rural_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Base_predial_rural_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Base_predial_rural_7.addFeatures(features_Base_predial_rural_7);
var lyr_Base_predial_rural_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Base_predial_rural_7, 
                style: style_Base_predial_rural_7,
                popuplayertitle: 'Base_predial_rural',
                interactive: true,
                title: '<img src="styles/legend/Base_predial_rural_7.png" /> Base_predial_rural'
            });
var format_Red_vial_U_8 = new ol.format.GeoJSON();
var features_Red_vial_U_8 = format_Red_vial_U_8.readFeatures(json_Red_vial_U_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Red_vial_U_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Red_vial_U_8.addFeatures(features_Red_vial_U_8);
var lyr_Red_vial_U_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Red_vial_U_8, 
                style: style_Red_vial_U_8,
                popuplayertitle: 'Red_vial_U',
                interactive: true,
                title: '<img src="styles/legend/Red_vial_U_8.png" /> Red_vial_U'
            });
var format_Red_vial_R_9 = new ol.format.GeoJSON();
var features_Red_vial_R_9 = format_Red_vial_R_9.readFeatures(json_Red_vial_R_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Red_vial_R_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Red_vial_R_9.addFeatures(features_Red_vial_R_9);
var lyr_Red_vial_R_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Red_vial_R_9, 
                style: style_Red_vial_R_9,
                popuplayertitle: 'Red_vial_R',
                interactive: true,
                title: '<img src="styles/legend/Red_vial_R_9.png" /> Red_vial_R'
            });
var format_Drenaje_doble_10 = new ol.format.GeoJSON();
var features_Drenaje_doble_10 = format_Drenaje_doble_10.readFeatures(json_Drenaje_doble_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drenaje_doble_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drenaje_doble_10.addFeatures(features_Drenaje_doble_10);
var lyr_Drenaje_doble_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drenaje_doble_10, 
                style: style_Drenaje_doble_10,
                popuplayertitle: 'Drenaje_doble',
                interactive: true,
                title: '<img src="styles/legend/Drenaje_doble_10.png" /> Drenaje_doble'
            });
var format_Limite_municipal_11 = new ol.format.GeoJSON();
var features_Limite_municipal_11 = format_Limite_municipal_11.readFeatures(json_Limite_municipal_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_municipal_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_municipal_11.addFeatures(features_Limite_municipal_11);
var lyr_Limite_municipal_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_municipal_11, 
                style: style_Limite_municipal_11,
                popuplayertitle: 'Limite_municipal',
                interactive: true,
                title: '<img src="styles/legend/Limite_municipal_11.png" /> Limite_municipal'
            });
var format_Perimetro_urbano_12 = new ol.format.GeoJSON();
var features_Perimetro_urbano_12 = format_Perimetro_urbano_12.readFeatures(json_Perimetro_urbano_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perimetro_urbano_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perimetro_urbano_12.addFeatures(features_Perimetro_urbano_12);
var lyr_Perimetro_urbano_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perimetro_urbano_12, 
                style: style_Perimetro_urbano_12,
                popuplayertitle: 'Perimetro_urbano',
                interactive: true,
                title: '<img src="styles/legend/Perimetro_urbano_12.png" /> Perimetro_urbano'
            });
var group_BASE = new ol.layer.Group({
                                layers: [lyr_Manzanas_1,lyr_Suelo_suburbano_2,lyr_Construcciones_3,lyr_Municipios_colindantes_4,lyr_Base_predial_urbana_5,lyr_Drenaje_sencillo_6,lyr_Base_predial_rural_7,lyr_Red_vial_U_8,lyr_Red_vial_R_9,lyr_Drenaje_doble_10,lyr_Limite_municipal_11,lyr_Perimetro_urbano_12,],
                                fold: 'close',
                                title: 'BASE'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Manzanas_1.setVisible(true);lyr_Suelo_suburbano_2.setVisible(true);lyr_Construcciones_3.setVisible(true);lyr_Municipios_colindantes_4.setVisible(true);lyr_Base_predial_urbana_5.setVisible(true);lyr_Drenaje_sencillo_6.setVisible(true);lyr_Base_predial_rural_7.setVisible(true);lyr_Red_vial_U_8.setVisible(true);lyr_Red_vial_R_9.setVisible(true);lyr_Drenaje_doble_10.setVisible(true);lyr_Limite_municipal_11.setVisible(true);lyr_Perimetro_urbano_12.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_BASE];
lyr_Manzanas_1.set('fieldAliases', {'id': 'id', 'Codigo_de_manzana': 'Codigo_de_manzana', 'Codigo_de_manzana_anterior': 'Codigo_de_manzana_anterior', 'Codigo_de_barrio': 'Codigo_de_barrio', 'Area_m2': 'Area_m2', });
lyr_Suelo_suburbano_2.set('fieldAliases', {'id': 'id', 'Area_m2': 'Area_m2', });
lyr_Construcciones_3.set('fieldAliases', {'id': 'id', 'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'TERRENO_CO': 'TERRENO_CO', 'TIPO_CONST': 'TIPO_CONST', 'TIPO_DOMIN': 'TIPO_DOMIN', 'NUMERO_PIS': 'NUMERO_PIS', 'NUMERO_SOT': 'NUMERO_SOT', 'NUMERO_MEZ': 'NUMERO_MEZ', 'NUMERO_SEM': 'NUMERO_SEM', 'ETIQUETA': 'ETIQUETA', 'IDENTIFICA': 'IDENTIFICA', 'CODIGO_EDI': 'CODIGO_EDI', 'CODIGO_ANT': 'CODIGO_ANT', 'codigo_mun': 'codigo_mun', 'CODIGO_DEP': 'CODIGO_DEP', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Municipios_colindantes_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'MpCodigo': 'MpCodigo', 'MpNombre': 'MpNombre', 'MpArea': 'MpArea', 'MpNorma': 'MpNorma', 'MpCategor': 'MpCategor', 'MpAltitud': 'MpAltitud', 'Restriccion': 'Restriccion', 'Depto': 'Depto', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Base_predial_urbana_5.set('fieldAliases', {'id': 'id', 'Codigo_predial_nacional': 'Codigo_predial_nacional', 'Codigo_predial_anterior': 'Codigo_predial_anterior', 'Codigo_de_manzana': 'Codigo_de_manzana', 'Area_m2': 'Area_m2', });
lyr_Drenaje_sencillo_6.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Longitud': 'Longitud', });
lyr_Base_predial_rural_7.set('fieldAliases', {'id': 'id', 'Codigo_predial_nacional': 'Codigo_predial_nacional', 'Codigo_predial_anterior': 'Codigo_predial_anterior', 'Codigo_de_vereda': 'Codigo_de_vereda', 'Area_m2': 'Area_m2', });
lyr_Red_vial_U_8.set('fieldAliases', {'id': 'id', 'Nomenclatura': 'Nomenclatura', 'Longitud_m': 'Longitud_m', });
lyr_Red_vial_R_9.set('fieldAliases', {'OBJECTID_12': 'OBJECTID_12', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'TIPO_VIA': 'TIPO_VIA', 'ESTADO_SUP': 'ESTADO_SUP', 'NUMERO_CAR': 'NUMERO_CAR', 'ACCESIBILI': 'ACCESIBILI', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'RULEID': 'RULEID', 'ID_MULTI': 'ID_MULTI', 'BK_MULTI': 'BK_MULTI', 'ESCALA': 'ESCALA', 'CAMBIO': 'CAMBIO', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RESPONSABL': 'RESPONSABL', 'PK_CUE': 'PK_CUE', 'GLOBALID': 'GLOBALID', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Length': 'Shape_Length', });
lyr_Drenaje_doble_10.set('fieldAliases', {'OBJECTID_12': 'OBJECTID_12', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'RULEID': 'RULEID', 'ID_MULTI': 'ID_MULTI', 'BK_MULTI': 'BK_MULTI', 'ESCALA': 'ESCALA', 'CAMBIO': 'CAMBIO', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RESPONSABL': 'RESPONSABL', 'PK_CUE': 'PK_CUE', 'GLOBALID': 'GLOBALID', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Limite_municipal_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'MpCodigo': 'MpCodigo', 'MpNombre': 'MpNombre', 'MpArea': 'MpArea', 'MpNorma': 'MpNorma', 'MpCategor': 'MpCategor', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'MpAltitud': 'MpAltitud', 'Restriccion': 'Restriccion', 'Depto': 'Depto', });
lyr_Perimetro_urbano_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Detalle': 'Detalle', 'Area_ha': 'Area_ha', });
lyr_Manzanas_1.set('fieldImages', {'id': 'TextEdit', 'Codigo_de_manzana': 'TextEdit', 'Codigo_de_manzana_anterior': 'TextEdit', 'Codigo_de_barrio': 'TextEdit', 'Area_m2': 'TextEdit', });
lyr_Suelo_suburbano_2.set('fieldImages', {'id': '', 'Area_m2': '', });
lyr_Construcciones_3.set('fieldImages', {'id': 'TextEdit', 'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'TERRENO_CO': 'TextEdit', 'TIPO_CONST': 'TextEdit', 'TIPO_DOMIN': 'TextEdit', 'NUMERO_PIS': 'TextEdit', 'NUMERO_SOT': 'TextEdit', 'NUMERO_MEZ': 'TextEdit', 'NUMERO_SEM': 'TextEdit', 'ETIQUETA': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'CODIGO_EDI': 'TextEdit', 'CODIGO_ANT': 'TextEdit', 'codigo_mun': 'TextEdit', 'CODIGO_DEP': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Municipios_colindantes_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'MpCodigo': 'TextEdit', 'MpNombre': 'TextEdit', 'MpArea': 'TextEdit', 'MpNorma': 'TextEdit', 'MpCategor': 'Range', 'MpAltitud': 'Range', 'Restriccion': 'TextEdit', 'Depto': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Base_predial_urbana_5.set('fieldImages', {'id': 'Range', 'Codigo_predial_nacional': 'TextEdit', 'Codigo_predial_anterior': 'TextEdit', 'Codigo_de_manzana': 'TextEdit', 'Area_m2': 'TextEdit', });
lyr_Drenaje_sencillo_6.set('fieldImages', {'id': '', 'Nombre': '', 'Longitud': '', });
lyr_Base_predial_rural_7.set('fieldImages', {'id': '', 'Codigo_predial_nacional': '', 'Codigo_predial_anterior': '', 'Codigo_de_vereda': '', 'Area_m2': '', });
lyr_Red_vial_U_8.set('fieldImages', {'id': '', 'Nomenclatura': '', 'Longitud_m': '', });
lyr_Red_vial_R_9.set('fieldImages', {'OBJECTID_12': 'TextEdit', 'OBJECTID_1': 'Range', 'OBJECTID': 'Range', 'TIPO_VIA': 'Range', 'ESTADO_SUP': 'TextEdit', 'NUMERO_CAR': 'TextEdit', 'ACCESIBILI': 'TextEdit', 'NOMBRE_GEO': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'RULEID': 'Range', 'ID_MULTI': 'Range', 'BK_MULTI': 'TextEdit', 'ESCALA': 'Range', 'CAMBIO': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'DateTime', 'RESPONSABL': 'TextEdit', 'PK_CUE': 'TextEdit', 'GLOBALID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_Drenaje_doble_10.set('fieldImages', {'OBJECTID_12': 'TextEdit', 'OBJECTID_1': 'Range', 'OBJECTID': 'Range', 'NOMBRE_GEO': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'RULEID': 'Range', 'ID_MULTI': 'Range', 'BK_MULTI': 'TextEdit', 'ESCALA': 'Range', 'CAMBIO': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'DateTime', 'RESPONSABL': 'TextEdit', 'PK_CUE': 'TextEdit', 'GLOBALID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Limite_municipal_11.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'MpCodigo': 'TextEdit', 'MpNombre': 'TextEdit', 'MpArea': 'TextEdit', 'MpNorma': 'TextEdit', 'MpCategor': 'Range', 'SHAPE_Length': '', 'SHAPE_Area': '', 'MpAltitud': 'Range', 'Restriccion': 'TextEdit', 'Depto': 'TextEdit', });
lyr_Perimetro_urbano_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Detalle': '', 'Area_ha': '', });
lyr_Manzanas_1.set('fieldLabels', {'id': 'no label', 'Codigo_de_manzana': 'no label', 'Codigo_de_manzana_anterior': 'no label', 'Codigo_de_barrio': 'no label', 'Area_m2': 'no label', });
lyr_Suelo_suburbano_2.set('fieldLabels', {'id': 'no label', 'Area_m2': 'no label', });
lyr_Construcciones_3.set('fieldLabels', {'id': 'no label', 'OBJECTID': 'no label', 'CODIGO': 'no label', 'TERRENO_CO': 'no label', 'TIPO_CONST': 'no label', 'TIPO_DOMIN': 'no label', 'NUMERO_PIS': 'no label', 'NUMERO_SOT': 'no label', 'NUMERO_MEZ': 'no label', 'NUMERO_SEM': 'no label', 'ETIQUETA': 'no label', 'IDENTIFICA': 'no label', 'CODIGO_EDI': 'no label', 'CODIGO_ANT': 'no label', 'codigo_mun': 'no label', 'CODIGO_DEP': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Municipios_colindantes_4.set('fieldLabels', {'OBJECTID': 'no label', 'MpCodigo': 'no label', 'MpNombre': 'no label', 'MpArea': 'no label', 'MpNorma': 'no label', 'MpCategor': 'no label', 'MpAltitud': 'no label', 'Restriccion': 'no label', 'Depto': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Base_predial_urbana_5.set('fieldLabels', {'id': 'no label', 'Codigo_predial_nacional': 'no label', 'Codigo_predial_anterior': 'no label', 'Codigo_de_manzana': 'no label', 'Area_m2': 'no label', });
lyr_Drenaje_sencillo_6.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Longitud': 'no label', });
lyr_Base_predial_rural_7.set('fieldLabels', {'id': 'no label', 'Codigo_predial_nacional': 'no label', 'Codigo_predial_anterior': 'no label', 'Codigo_de_vereda': 'no label', 'Area_m2': 'no label', });
lyr_Red_vial_U_8.set('fieldLabels', {'id': 'no label', 'Nomenclatura': 'no label', 'Longitud_m': 'no label', });
lyr_Red_vial_R_9.set('fieldLabels', {'OBJECTID_12': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'TIPO_VIA': 'no label', 'ESTADO_SUP': 'no label', 'NUMERO_CAR': 'no label', 'ACCESIBILI': 'no label', 'NOMBRE_GEO': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'RULEID': 'no label', 'ID_MULTI': 'no label', 'BK_MULTI': 'no label', 'ESCALA': 'no label', 'CAMBIO': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODI': 'no label', 'RESPONSABL': 'no label', 'PK_CUE': 'no label', 'GLOBALID': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Length': 'no label', });
lyr_Drenaje_doble_10.set('fieldLabels', {'OBJECTID_12': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'NOMBRE_GEO': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'RULEID': 'no label', 'ID_MULTI': 'no label', 'BK_MULTI': 'no label', 'ESCALA': 'no label', 'CAMBIO': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODI': 'no label', 'RESPONSABL': 'no label', 'PK_CUE': 'no label', 'GLOBALID': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Limite_municipal_11.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'MpCodigo': 'no label', 'MpNombre': 'no label', 'MpArea': 'no label', 'MpNorma': 'no label', 'MpCategor': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', 'MpAltitud': 'no label', 'Restriccion': 'no label', 'Depto': 'no label', });
lyr_Perimetro_urbano_12.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'Detalle': 'no label', 'Area_ha': 'no label', });
lyr_Perimetro_urbano_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});