var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Lombardo_Corte_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mrv.dtin.com.mx:8080/geoserver/ows?version%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "BenitoJuarez:Lombardo_Corte",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Lombardo_Corte',
                            popuplayertitle: 'Lombardo_Corte',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Lombardo_Corte_1, 0]);
var lyr_SM28_Corte_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mrv.dtin.com.mx:8080/geoserver/ows?version%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "BenitoJuarez:SM28_Corte",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'SM28_Corte',
                            popuplayertitle: 'SM28_Corte',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SM28_Corte_2, 0]);
var lyr_Buffer100metros_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mrv.dtin.com.mx:8080/geoserver/ows?version%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "BenitoJuarez:Buffer 100 metros",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Buffer 100 metros',
                            popuplayertitle: 'Buffer 100 metros',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Buffer100metros_3, 0]);
var lyr_Calle_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mrv.dtin.com.mx:8080/geoserver/ows?version%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "BenitoJuarez:Calle",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Calle',
                            popuplayertitle: 'Calle',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Calle_4, 0]);
var lyr_Curvasdenivel_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mrv.dtin.com.mx:8080/geoserver/ows?version%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "BenitoJuarez:Curvas de nivel",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Curvas de nivel',
                            popuplayertitle: 'Curvas de nivel',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Curvasdenivel_5, 0]);
var lyr_Edifiacion_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mrv.dtin.com.mx:8080/geoserver/ows?version%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "BenitoJuarez:Edifiacion",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Edifiacion',
                            popuplayertitle: 'Edifiacion',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Edifiacion_6, 0]);
var lyr_LidarSuperManzana_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mrv.dtin.com.mx:8080/geoserver/ows?version%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "BenitoJuarez:Lidar Super Manzana",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Lidar Super Manzana',
                            popuplayertitle: 'Lidar Super Manzana',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LidarSuperManzana_7, 0]);
var lyr_Lindero_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mrv.dtin.com.mx:8080/geoserver/ows?version%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "BenitoJuarez:Lindero",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Lindero',
                            popuplayertitle: 'Lindero',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Lindero_8, 0]);
var lyr_Lineadetransmisin_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mrv.dtin.com.mx:8080/geoserver/ows?version%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "BenitoJuarez:Linea de transmisión",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Linea de transmisión',
                            popuplayertitle: 'Linea de transmisión',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Lineadetransmisin_9, 0]);
var lyr_Vegetacionurbana_10 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mrv.dtin.com.mx:8080/geoserver/ows?version%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "BenitoJuarez:Vegetacion urbana",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Vegetacion urbana',
                            popuplayertitle: 'Vegetacion urbana',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Vegetacionurbana_10, 0]);
var lyr_VialidadesOSM_11 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mrv.dtin.com.mx:8080/geoserver/ows?version%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "BenitoJuarez:Vialidades OSM",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Vialidades OSM',
                            popuplayertitle: 'Vialidades OSM',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VialidadesOSM_11, 0]);

lyr_OSMStandard_0.setVisible(true);lyr_Lombardo_Corte_1.setVisible(true);lyr_SM28_Corte_2.setVisible(true);lyr_Buffer100metros_3.setVisible(true);lyr_Calle_4.setVisible(true);lyr_Curvasdenivel_5.setVisible(true);lyr_Edifiacion_6.setVisible(true);lyr_LidarSuperManzana_7.setVisible(true);lyr_Lindero_8.setVisible(true);lyr_Lineadetransmisin_9.setVisible(true);lyr_Vegetacionurbana_10.setVisible(true);lyr_VialidadesOSM_11.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Lombardo_Corte_1,lyr_SM28_Corte_2,lyr_Buffer100metros_3,lyr_Calle_4,lyr_Curvasdenivel_5,lyr_Edifiacion_6,lyr_LidarSuperManzana_7,lyr_Lindero_8,lyr_Lineadetransmisin_9,lyr_Vegetacionurbana_10,lyr_VialidadesOSM_11];
