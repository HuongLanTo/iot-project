//
//  Home.swift
//  TheoDoiMoiTruong
//
//  Created by Duc on 4/13/20.
//  Copyright © 2020 Duc. All rights reserved.
//

import UIKit

var curDistrict:String = ""
var curProvince:String = ""
var curAQI:Int = 0
var curNhietDo:Int = 0
var curDoAm:Int = 0
var curSO2:Int = 0
var curCO2:Int = 0
var curO3:Int = 0
var curCO:Int = 0
var curNgay1:String = "" //1 ngày trước ngày hiện tại
var curNgay2:String = "" //2 ngày trước ngày hiện tại
var curNgay3:String = "" //3 ngày trước ngày hiện tại

class Home: UIViewController {

//    var menu_vc: MenuViewController!
    
    var arrThongSo3Ngay:[ThongSo3Ngay] = []
    var arrThongSoGio:[ThongSoGio] = []
    
    @IBOutlet weak var myTableHome: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.navigationItem.hidesBackButton = true
        myTableHome.register(UINib.init(nibName: "HomeTableViewCell", bundle: nil), forCellReuseIdentifier: "HomeTableViewCell")
        myTableHome.dataSource = self
        myTableHome.delegate = self
        myTableHome.tableFooterView = UIView()

        navigationItem.title = "Theo Dõi Môi Trường" 
        navigationItem.rightBarButtonItem = UIBarButtonItem(title: "Thêm", style: .plain, target: self, action: #selector(addTapped))
        
        getThongSo3Ngay()
        
//        //Làm menu
//        menu_vc = self.storyboard?.instantiateViewController(withIdentifier: "MenuViewController") as! MenuViewController
//        //Swipe left, right to open/close menu
//        let swipeRight = UISwipeGestureRecognizer(target: self, action: #selector(self.respondToGesture(gesture:)))
//        swipeRight.direction = UISwipeGestureRecognizer.Direction.right
//        self.view.addGestureRecognizer(swipeRight)
//
//        let swipeLeft = UISwipeGestureRecognizer(target: self, action: #selector(self.respondToGesture(gesture:)))
//        swipeLeft.direction = UISwipeGestureRecognizer.Direction.left
//        self.view.addGestureRecognizer(swipeLeft)
    }
    
    @objc func addTapped() {
        let sb = UIStoryboard.init(name: "Main", bundle: nil)
        let vc = sb.instantiateViewController(withIdentifier: "Area") as? Area
        self.navigationController?.pushViewController(vc!, animated: true)
    }
    
    override func viewWillAppear(_ animated: Bool) {
        print("Theo dõi thông số will appear")
    }
//    @objc func respondToGesture(gesture: UISwipeGestureRecognizer) -> Void {
//        if gesture.direction == UISwipeGestureRecognizer.Direction.right {
//            show_menu()
//        }
//
//        else if gesture.direction == UISwipeGestureRecognizer.Direction.left {
//            close_on_swipe()
//        }
//    }
//
//    func close_on_swipe() {
//        if AppDelegate.menu_bool == true {
//            //show the menu
//            //show_menu()
//        }
//        else {
//            //close menu
//            close_menu()
//        }
//    }
//
//    @IBAction func menu_action(_ sender: UIBarButtonItem) {
//        //show menu
//        if AppDelegate.menu_bool == true {
//            //show the menu
//            show_menu()
//        }
//        else {
//            //close menu
//            close_menu()
//        }
//    }
//
//    func show_menu() {
//        //self.menu_vc.view.backgroundColor = UIColor.black.withAlphaComponent(0.7)
//        UIView.animate(withDuration: 0.5) {
//            self.menu_vc.view.frame = CGRect(x: 0, y: 0, width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
//            self.addChild(self.menu_vc)
//            self.view.addSubview(self.menu_vc.view)
//            AppDelegate.menu_bool = false
//        }
//    }
//
//    func close_menu() {
//        UIView.animate(withDuration: 0.5, animations: {
//            self.menu_vc.view.frame = CGRect(x: -UIScreen.main.bounds.width, y: 0, width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
//        }) { (finished) in
//            self.menu_vc.view.removeFromSuperview()
//        }
//        AppDelegate.menu_bool = true
//    }
    
