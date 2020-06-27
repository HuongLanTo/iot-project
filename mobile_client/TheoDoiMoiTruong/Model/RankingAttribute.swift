//
//  RankingAttribute.swift
//  TheoDoiMoiTruong
//
//  Created by Duc on 5/13/20.
//  Copyright © 2020 Duc. All rights reserved.
//

import Foundation

public class RankingAttribute {
    var STT:Int!
    var DIADIEM:String?
    var AQI:Int!
    
    init(stt: Int, diadiem: String, aqi: Int) {
        self.STT = stt
        self.DIADIEM = diadiem
        self.AQI = aqi
    }
}
