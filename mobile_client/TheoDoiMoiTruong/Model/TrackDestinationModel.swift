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

class TrackDestinationModel: NSObject {
    var nameArea: String = ""
    var lat: String = ""
    var long: String = ""
    var aqi: Int = 0
    
    
    init (dic: [String:Any]) {
        if let nameArea = dic["area"] as? String {
            self.nameArea = nameArea
        }
        if let lat = dic["lat"] as? String {
            self.lat = lat
        }
        if let long = dic["long"] as? String {
            self.long = long
        }
        if let aqi = dic["aqi"] as? Int {
            self.aqi = aqi
        }
    }
}