    func getThongSo3Ngay() {
        let urlString = "https://5ed9c5914378690016c6b36f.mockapi.io/api/thongso3ngay"
        guard let url = URL(string: urlString) else { return }
        let session = URLSession.shared
        
        arrThongSo3Ngay.removeAll()
        
        let task = session.dataTask(with: url) { (data, response, error) in
            if let response = response {
                
            }
            if let data = data {
                do {
                    let json = try JSONSerialization.jsonObject(with: data, options: [])
                    if let myJson = json as? [[String:Any]] {
                        for myThongSo3NgayDic in myJson {
                            let myThongSo3Ngay = ThongSo3Ngay.init(dic: myThongSo3NgayDic)
                            self.arrThongSo3Ngay.append(myThongSo3Ngay)
                        }
                        
                        self.getThongSoGio()
                        
                    }
                }
                catch {
                    print (error)
                }
            }
        }
        task.resume()
    }
    
    func getThongSoGio() {
        let urlString = "https://5ed9c5914378690016c6b36f.mockapi.io/api/thongsogio"
        guard let url = URL(string: urlString) else { return }
        let session = URLSession.shared
        
        arrThongSoGio.removeAll()
        
        let task = session.dataTask(with: url) { (data, response, error) in
            if let response = response {
                
            }
            if let data = data {
                do {
                    let json = try JSONSerialization.jsonObject(with: data, options: [])
                    if let myJson = json as? [[String:Any]] {
                        for myThongSoGioDic in myJson {
                            let myThongSoGio = ThongSoGio.init(dic: myThongSoGioDic)
                            self.arrThongSoGio.append(myThongSoGio)
                        }
                    }
                    DispatchQueue.main.async {
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
        curDistrict = arrThongSoGio[indexPath.row].distric ?? ""
        curProvince = arrThongSoGio[indexPath.row].province ?? ""
        curAQI = arrThongSoGio[indexPath.row].aqi ?? 0
        curNhietDo = arrThongSoGio[indexPath.row].nhietdo ?? 0
        curDoAm = arrThongSoGio[indexPath.row].doam ?? 0
        curSO2 = arrThongSoGio[indexPath.row].so2 ?? 0
        curCO2 = arrThongSoGio[indexPath.row].co2 ?? 0
        curO3 = arrThongSoGio[indexPath.row].o3 ?? 0
        curCO = arrThongSoGio[indexPath.row].co ?? 0
        curNgay1 = arrThongSo3Ngay[indexPath.row].thu1 ?? ""
        curNgay2 = arrThongSo3Ngay[indexPath.row].thu2 ?? ""
        curNgay3 = arrThongSo3Ngay[indexPath.row].thu3 ?? ""
        
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
            arrThongSoGio.remove(at: indexPath.row)
            arrThongSo3Ngay.remove(at: indexPath.row)
            print("Deleted")
            myTableHome.beginUpdates()
            myTableHome.deleteRows(at: [indexPath], with: .automatic)
            myTableHome.endUpdates()
        }
    }
}

extension Home: UITableViewDataSource {
    func numberOfSections(in tableView: UITableView) -> Int {
        var numOfSection: NSInteger = 0

        if arrThongSo3Ngay.count > 0
         {
            myTableHome.backgroundView = nil
            numOfSection = 1
         }
         else
         {
            var noDataLabel: UILabel = UILabel(frame: CGRect(x: 0, y: 0, width: myTableHome.frame.size.width, height: myTableHome.frame.size.height))
            noDataLabel.text = "No Data Available"
            noDataLabel.textColor = UIColor(red: 22.0/255.0, green: 106.0/255.0, blue: 176.0/255.0, alpha: 1.0)
            noDataLabel.textAlignment = NSTextAlignment.center
            self.myTableHome.backgroundView = noDataLabel
          }

        return numOfSection
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return arrThongSo3Ngay.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        if let cell = tableView.dequeueReusableCell(withIdentifier: "HomeTableViewCell", for: indexPath) as? HomeTableViewCell {
            cell.lblThu1.text = arrThongSo3Ngay[indexPath.row].thu1
            cell.lblThu2.text = arrThongSo3Ngay[indexPath.row].thu2
            cell.lblThu3.text = arrThongSo3Ngay[indexPath.row].thu3
            //Tuỳ vào AQI1 khác nahu mà hiển thị text và background khác nhau
            if (arrThongSo3Ngay[indexPath.row].aqi_thu1! > 0 && arrThongSo3Ngay[indexPath.row].aqi_thu1! <= 50) {
                cell.lblAQI_1.text = "0 - 50"
                cell.lblAQI_1.backgroundColor = UIColor(red: 174/255, green: 231/255, blue: 102/255, alpha: 1) //Xanh la cay nhat.
            }
            if (arrThongSo3Ngay[indexPath.row].aqi_thu1! > 50 && arrThongSo3Ngay[indexPath.row].aqi_thu1! <= 100) {
                cell.lblAQI_1.text = "51 - 100"
                cell.lblAQI_1.backgroundColor = UIColor(red: 248/255, green: 217/255, blue: 76/255, alpha: 1) //Vang` nhat.
            }
            if (arrThongSo3Ngay[indexPath.row].aqi_thu1! > 100 && arrThongSo3Ngay[indexPath.row].aqi_thu1! <= 150) {
                cell.lblAQI_1.text = "101 - 150"
                cell.lblAQI_1.backgroundColor = UIColor(red: 232/255, green: 154/255, blue: 85/255, alpha: 1) //Cam nhat.
            }
            if (arrThongSo3Ngay[indexPath.row].aqi_thu1! > 150) {
                cell.lblAQI_1.text = "150 - 200"
                cell.lblAQI_1.backgroundColor = UIColor(red: 224/255, green: 155/255, blue: 155/255, alpha: 1) //Do nhat.
            }
            
            //Tuỳ vào AQI2 khác nahu mà hiển thị text và background khác nhau
            if (arrThongSo3Ngay[indexPath.row].aqi_thu2! > 0 && arrThongSo3Ngay[indexPath.row].aqi_thu2! <= 50) {
                cell.lblAQI_2.text = "0 - 50"
                cell.lblAQI_2.backgroundColor = UIColor(red: 174/255, green: 231/255, blue: 102/255, alpha: 1) //Xanh la cay nhat.
            }
            if (arrThongSo3Ngay[indexPath.row].aqi_thu2! > 50 && arrThongSo3Ngay[indexPath.row].aqi_thu2! <= 100) {
                cell.lblAQI_2.text = "51 - 100"
                cell.lblAQI_2.backgroundColor = UIColor(red: 248/255, green: 217/255, blue: 76/255, alpha: 1) //Vang` nhat.
            }
            if (arrThongSo3Ngay[indexPath.row].aqi_thu2! > 100 && arrThongSo3Ngay[indexPath.row].aqi_thu2! <= 150) {
                cell.lblAQI_2.text = "101 - 150"
                cell.lblAQI_2.backgroundColor = UIColor(red: 232/255, green: 154/255, blue: 85/255, alpha: 1) //Cam nhat.
            }
            if (arrThongSo3Ngay[indexPath.row].aqi_thu2! > 150) {
                cell.lblAQI_2.text = "150 - 200"
                cell.lblAQI_2.backgroundColor = UIColor(red: 224/255, green: 155/255, blue: 155/255, alpha: 1) //Do nhat.
            }
            
            //Tuỳ vào AQI3 khác nahu mà hiển thị text và background khác nhau
            if (arrThongSo3Ngay[indexPath.row].aqi_thu3! > 0 && arrThongSo3Ngay[indexPath.row].aqi_thu3! <= 50) {
                cell.lblAQI_3.text = "0 - 50"
                cell.lblAQI_3.backgroundColor = UIColor(red: 174/255, green: 231/255, blue: 102/255, alpha: 1) //Xanh la cay nhat.
            }
            if (arrThongSo3Ngay[indexPath.row].aqi_thu3! > 50 && arrThongSo3Ngay[indexPath.row].aqi_thu3! <= 100) {
                cell.lblAQI_3.text = "51 - 100"
                cell.lblAQI_3.backgroundColor = UIColor(red: 248/255, green: 217/255, blue: 76/255, alpha: 1) //Vang` nhat.
            }
            if (arrThongSo3Ngay[indexPath.row].aqi_thu3! > 100 && arrThongSo3Ngay[indexPath.row].aqi_thu3! <= 150) {
                cell.lblAQI_3.text = "101 - 150"
                cell.lblAQI_3.backgroundColor = UIColor(red: 232/255, green: 154/255, blue: 85/255, alpha: 1) //Cam nhat.
            }
            if (arrThongSo3Ngay[indexPath.row].aqi_thu3! > 150) {
                cell.lblAQI_3.text = "150 - 200"
                cell.lblAQI_3.backgroundColor = UIColor(red: 224/255, green: 155/255, blue: 155/255, alpha: 1) //Do nhat.
            }
            cell.lblNhietDo_1.text = String(arrThongSo3Ngay[indexPath.row].nhietdo_thu1 ?? 0) + "°C"
            cell.lblNhietDo_2.text = String(arrThongSo3Ngay[indexPath.row].nhietdo_thu2 ?? 0) + "°C"
            cell.lblNhietDo_3.text = String(arrThongSo3Ngay[indexPath.row].nhietdo_thu3 ?? 0) + "°C"
            cell.lblDoAm_1.text = String(arrThongSo3Ngay[indexPath.row].doam_thu1 ?? 0) + "%"
            cell.lblDoAm_2.text = String(arrThongSo3Ngay[indexPath.row].doam_thu2 ?? 0) + "%"
            cell.lblDoAm_3.text = String(arrThongSo3Ngay[indexPath.row].doam_thu3 ?? 0) + "%"
            if arrThongSoGio[indexPath.row].distric == arrThongSo3Ngay[indexPath.row].distric && arrThongSoGio[indexPath.row].province == arrThongSo3Ngay[indexPath.row].province {
                cell.lblDistrict.text = arrThongSo3Ngay[indexPath.row].distric
                cell.lblProvince.text = arrThongSo3Ngay[indexPath.row].province
                cell.lblNhietDoGio.text = String(arrThongSoGio[indexPath.row].nhietdo ?? 0) + "°C"
                cell.lblDoAmGio.text = String(arrThongSoGio[indexPath.row].doam ?? 0) + "%"
                cell.lblAQIGio.text = String(arrThongSoGio[indexPath.row].aqi ?? 0) + " AQI"
                //Tuỳ vào AQI mà từng view màu, ảnh, label nhận xét sẽ khác
                if (arrThongSoGio[indexPath.row].aqi! > 0 && arrThongSoGio[indexPath.row].aqi! <= 50) {
                    cell.viewNhat.backgroundColor = UIColor(red: 174/255, green: 231/255, blue: 102/255, alpha: 1) //Xanh la cay nhat.
                    cell.viewDam.backgroundColor = UIColor(red: 155/255, green: 216/255, blue: 77/255, alpha: 1) //Xanh la cay dam.
                    cell.viewFace.image = UIImage(named: "ic_happy")
                    cell.lblNhanXet.text = "Tốt"
                }
                if (arrThongSoGio[indexPath.row].aqi! > 50 && arrThongSoGio[indexPath.row].aqi! <= 100) {
                    cell.viewNhat.backgroundColor = UIColor(red: 248/255, green: 217/255, blue: 76/255, alpha: 1) //Vang` nhat.
                    cell.viewDam.backgroundColor = UIColor(red: 245/255, green: 207/255, blue: 56/255, alpha: 1) //Vang` dam.
                    cell.viewFace.image = UIImage(named: "ic_normal")
                    cell.lblNhanXet.text = "Trung Bình"
                }
                if (arrThongSoGio[indexPath.row].aqi! > 100 && arrThongSoGio[indexPath.row].aqi! <= 150) {
                    cell.viewNhat.backgroundColor = UIColor(red: 232/255, green: 154/255, blue: 85/255, alpha: 1) //Cam nhat.
                    cell.viewDam.backgroundColor = UIColor(red: 230/255, green: 142/255, blue: 69/255, alpha: 1) //Cam dam.
                    cell.viewFace.image = UIImage(named: "ic_sad")
                    cell.lblNhanXet.text = "Cao"
                }
                if (arrThongSoGio[indexPath.row].aqi! > 150) {
                    cell.viewNhat.backgroundColor = UIColor(red: 224/255, green: 155/255, blue: 155/255, alpha: 1) //Do nhat.
                    cell.viewDam.backgroundColor = UIColor(red: 228/255, green: 41/255, blue: 60/255, alpha: 1) //Do dam.
                    cell.viewFace.image = UIImage(named: "ic_mask")
                    cell.lblNhanXet.text = "Nguy Hiểm"
                }
            }
            return cell
        }
        return UITableViewCell()
    }
    
    
}
