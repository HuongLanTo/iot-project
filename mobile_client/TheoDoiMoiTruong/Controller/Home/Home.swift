//
//  Home.swift
//  TheoDoiMoiTruong
//
//  Created by Duc on 4/13/20.
//  Copyright © 2020 Duc. All rights reserved.
//

import UIKit
import ESPullToRefresh

var curNode_ID:String = ""
var curLocation:String = ""
var curAQI:Int = 0
var curNhietDo:Int = 0
var curDoAm:Int = 0
var curSO2:Int = 0
var curCO2:Int = 0
var curBuiPM:Int = 0
var curCO:Int = 0
var curNgay1:String = "" //1 ngày trước ngày hiện tại
var curNgay2:String = "" //2 ngày trước ngày hiện tại
var curNgay3:String = "" //3 ngày trước ngày hiện tại

class Home: UIViewController {
    
    var defaults = UserDefaults.standard
    var arrThongSo3Ngay:[ThongSo3NgayModel] = []
    var arrThongSoGio:[ThongSoGioModel] = []
    var arrNode_IDsSelected:[String] = []
    //    var arrNodeIDTest:[String] = ["1","2","3","4"]
    
    @IBOutlet weak var myTableHome: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.navigationItem.hidesBackButton = true
        myTableHome.register(UINib.init(nibName: "HomeTableViewCell", bundle: nil), forCellReuseIdentifier: "HomeTableViewCell")
        myTableHome.dataSource = self
        myTableHome.delegate = self
        myTableHome.tableFooterView = UIView()
        
        navigationItem.title = "Theo Dõi Môi Trường" 
        navigationItem.rightBarButtonItem = UIBarButtonItem(title: "Node", style: .plain, target: self, action: #selector(addTapped))
        
        get3NgayTruoc()
        arrNode_IDsSelected = defaults.array(forKey: "Mang_Node_IDs") as? [String] ?? [String]()
        getThongSo3Ngay(arrNode_IDs: self.arrNode_IDsSelected)
        setupTableView()
    }
    
    //Chuyển màn hình Node
    @objc func addTapped() {
        let sb = UIStoryboard.init(name: "Main", bundle: nil)
        let vc = sb.instantiateViewController(withIdentifier: "Node") as? Node
        vc?.nodeDelegate = self
        self.navigationController?.pushViewController(vc!, animated: true)
    }
    
    //Pull to refresh
    func setupTableView() {
        self.myTableHome.es.addPullToRefresh {
            [unowned self] in
            self.getThongSo3Ngay(arrNode_IDs: self.arrNode_IDsSelected)
        }
    }
    
    override func viewWillAppear(_ animated: Bool) {
        arrNode_IDsSelected = defaults.array(forKey: "Mang_Node_IDs") as? [String] ?? [String]()
        myTableHome.reloadData()
        print("Theo dõi thông số will appear")
    }
}

//MARK: Call API
extension Home {
    func getThongSo3Ngay(arrNode_IDs: [String]) {
        //        var urlString = "http://52.221.233.65:1234/api/v1/nodes/days/last/three?node_ids="
        //        var urlString = "192.168.40.163:1234/api/v1/nodes/days/last/three?node_ids="
        //        for i in arrNode_IDs {
        //            urlString = urlString + String(i) + ","
        //        }
        //        urlString.removeLast()
        //            var urlString = "https://5ed9c5914378690016c6b36f.mockapi.io/api/thongso3ngay"
        let strArrNodeIDSelected0 = arrNode_IDs.map { String($0) }
        let strArrNodeIDSelected1 = strArrNodeIDSelected0.joined(separator: ",")
        let strParam = "{\"node_ids\":\"\(strArrNodeIDSelected1)\"}"
        let strParam64 = changeStringToBase64(str: strParam)
        let urlString = "http://52.221.233.65:1234/api/v1/nodes/days/last/three?filter=\(strParam64)"
        
        guard let url = URL(string: urlString) else { return }
        let session = URLSession.shared
        
        arrThongSo3Ngay.removeAll()
        
        let task = session.dataTask(with: url) { (data, response, error) in
            if let response = response {
                
            }
            if let data = data {
                do {
                    let json = try JSONSerialization.jsonObject(with: data, options: [])
                    if let myJson = json as? [String:Any] {
                        if let myData = myJson["data"] as? [[String:Any]] {
                            for myViTri in myData {
                                let myData1 = ThongSo3NgayModel.init(dic: myViTri)
                                self.arrThongSo3Ngay.append(myData1)
                            }
                        }
                        
                        self.getThongSoGio(arrNode_IDs: self.arrNode_IDsSelected)
                        
                    }
                }
                catch {
                    print (error)
                }
            }
        }
        task.resume()
    }
    
