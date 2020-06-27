//
//  Ranking.swift
//  TheoDoiMoiTruong
//
//  Created by Duc on 5/13/20.
//  Copyright © 2020 Duc. All rights reserved.
//

import UIKit

class Ranking: UIViewController {

    @IBOutlet weak var myTableRanking: UITableView!
    
    var rankingArr: [RankingAttribute] = [RankingAttribute(stt: 1, diadiem: "Đại học Thăng Long", aqi: 155),
                                          RankingAttribute(stt: 2, diadiem: "KĐT Kim Văn Kim Lũ", aqi: 125),
                                          RankingAttribute(stt: 3, diadiem: "Royal City", aqi: 90),
                                          RankingAttribute(stt: 4, diadiem: "KĐT Sala", aqi: 45)]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        myTableRanking.register(UINib(nibName: "RankingTableViewCell", bundle: nil), forCellReuseIdentifier: "RankingTableViewCell")
        myTableRanking.dataSource = self
        myTableRanking.delegate = self
        myTableRanking.tableFooterView = UIView()
    }
}

extension Ranking: UITableViewDelegate {
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 50.0
    }
}

extension Ranking: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return rankingArr.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        if let cell = tableView.dequeueReusableCell(withIdentifier: "RankingTableViewCell", for: indexPath) as? RankingTableViewCell {
            cell.lblID.text = String(rankingArr[indexPath.row].STT)
            cell.lblDiaDiem.text = rankingArr[indexPath.row].DIADIEM
            cell.lblAQI.text = String(rankingArr[indexPath.row].AQI)
            //Kiểm tra từng giá trị AQI rồi set màu cho label AQI
            let value = rankingArr[indexPath.row].AQI!
            if (value > 0 && value <= 50) {
                cell.lblAQI.backgroundColor = UIColor(red: 155/255, green: 216/255, blue: 77/255, alpha: 1) //Xanh lá cây đậm.
            }
            else if (value > 50 && value <= 100) {
                cell.lblAQI.backgroundColor = UIColor(red: 245/255, green: 207/255, blue: 56/255, alpha: 1) //Vàng đậm.
            }
            else if (value > 100 && value <= 150) {
                cell.lblAQI.backgroundColor = UIColor(red: 230/255, green: 142/255, blue: 69/255, alpha: 1) //Cam đậm.
            }
            else if (value > 150) {
                cell.lblAQI.backgroundColor = UIColor(red: 228/255, green: 41/255, blue: 60/255, alpha: 1) //Đỏ đậm.
            }
            else {
                cell.lblAQI.backgroundColor = UIColor.black
            }
            return cell
        }
        return UITableViewCell()
    }
}
