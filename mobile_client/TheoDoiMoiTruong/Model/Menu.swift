//
//  Menu.swift
//  TheoDoiMoiTruong
//
//  Created by Duc on 4/14/20.
//  Copyright © 2020 Duc. All rights reserved.
//

import Foundation

public class Menu {
    var TITLE:String?
    var IMG:String?
    
    init(title: String, img: String) {
        self.TITLE = title as? String
        self.IMG = img as? String
    }
}
