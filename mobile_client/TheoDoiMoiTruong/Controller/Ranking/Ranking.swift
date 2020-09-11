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
    @IBOutlet weak var lblDateBefore: UILabel!
    
    var dateString:String = "" //Title ngày hôm qua
    var isoDate1:String = "" //ISO Date làm tham số truyền vào
    var rankingArr: [RankingAttributeModel] = []
    var thongSoGioGanNhat:ThongSoGioModel = ThongSoGioModel()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        myTableRanking.register(UINib(nibName: "RankingTableViewCell", bundle: nil), forCellReuseIdentifier: "RankingTableViewCell")
        myTableRanking.dataSource = self
        myTableRanking.delegate = self
        myTableRanking.tableFooterView = UIView()
        changeDateToString()
        getISODayBefore()
        
        self.navigationItem.title = "Bảng xếp hạng chỉ số AQI"
        
        //Set text ngày hôm qua
        lblDateBefore.text = dateString
        getRankingNode(date: isoDate1)
    }
    
    override func viewWillAppear(_ animated: Bool) {
        myTableRanking.reloadData()
        print("Ranking will apeear")
    }
}

extension Ranking: UITableViewDelegate {
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 50.0
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        getGioGanNhat(curNode_ID: rankingArr[indexPath.row].node_id ?? "")
        curNode_ID = rankingArr[indexPath.row].node_id ?? ""
        
    }
}

extension Ranking: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return rankingArr.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        if let cell = tableView.dequeueReusableCell(withIdentifier: "RankingTableViewCell", for: indexPath) as? RankingTableViewCell {
            cell.lblSTT.text = String(rankingArr[indexPath.row].stt)
            cell.lblDiaDiem.text = "\(rankingArr[indexPath.row].node_id), \(rankingArr[indexPath.row].diadiem ?? "")"
            cell.lblAQI.text = String(rankingArr[indexPath.row].aqi)
            //Kiểm tra từng giá trị AQI rồi set màu cho label AQI
            let value = rankingArr[indexPath.row].aqi
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

// MARK: Call API
extension Ranking {
    func getRankingNode(date: String) {
        //        var urlString = "http://52.221.233.65:1234/api/v1/nodes/days/last/all?date=\(date)"
        //        var urlString = "localhost:1234/api/v1/nodes/hours/last?node_ids="
        let strParam = "{\"node_ids\":\"\(date)\"}"
        let strParam64 = changeStringToBase64(str: strParam)
        let urlString = "http://52.221.233.65:1234/api/v1/nodes/days/last/all?filter=\(strParam64)"
        guard let url = URL(string: urlString) else { return }
        let session = URLSession.shared
        
        rankingArr.removeAll()
        
        let task = session.dataTask(with: url) { (data, response, error) in
            if let response = response {
                
            }
            if let data = data {
                do {
                    let json = try JSONSerialization.jsonObject(with: data, options: [])
                    if let myJson = json as? [String:Any] {
                        if let myData = myJson["data"] as? [[String:Any]] {
                            for myRankDic in myData {
                                let myRank = RankingAttributeModel.init(dic: myRankDic)
                                self.rankingArr.append(myRank)
                            }
                        }
                    }
                    DispatchQueue.main.async {
                        self.myTableRanking.reloadData()
                    }
                }
                catch {
                    print (error)
                }
            }
        }
        task.resume()
    }
    
    func getGioGanNhat(curNode_ID: String) {
        let urlString = "http://52.221.233.65:1234/api/v1/nodes/hours/\(curNode_ID)/last"
        guard let url = URL(string: urlString) else { return }
        let session = URLSession.shared
        
        let task = session.dataTask(with: url) { (data, response, error) in
            if let response = response {
                
            }
            if let data = data {
                do {
                    let json = try JSONSerialization.jsonObject(with: data, options: [])
                    if let myJson = json as? [String:Any] {
                        if let myData = myJson["data"] as? [String:Any] {
                            self.thongSoGioGanNhat = ThongSoGioModel.init(dic: myData)
                            curLocation = self.thongSoGioGanNhat.location
                            curNhietDo = self.thongSoGioGanNhat.nhietdo
                            curDoAm = self.thongSoGioGanNhat.doam
                            curAQI = self.thongSoGioGanNhat.aqi
                            curSO2 = self.thongSoGioGanNhat.so2
                            curCO2 = self.thongSoGioGanNhat.co2
                            curBuiPM = self.thongSoGioGanNhat.buiPM
                            curCO = self.thongSoGioGanNhat.co
                        }
                        DispatchQueue.main.async {
                            let sb = UIStoryboard.init(name: "Main", bundle: nil)
                            let vc = sb.instantiateViewController(withIdentifier: "DetailReport") as? DetailReport
                            self.navigationController?.pushViewController(vc!, animated: true)
                        }
                    }
                }
                catch {
                    print (error)
                }
            }
        }
        task.resume()
    }
}

extension Ranking {
    //Lấy String từ ngày hôm qua
    func changeDateToString() {
        let dateYesterday = Date().addingTimeInterval(-60*60*24)
        
        let formaterDate = DateFormatter()
        formaterDate.dateFormat = "dd-MM-YYYY"
        
        dateString = formaterDate.string(from: dateYesterday)
    }
    
    //Lấy String dạng ISO 3 ngày trước đấy
    func getISODayBefore() {
        let dateYesterday1 = Date().addingTimeInterval(-60*60*24)
        
        let formaterDate = DateFormatter()
        formaterDate.dateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
        
        isoDate1 = formaterDate.string(from: dateYesterday1)
    }
    
    func changeStringToBase64(str: String) -> String {
        let utf8str = str.data(using: .utf8)
        if let base64Encoded = utf8str?.base64EncodedString(options: Data.Base64EncodingOptions(rawValue: 0)) {
            return base64Encoded
        }
        return ""
    }
}
