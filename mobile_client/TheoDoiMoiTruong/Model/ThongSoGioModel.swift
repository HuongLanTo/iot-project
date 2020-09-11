//
//  ThongSoGio.swift
//  TheoDoiMoiTruong
//
//  Created by Duc on 6/7/20.
//  Copyright © 2020 Duc. All rights reserved.
//

import Foundation

public class ThongSoGioModel {
    var node_id:String = ""
    var location:String = ""
    var nhietdo:Int = 0
    var doam:Int = 0
    var aqi:Int = 0
    var so2:Int = 0
    var co2:Int = 0
    var buiPM:Int = 0
    var co:Int = 0
    
    init() {
        node_id = ""
        location = ""
        nhietdo = 0
        doam = 0
        aqi = 0
        so2 = 0
        co2 = 0
        buiPM = 0
        co = 0
    }
    
    init(dic: [String: Any]) {
        if let node_id = dic["node_id"] as? String {
            self.node_id = node_id
        }
        if let location = dic["location"] as? String {
            self.location = location
        }
        if let nhietdo = dic["tem"] as? Int {
            self.nhietdo = nhietdo
        }
        if let doam = dic["hum"] as? Int {
            self.doam = doam
        }
        if let aqi = dic["aqi"] as? Int {
            self.aqi = aqi
        }
        if let so2 = dic["so2"] as? Int {
            self.so2 = so2
        }
        if let co2 = dic["co2"] as? Int {
            self.co2 = co2
        }
        if let co = dic["co"] as? Int {
            self.co = co
        }
        if let buiPM = dic["PM25"] as? Int {
            self.buiPM = buiPM
        }
    }
}
