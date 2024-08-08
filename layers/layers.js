var wms_layers = [];

var format_isoyt1mgw_0 = new ol.format.GeoJSON();
var features_isoyt1mgw_0 = format_isoyt1mgw_0.readFeatures(json_isoyt1mgw_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_isoyt1mgw_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isoyt1mgw_0.addFeatures(features_isoyt1mgw_0);
var lyr_isoyt1mgw_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_isoyt1mgw_0, 
                style: style_isoyt1mgw_0,
                popuplayertitle: "isoyt1mgw",
                interactive: true,
                title: '<img src="styles/legend/isoyt1mgw_0.png" /> isoyt1mgw'
            });

lyr_isoyt1mgw_0.setVisible(true);
var layersList = [lyr_isoyt1mgw_0];
lyr_isoyt1mgw_0.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'AP1': 'AP1', 'PRECI_RANG': 'PRECI_RANG', });
lyr_isoyt1mgw_0.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'COV_': '', 'COV_ID': '', 'AP1': '', 'PRECI_RANG': '', });
lyr_isoyt1mgw_0.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', 'AP1': 'no label', 'PRECI_RANG': 'no label', });
lyr_isoyt1mgw_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});