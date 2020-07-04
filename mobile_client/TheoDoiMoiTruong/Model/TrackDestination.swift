//
//  TrackDestination.swift
//  TheoDoiMoiTruong
//
//  Created by Duc on 6/29/20.
//  Copyright © 2020 Duc. All rights reserved.
//

import Foundation
import GoogleMaps
import GooglePlaces

class TrackDestination: NSObject {
    let name: String
    let location: CLLocationCoordinate2D
    let aqi: String
    let zoom: Float
    
    init (name: String, location: CLLocationCoordinate2D, aqi: String, zoom: Float) {
        self.name = name
        self.location = location
        self.aqi = aqi
        self.zoom = zoom
    }
}