    func getThongSoGio(arrNode_IDs: [String]) {
        //            var urlString = "http://52.221.233.65:1234/api/v1/nodes/hours/last?node_ids="
        //            var urlString = "localhost:1234/api/v1/nodes/hours/last?node_ids="
        //            for i in arrNode_IDs {
        //                urlString = urlString + String(i) + ","
        //            }
        //            urlString.removeLast()
        let strArrNodeIDSelected0 = arrNode_IDs.map { String($0) }
        let strArrNodeIDSelected1 = strArrNodeIDSelected0.joined(separator: ",")
        let strParam = "{\"node_ids\":\"\(strArrNodeIDSelected1)\"}"
        let strParam64 = changeStringToBase64(str: strParam)
        let urlString = "http://52.221.233.65:1234/api/v1/nodes/hours/last?filter=\(strParam64)"
        
        guard let url = URL(string: urlString) else { return }
        let session = URLSession.shared
        
        arrThongSoGio.removeAll()
        
        let task = session.dataTask(with: url) { (data, response, error) in
            if let response = response {
                
            }
            if let data = data {
                do {
                    let json = try JSONSerialization.jsonObject(with: data, options: [])
                    if let myJson = json as? [String:Any] {
                        if let myData = myJson["data"] as? [[String:Any]] {
                            for myThongSoGioDic in myData {
                                let myThongSoGio = ThongSoGioModel.init(dic: myThongSoGioDic)
                                self.arrThongSoGio.append(myThongSoGio)
                                
                            }
                        }
                    }
                    DispatchQueue.main.async {
                        self.myTableHome.es.stopPullToRefresh()
                        self.myTableHome.reloadData()
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

extension Home: UITableViewDelegate {
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 200.0
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        curNode_ID = arrThongSoGio[indexPath.row].node_id
        curLocation = arrThongSoGio[indexPath.row].location
        curAQI = arrThongSoGio[indexPath.row].aqi
        curNhietDo = arrThongSoGio[indexPath.row].nhietdo
        curDoAm = arrThongSoGio[indexPath.row].doam
        curSO2 = arrThongSoGio[indexPath.row].so2
        curCO2 = arrThongSoGio[indexPath.row].co2
        curBuiPM = arrThongSoGio[indexPath.row].buiPM
        curCO = arrThongSoGio[indexPath.row].co
        
        let sb = UIStoryboard.init(name: "Main", bundle: nil)
        let vc = sb.instantiateViewController(withIdentifier: "DetailReport") as? DetailReport
        self.navigationController?.pushViewController(vc!, animated: true)
    }
    
    //delete Row
    func tableView(_ tableView: UITableView, canEditRowAt indexPath: IndexPath) -> Bool {
        return true
    }
    
    func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCell.EditingStyle, forRowAt indexPath: IndexPath) {
        if editingStyle == .delete {
            if arrNode_IDsSelected.count == 1 {
                arrThongSoGio.remove(at: indexPath.row)
                arrThongSo3Ngay.remove(at: indexPath.row)
                arrNode_IDsSelected.remove(at: indexPath.row)
                defaults.set(arrNode_IDsSelected, forKey: "Mang_Node_IDs")
                print("Deleted")
                myTableHome.beginUpdates()
                myTableHome.deleteRows(at: [indexPath], with: .automatic)
                let indexSet = IndexSet(arrayLiteral: indexPath.section)
                myTableHome.deleteSections(indexSet, with: .automatic)
                myTableHome.reloadData()
                myTableHome.endUpdates()
            } else {
                arrThongSoGio.remove(at: indexPath.row)
                arrThongSo3Ngay.remove(at: indexPath.row)
                arrNode_IDsSelected.remove(at: indexPath.row)
                defaults.set(arrNode_IDsSelected, forKey: "Mang_Node_IDs")
                print("Deleted")
                myTableHome.beginUpdates()
                myTableHome.deleteRows(at: [indexPath], with: .automatic)
                myTableHome.endUpdates()
            }
        }
    }
}

extension Home: UITableViewDataSource {
    func numberOfSections(in tableView: UITableView) -> Int {
        var numOfSection: NSInteger = 0
        
        if arrNode_IDsSelected.count > 0
        {
            myTableHome.backgroundView = nil
            numOfSection = 1
        }
        else
        {
            var noDataLabel: UILabel = UILabel(frame: CGRect(x: 0, y: 0, width: myTableHome.frame.size.width, height: myTableHome.frame.size.height))
            noDataLabel.text = "Không có dữ liệu để hiển thị"
            noDataLabel.textColor = UIColor(red: 22.0/255.0, green: 106.0/255.0, blue: 176.0/255.0, alpha: 1.0)
            noDataLabel.textAlignment = NSTextAlignment.center
            noDataLabel.font = UIFont(name: "Helvetica", size: 20)
            self.myTableHome.backgroundView = noDataLabel
        }
        
        return numOfSection
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        if arrThongSoGio.isEmpty == true {
            return 0
        }
        return arrNode_IDsSelected.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        if let cell = tableView.dequeueReusableCell(withIdentifier: "HomeTableViewCell", for: indexPath) as? HomeTableViewCell {
            cell.lblThu1.text = curNgay1
            cell.lblThu2.text = curNgay2
            cell.lblThu3.text = curNgay3
            //Tuỳ vào AQI1 khác nhau mà hiển thị text và background khác nhau
            if (arrNode_IDsSelected.count == arrThongSoGio.count && arrNode_IDsSelected.count == arrThongSo3Ngay.count) {
                if (arrThongSo3Ngay[indexPath.row].data_location[0].aqi > 0 && arrThongSo3Ngay[indexPath.row].data_location[0].aqi <= 50) {
                    cell.lblAQI_1.text = "0 - 50"
                    cell.lblAQI_1.backgroundColor = UIColor(red: 174/255, green: 231/255, blue: 102/255, alpha: 1) //Xanh la cay nhat.
                }
                if (arrThongSo3Ngay[indexPath.row].data_location[0].aqi > 50 && arrThongSo3Ngay[indexPath.row].data_location[0].aqi <= 100) {
                    cell.lblAQI_1.text = "51 - 100"
                    cell.lblAQI_1.backgroundColor = UIColor(red: 248/255, green: 217/255, blue: 76/255, alpha: 1) //Vang` nhat.
                }
                if (arrThongSo3Ngay[indexPath.row].data_location[0].aqi > 100 && arrThongSo3Ngay[indexPath.row].data_location[0].aqi <= 150) {
                    cell.lblAQI_1.text = "101 - 150"
                    cell.lblAQI_1.backgroundColor = UIColor(red: 232/255, green: 154/255, blue: 85/255, alpha: 1) //Cam nhat.
                }
                if (arrThongSo3Ngay[indexPath.row].data_location[0].aqi > 150) {
                    cell.lblAQI_1.text = "150 - 200"
                    cell.lblAQI_1.backgroundColor = UIColor(red: 224/255, green: 155/255, blue: 155/255, alpha: 1) //Do nhat.
                }
                
                //Tuỳ vào AQI2 khác nhau mà hiển thị text và background khác nhau
                if (arrThongSo3Ngay[indexPath.row].data_location[1].aqi > 0 && arrThongSo3Ngay[indexPath.row].data_location[1].aqi <= 50) {
                    cell.lblAQI_2.text = "0 - 50"
                    cell.lblAQI_2.backgroundColor = UIColor(red: 174/255, green: 231/255, blue: 102/255, alpha: 1) //Xanh la cay nhat.
                }
                if (arrThongSo3Ngay[indexPath.row].data_location[1].aqi > 50 && arrThongSo3Ngay[indexPath.row].data_location[1].aqi <= 100) {
                    cell.lblAQI_2.text = "51 - 100"
                    cell.lblAQI_2.backgroundColor = UIColor(red: 248/255, green: 217/255, blue: 76/255, alpha: 1) //Vang` nhat.
                }
                if (arrThongSo3Ngay[indexPath.row].data_location[1].aqi > 100 && arrThongSo3Ngay[indexPath.row].data_location[1].aqi <= 150) {
                    cell.lblAQI_2.text = "101 - 150"
                    cell.lblAQI_2.backgroundColor = UIColor(red: 232/255, green: 154/255, blue: 85/255, alpha: 1) //Cam nhat.
                }
                if (arrThongSo3Ngay[indexPath.row].data_location[1].aqi > 150) {
                    cell.lblAQI_2.text = "150 - 200"
                    cell.lblAQI_2.backgroundColor = UIColor(red: 224/255, green: 155/255, blue: 155/255, alpha: 1) //Do nhat.
                }
                
                //Tuỳ vào AQI3 khác nahu mà hiển thị text và background khác nhau
                if (arrThongSo3Ngay[indexPath.row].data_location[2].aqi > 0 && arrThongSo3Ngay[indexPath.row].data_location[2].aqi <= 50) {
                    cell.lblAQI_3.text = "0 - 50"
                    cell.lblAQI_3.backgroundColor = UIColor(red: 174/255, green: 231/255, blue: 102/255, alpha: 1) //Xanh la cay nhat.
                }
                if (arrThongSo3Ngay[indexPath.row].data_location[2].aqi > 50 && arrThongSo3Ngay[indexPath.row].data_location[2].aqi <= 100) {
                    cell.lblAQI_3.text = "51 - 100"
                    cell.lblAQI_3.backgroundColor = UIColor(red: 248/255, green: 217/255, blue: 76/255, alpha: 1) //Vang` nhat.
                }
                if (arrThongSo3Ngay[indexPath.row].data_location[2].aqi > 100 && arrThongSo3Ngay[indexPath.row].data_location[2].aqi <= 150) {
                    cell.lblAQI_3.text = "101 - 150"
                    cell.lblAQI_3.backgroundColor = UIColor(red: 232/255, green: 154/255, blue: 85/255, alpha: 1) //Cam nhat.
                }
                if (arrThongSo3Ngay[indexPath.row].data_location[2].aqi > 150) {
                    cell.lblAQI_3.text = "150 - 200"
                    cell.lblAQI_3.backgroundColor = UIColor(red: 224/255, green: 155/255, blue: 155/255, alpha: 1) //Do nhat.
                }
                cell.lblNhietDo_1.text = String(arrThongSo3Ngay[indexPath.row].data_location[0].nhietdo) + "°C"
                cell.lblNhietDo_2.text = String(arrThongSo3Ngay[indexPath.row].data_location[1].nhietdo) + "°C"
                cell.lblNhietDo_3.text = String(arrThongSo3Ngay[indexPath.row].data_location[2].nhietdo ) + "°C"
                cell.lblDoAm_1.text = String(arrThongSo3Ngay[indexPath.row].data_location[0].doam) + "%"
                cell.lblDoAm_2.text = String(arrThongSo3Ngay[indexPath.row].data_location[1].doam) + "%"
                cell.lblDoAm_3.text = String(arrThongSo3Ngay[indexPath.row].data_location[2].doam) + "%"
                if arrThongSoGio.count == arrThongSo3Ngay.count{
                    cell.lblDistrict.text = arrThongSo3Ngay[indexPath.row].data_location[0].node_id
                    cell.lblProvince.text = arrThongSo3Ngay[indexPath.row].data_location[0].location
                    cell.lblNhietDoGio.text = String(arrThongSoGio[indexPath.row].nhietdo) + "°C"
                    cell.lblDoAmGio.text = String(arrThongSoGio[indexPath.row].doam) + "%"
                    cell.lblAQIGio.text = String(arrThongSoGio[indexPath.row].aqi) + " AQI"
                    //Tuỳ vào AQI mà từng view màu, ảnh, label nhận xét sẽ khác
                    if (arrThongSoGio[indexPath.row].aqi > 0 && arrThongSoGio[indexPath.row].aqi <= 50) {
                        cell.viewNhat.backgroundColor = UIColor(red: 174/255, green: 231/255, blue: 102/255, alpha: 1) //Xanh la cay nhat.
                        cell.viewDam.backgroundColor = UIColor(red: 155/255, green: 216/255, blue: 77/255, alpha: 1) //Xanh la cay dam.
                        cell.viewFace.image = UIImage(named: "ic_happy")
                        cell.lblNhanXet.text = "Tốt"
                    }
                    if (arrThongSoGio[indexPath.row].aqi > 50 && arrThongSoGio[indexPath.row].aqi <= 100) {
                        cell.viewNhat.backgroundColor = UIColor(red: 248/255, green: 217/255, blue: 76/255, alpha: 1) //Vang` nhat.
                        cell.viewDam.backgroundColor = UIColor(red: 245/255, green: 207/255, blue: 56/255, alpha: 1) //Vang` dam.
                        cell.viewFace.image = UIImage(named: "ic_normal")
                        cell.lblNhanXet.text = "Trung Bình"
                    }
                    if (arrThongSoGio[indexPath.row].aqi > 100 && arrThongSoGio[indexPath.row].aqi <= 150) {
                        cell.viewNhat.backgroundColor = UIColor(red: 232/255, green: 154/255, blue: 85/255, alpha: 1) //Cam nhat.
                        cell.viewDam.backgroundColor = UIColor(red: 230/255, green: 142/255, blue: 69/255, alpha: 1) //Cam dam.
                        cell.viewFace.image = UIImage(named: "ic_sad")
                        cell.lblNhanXet.text = "Cao"
                    }
                    if (arrThongSoGio[indexPath.row].aqi > 150) {
                        cell.viewNhat.backgroundColor = UIColor(red: 224/255, green: 155/255, blue: 155/255, alpha: 1) //Do nhat.
                        cell.viewDam.backgroundColor = UIColor(red: 228/255, green: 41/255, blue: 60/255, alpha: 1) //Do dam.
                        cell.viewFace.image = UIImage(named: "ic_mask")
                        cell.lblNhanXet.text = "Nguy Hiểm"
                    }
                }
            }
            return cell
        }
        return UITableViewCell()
    }
}

extension Home {
    func get3NgayTruoc() {
        let formatterDay = DateFormatter()
        formatterDay.dateFormat = "EEEE"
        
        let date1 = Date().addingTimeInterval(-86000)
        let date2 = Date().addingTimeInterval(-86000 * 2)
        let date3 = Date().addingTimeInterval(-86000 * 3)
        
        curNgay1 = formatterDay.string(from: date1)
        curNgay2 = formatterDay.string(from: date2)
        curNgay3 = formatterDay.string(from: date3)
    }
    
    func changeStringToBase64(str: String) -> String {
        let utf8str = str.data(using: .utf8)
        if let base64Encoded = utf8str?.base64EncodedString(options: Data.Base64EncodingOptions(rawValue: 0)) {
            return base64Encoded
        }
        return ""
    }
}

extension Home: NodeDelegate {
    func reloadTable() {
        arrNode_IDsSelected = defaults.array(forKey: "Mang_Node_IDs") as? [String] ?? [String]()
        self.getThongSo3Ngay(arrNode_IDs: self.arrNode_IDsSelected)
        //        myTableHome.reloadData()
    }
}
