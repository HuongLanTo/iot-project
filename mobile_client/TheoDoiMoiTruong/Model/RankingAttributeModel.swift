//
//  RankingAttribute.swift
//  TheoDoiMoiTruong
//
//  Created by Duc on 5/13/20.
//  Copyright © 2020 Duc. All rights reserved.
//

import Foundation

public class RankingAttributeModel {
    var stt:Int = 0
    var node_id:String = ""
    var diadiem:String = ""
    var aqi:Int = 0
    
    init(dic: [String:Any]) {
        if let stt = dic["num"] as? Int {
            self.stt = stt
        }
        if let node_id = dic["node_id"] as? String {
            self.node_id = node_id
        }
        if let diadiem = dic["location"] as? String {
            self.diadiem = diadiem
        }
        if let aqi = dic["aqi"] as? Int {
            self.aqi = aqi
        }
    }
}
