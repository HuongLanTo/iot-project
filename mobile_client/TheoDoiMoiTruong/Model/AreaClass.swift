//
//  Area.swift
//  TheoDoiMoiTruong
//
//  Created by Duc on 6/9/20.
//  Copyright © 2020 Duc. All rights reserved.
//

import Foundation

public class AreaClass {
    var district:String?
    var province:String?
    
    init(dic: [String:Any]) {
        self.district = dic["district"] as? String
        self.province = dic["province"] as? String
    }
}
