//
//  ThongSoGio.swift
//  TheoDoiMoiTruong
//
//  Created by Duc on 6/7/20.
//  Copyright © 2020 Duc. All rights reserved.
//

import Foundation

public class ThongSoGio {
    var distric:String?
    var province:String?
    var nhietdo:Int?
    var doam:Int?
    var aqi:Int?
    var so2:Int?
    var co2:Int?
    var o3:Int?
    var co:Int?
    
    init(dic: [String: Any]) {
        self.province = dic["province"] as? String
        self.distric = dic["distric"] as? String
        self.nhietdo = dic["nhietdo"] as? Int
        self.doam = dic["doam"] as? Int
        self.aqi = dic["aqi"] as? Int
        self.so2 = dic["so2"] as? Int
        self.co2 = dic["co2"] as? Int
        self.o3 = dic["o3"] as? Int
        self.co = dic["co"] as? Int
    }
}
