//
//  ThongSo3Ngay.swift
//  TheoDoiMoiTruong
//
//  Created by Duc on 6/7/20.
//  Copyright © 2020 Duc. All rights reserved.
//

import Foundation

public class ThongSo3Ngay {
    var distric:String?
    var province:String?
    var thu1:String? //thu1 cach 1 ngay` tu` ngay` hien tai
    var thu2:String? //thu2 cach 2 ngay` tu` ngay` hien tai
    var thu3:String? //thu3 cach 3 ngay` tu` ngay` hien tai
    var nhietdo_thu1:Int?
    var nhietdo_thu2:Int?
    var nhietdo_thu3:Int?
    var doam_thu1:Int?
    var doam_thu2:Int?
    var doam_thu3:Int?
    var aqi_thu1:Int?
    var aqi_thu2:Int?
    var aqi_thu3:Int?
    
    init(dic: [String:Any]) {
        self.distric = dic["distric"] as? String
        self.province = dic["province"] as? String
        self.nhietdo_thu1 = dic["nhietdo_thu1"] as? Int
        self.nhietdo_thu2 = dic["nhietdo_thu2"] as? Int
        self.nhietdo_thu3 = dic["nhietdo_thu3"] as? Int
        self.doam_thu1 = dic["doam_thu1"] as? Int
        self.doam_thu2 = dic["doam_thu2"] as? Int
        self.doam_thu3 = dic["doam_thu3"] as? Int
        self.aqi_thu1 = dic["aqi_thu1"] as? Int
        self.aqi_thu2 = dic["aqi_thu2"] as? Int
        self.aqi_thu3 = dic["aqi_thu3"] as? Int
        
        let formatterDay = DateFormatter()
        formatterDay.dateFormat = "EEEE"
        
        let date1 = Date().addingTimeInterval(-86000)
        let date2 = Date().addingTimeInterval(-86000 * 2)
        let date3 = Date().addingTimeInterval(-86000 * 3)
        
        self.thu1 = formatterDay.string(from: date1)
        self.thu2 = formatterDay.string(from: date2)
        self.thu3 = formatterDay.string(from: date3)
        
    }
}
