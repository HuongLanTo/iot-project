//
//  HomeTableViewCell.swift
//  TheoDoiMoiTruong
//
//  Created by Duc on 4/14/20.
//  Copyright © 2020 Duc. All rights reserved.
//

import UIKit

class HomeTableViewCell: UITableViewCell {
    
    //View
    @IBOutlet weak var viewNhat: UIView!
    @IBOutlet weak var viewDam: UIView!
    @IBOutlet weak var viewFace: UIImageView!
    
    //Label
    @IBOutlet weak var lblNhietDoGio: UILabel!
    @IBOutlet weak var lblDoAmGio: UILabel!
    @IBOutlet weak var lblAQIGio: UILabel!
    @IBOutlet weak var lblNhanXet: UILabel!
    @IBOutlet weak var lblDistrict: UILabel!
    @IBOutlet weak var lblProvince: UILabel!
    @IBOutlet weak var lblThu1: UILabel!
    @IBOutlet weak var lblThu2: UILabel!
    @IBOutlet weak var lblThu3: UILabel!
    @IBOutlet weak var lblAQI_1: UILabel!
    @IBOutlet weak var lblAQI_2: UILabel!
    @IBOutlet weak var lblAQI_3: UILabel!
    @IBOutlet weak var lblNhietDo_1: UILabel!
    @IBOutlet weak var lblNhietDo_2: UILabel!
    @IBOutlet weak var lblNhietDo_3: UILabel!
    @IBOutlet weak var lblDoAm_1: UILabel!
    @IBOutlet weak var lblDoAm_2: UILabel!
    @IBOutlet weak var lblDoAm_3: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        
    }
    
    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
        
    }
    
}
