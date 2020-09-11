//
//  Node.swift
//  TheoDoiMoiTruong
//
//  Created by Duc on 6/9/20.
//  Copyright © 2020 Duc. All rights reserved.
//

import Foundation

public class NodeModel {
    var node_id:String = ""
    var node_name:String = ""
    var location_info:NodeLocation?
    
    init(dic: [String:Any]) {
        if let node_id = dic["_id"] as? String {
            self.node_id = node_id
        }
        if let node_name = dic["name"] as? String {
            self.node_name = node_name
        }
        if let location_info = dic["location_info"] as? [String:Any] {
            var dataLocation_detail = NodeLocation(dic: location_info)
            self.location_info = dataLocation_detail
        }
    }
}

public struct NodeLocation {
    var detail_location: String = ""
    
    init(dic: [String:Any]) {
        if let detail_location = dic["detail_location"] as? String {
            self.detail_location = detail_location
        }
    }
}
