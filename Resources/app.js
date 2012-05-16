// 
//  app.js
//  MapGeo
//  
//  Created by addiel on 2012-05-15.
//  Copyright 2012 addiel. All rights reserved.
// 


// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//
// create window
//
var winGeo = Titanium.UI.createWindow({
	title:'mapa con Geolocalizador'
});


//
// create map
//
var mapView = Titanium.Map.createView({
	mapType:Titanium.Map.STANDARD_TYPE,
	//mapType:Titanium.Map.SATELLITE_TYPE,
	//mapType:Titanium.Map.HYBRID_TYPE,
	//region:{latitudeDelta:0.05, longitudeDelta: 0.05},
	
	regionFit:true,
	animate:true,
	userLocation:true,
});
//
// add map to window
//
winGeo.add(mapView);


//
// geo
//
//
Titanium.Geolocation.getCurrentPosition(function(e){
	if (e.error) 
	{
		alert("lo sentimos tu geolocalizador no esta disponible en tu dispositivo :(" );
		return;
	};
	
	var longitude = e.coords.longitude;
	var latitude = e.coords.latitude;
	var altitude = e.coords.altitude;
	var heading = e.coords.heading;
	var acuracy= e.coords.accuracy;
	var timestamp = e.coords.timestamp;
	var altitudeAccuracy = e.coord.altitudeAccuracy;
	
	mapView.region = {latitude: latitude, longitude : longitude, latitudeDelta:0.05, longitudeDelta: 0.05};
	//Ti.API.info('inicia la localización ' + e.latitude + 'latitud '+ e.longitude + ' longitud' );
	
});


 //
 // open de windows
 //
 winGeo.open();
