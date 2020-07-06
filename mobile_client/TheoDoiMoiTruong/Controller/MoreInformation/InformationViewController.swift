//
//  InformationViewController.swift
//  TheoDoiMoiTruong
//
//  Created by Duc on 6/29/20.
//  Copyright © 2020 Duc. All rights reserved.
//

import UIKit

var curURLInfor: String = ""

class InformationViewController: UIViewController {

    let arrTitleInfor:[String] = ["Nhiệt độ", "Độ ẩm", "Chỉ số AQI", "Bụi PM2.5",
                                  "SO2", "NO2", "O3", "CO"]
    let arrImgInfor:[String] = ["img_NhietDoInfor", "img_DoAmInfor", "img_AQIInfor", "img_BuiPM25Infor",
                                "img_SO2Infor", "img_NO2Infor", "img_O3Infor", "img_COInfor"]
    let arrURLInfor:[String] = ["https://vi.wikipedia.org/wiki/Nhi%E1%BB%87t_%C4%91%E1%BB%99",
                                "https://vi.wikipedia.org/wiki/%C4%90%E1%BB%99_%E1%BA%A9m",
                                "https://vi.wikipedia.org/wiki/Ch%E1%BB%89_s%E1%BB%91_ch%E1%BA%A5t_l%C6%B0%E1%BB%A3ng_kh%C3%B4ng_kh%C3%AD",
                                "https://vi.wikipedia.org/wiki/%C3%94_nhi%E1%BB%85m_kh%C3%B4ng_kh%C3%AD",
                                "https://vi.wikipedia.org/wiki/L%C6%B0u_hu%E1%BB%B3nh_%C4%91i%C3%B4x%C3%ADt",
                                "https://vi.wikipedia.org/wiki/Nit%C6%A1_%C4%91i%C3%B4x%C3%ADt",
                                "https://vi.wikipedia.org/wiki/%C3%94z%C3%B4n",
                                "https://vi.wikipedia.org/wiki/Cacbon_monoxit"]
    
    @IBOutlet weak var tableViewInformation: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.navigationItem.title = "Thông tin chỉ số"
        tableViewInformation.tableFooterView = UIView()
        
        tableViewInformation.register(UINib(nibName: "InformationCell", bundle: nil), forCellReuseIdentifier: "InformationCell")
        tableViewInformation.delegate = self
        tableViewInformation.dataSource = self
    }
    
    override func viewWillAppear(_ animated: Bool) {
        print("Information will appear")
    }
}

extension InformationViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 120.0
    }
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        curURLInfor = arrURLInfor[indexPath.row]
        
        let sb = UIStoryboard.init(name: "Main", bundle: nil)
        let vc = sb.instantiateViewController(withIdentifier: "DetailInformation") as? DetailInformation
        self.navigationController?.pushViewController(vc!, animated: true)
    }
}

extension InformationViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return arrTitleInfor.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        if let cell = tableView.dequeueReusableCell(withIdentifier: "InformationCell", for: indexPath) as? InformationCell {
            cell.lblTitle.text = arrTitleInfor[indexPath.row]
            cell.imgInfor.image = UIImage(named: arrImgInfor[indexPath.row])
            return cell
        }
        return UITableViewCell()
    }
}
