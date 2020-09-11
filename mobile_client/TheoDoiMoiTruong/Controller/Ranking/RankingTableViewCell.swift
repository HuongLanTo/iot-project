//
//  RankingTableViewCell.swift
//  TheoDoiMoiTruong
//
//  Created by Duc on 5/13/20.
//  Copyright © 2020 Duc. All rights reserved.
//

import UIKit

class RankingTableViewCell: UITableViewCell {
    
    @IBOutlet weak var lblSTT: UILabel!
    @IBOutlet weak var lblDiaDiem: UILabel!
    @IBOutlet weak var lblAQI: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        
    }
    
    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
    }
    
}
