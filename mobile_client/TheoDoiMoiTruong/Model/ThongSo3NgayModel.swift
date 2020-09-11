//
//  ThongSo3Ngay.swift
//  TheoDoiMoiTruong
//
//  Created by Duc on 6/7/20.
//  Copyright © 2020 Duc. All rights reserved.
//

import Foundation

public class ThongSo3NgayModel {
    var node_id: String = ""
    var data_location = [ThongSoNgay]()
    
    init(dic: [String:Any]) {
        if let node_id = dic["node_id"] as? String {
            self.node_id = node_id
        }
        if let data = dic["data"] as? [[String:Any]] {
            for dtaLo in data {
                var data_location1 = ThongSoNgay(dic: dtaLo)
                self.data_location.append(data_location1)
            }
        }
    }
}

public struct ThongSoNgay {
    var node_id: String = ""
    var location: String = ""
    var nhietdo: Int = 0
    var doam: Int = 0
    var aqi: Int = 0
    
    init(dic: [String:Any]) {
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
    }
}
