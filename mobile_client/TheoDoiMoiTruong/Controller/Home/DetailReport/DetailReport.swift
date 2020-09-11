//
//  DetailReport.swift
//  TheoDoiMoiTruong
//
//  Created by Duc on 4/15/20.
//  Copyright © 2020 Duc. All rights reserved.
//

import UIKit
import Charts

class DetailReport: UIViewController {
    
    var gioArr:[String] = [] //Mảng lưu các giá trị GIỜ (Trục x)
    var valueGioArrInt:[Int] = [] //Mảng lưu thông số của giá trị theo giờ (Trục y - INT)
    var valueGioArrDouble:[Double] = [] //Mảng lưu thông số của giá trị theo giờ (Trục y - DOUBLE)
    var dateArr:[String] = [] //Mảng lưu các giá trị NGÀY (Trục x)
    var valueDateArrInt:[Int] = [] //Mảng lưu thông số giá trị theo ngày (Trục y - INT)
    var valueDateArrDouble:[Double] = [] //Mảng lưu thông số của giá trị theo ngày (Trục y - DOUBLE)
    var isHourBarSelected:Bool = true //Biến kiểm tra biểu đồ GIỜ được chọn
    var isDateBarSelected:Bool = false //Biến kiểm tra biểu đồ NGÀY được chọn
    var arrKhung8Gio:[String] = ["01:00", "04:00", "07:00", "10:00", "13:00", "16:00", "19:00", "22:00"] //String khung 8 giờ
    var dateBefore:String = "" //Ngày hôm qua (hiển thị phần biểu đồ)
    var monthNow:String = "" //Tháng hiện tại (hiển thị phần biểu đồ)
    var preTime:String = "" //Giờ đẹp gần nhất (hiển thị phần đầu)
    var isoDate1:String = "" //Ngày ISO 1 (tham số truyền để gọi API phần collectionView)
    var isoDate2:String = "" //Ngày ISO 2 (--)
    var isoDate3:String = "" //Ngày ISO 3 (--)
    var arr8Gio:[ThongSoGioModel] = [] //Mảng dùng trong collection view
    
    @IBOutlet weak var myCollectionView: UICollectionView!
    @IBOutlet weak var myBarChartView: BarChartView!
    @IBOutlet weak var heightContentView: NSLayoutConstraint!
    
    //Địa điểm
    @IBOutlet weak var lblDistrict: UILabel!
    @IBOutlet weak var lblProvince: UILabel!
    
    //Thông số giờ
    @IBOutlet weak var view1_1: UIView!
    @IBOutlet weak var view1_2: UIView!
    @IBOutlet weak var imgFace: UIImageView!
    @IBOutlet weak var lblAQIGio: UILabel!
    @IBOutlet weak var lblAdvice: UILabel!
    @IBOutlet weak var lblNhietDoGio: UILabel!
    @IBOutlet weak var lblDoAmGio: UILabel!
    @IBOutlet weak var lblGioThongSo: UILabel!
    
    //Khuyến nghị về sức khoẻ
    @IBOutlet weak var imgKhuyenNghi_1: UIImageView!
    @IBOutlet weak var imgKhuyenNghi_2: UIImageView!
    @IBOutlet weak var imgKhuyenNghi_3: UIImageView!
    @IBOutlet weak var imgKhuyenNghi_4: UIImageView!
    @IBOutlet weak var viewLineKhuyenNghi: UIView!
    @IBOutlet weak var lblKhuyenNghi: UILabel!
    @IBOutlet weak var btKhuyenNghi_3: UIButton!
    @IBOutlet weak var btKhuyenNghi_4: UIButton!
    
    //Chất gây ô nhiễm
    @IBOutlet weak var lblValueSO2: UILabel!
    @IBOutlet weak var lblValueCO2: UILabel!
    @IBOutlet weak var lblValueBuiPM: UILabel!
    @IBOutlet weak var lblValueCO: UILabel!
    
    //3 ngày trước đấy
    @IBOutlet weak var lblThu1: UILabel!
    @IBOutlet weak var viewThu1: UIView!
    @IBOutlet weak var lblThu2: UILabel!
    @IBOutlet weak var viewThu2: UIView!
    @IBOutlet weak var lblThu3: UILabel!
    @IBOutlet weak var viewThu3: UIView!
    
    //Lịch sử
    @IBOutlet weak var lblGio: UILabel!
    @IBOutlet weak var lblNgay: UILabel!
    
    //Đồ thị
    @IBOutlet weak var lblDate: UILabel!
    @IBOutlet weak var lblAQI: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        //Setup API truyền vào 3 ngày (collection view)
        getChiSoKhung8Gio(curNode_ID: curNode_ID, date: isoDate1, slot: 8)
        
        myCollectionView.delegate = self
        myCollectionView.dataSource = self
        myBarChartView.delegate = self
        getPreTime()
        getDateBefore()
        getMonthNow()
        get31DateBefore()
        getISO3DayBefore()
        //Hiển thị thông số giờ
        lblDistrict.text = String(curNode_ID)
        lblProvince.text = curLocation
        lblNhietDoGio.text = String(curNhietDo) + "°C"
        lblDoAmGio.text = String(curDoAm) + "%" 
        lblAQIGio.text = String(curAQI)
        lblGioThongSo.text = preTime
        //Tuỳ vào AQI mà từng view màu, ảnh, label nhận xét sẽ khác
        if (curAQI > 0 && curAQI <= 50) {
            view1_2.backgroundColor = UIColor(red: 174/255, green: 231/255, blue: 102/255, alpha: 1) //Xanh la cay nhat.
            view1_1.backgroundColor = UIColor(red: 155/255, green: 216/255, blue: 77/255, alpha: 1) //Xanh la cay dam.
            imgFace.image = UIImage(named: "ic_happy")
            lblAdvice.text = "Tốt"
            imgKhuyenNghi_1.image = UIImage(named: "ic_open_window")
            imgKhuyenNghi_2.image = UIImage(named: "ic_bike_green")
            imgKhuyenNghi_3.isHidden = true
            imgKhuyenNghi_4.isHidden = true
            btKhuyenNghi_3.isHidden = true
            btKhuyenNghi_4.isHidden = true
            viewLineKhuyenNghi.isHidden = true
            
            lblKhuyenNghi.text = "Mở cửa sổ để đưa không khí sạch và trong lành vào nhà"
        }
        if (curAQI > 50 && curAQI <= 100) {
            view1_2.backgroundColor = UIColor(red: 248/255, green: 217/255, blue: 76/255, alpha: 1) //Vang` nhat.
            view1_1.backgroundColor = UIColor(red: 245/255, green: 207/255, blue: 56/255, alpha: 1) //Vang` dam.
            imgFace.image = UIImage(named: "ic_normal")
            lblAdvice.text = "Trung Bình"
            imgKhuyenNghi_1.image = UIImage(named: "ic_close_window")
            imgKhuyenNghi_2.image = UIImage(named: "ic_bike_orange")
            imgKhuyenNghi_3.isHidden = true
            imgKhuyenNghi_4.isHidden = true
            btKhuyenNghi_3.isHidden = true
            btKhuyenNghi_4.isHidden = true
            viewLineKhuyenNghi.isHidden = true
            lblKhuyenNghi.text = "Đóng cửa sổ để tránh không khí bẩn bên ngoài"
        }
        if (curAQI > 100 && curAQI <= 150) {
            view1_2.backgroundColor = UIColor(red: 232/255, green: 154/255, blue: 85/255, alpha: 1) //Cam nhat.
            view1_1.backgroundColor = UIColor(red: 230/255, green: 142/255, blue: 69/255, alpha: 1) //Cam dam.
            imgFace.image = UIImage(named: "ic_sad")
            lblAdvice.text = "Không tốt cho nhóm nhạy cảm"
            imgKhuyenNghi_1.image = UIImage(named: "ic_mask_orange")
            imgKhuyenNghi_2.image = UIImage(named: "ic_air_purifier_red")
            imgKhuyenNghi_3.image = UIImage(named: "ic_close_window")
            imgKhuyenNghi_4.image = UIImage(named: "ic_bike_red")
            lblKhuyenNghi.text = "Các nhóm nhạy cảm nên đeo mặt nạ khi ra ngoài"
        }
        if (curAQI > 150) {
            view1_2.backgroundColor = UIColor(red: 224/255, green: 155/255, blue: 155/255, alpha: 1) //Do nhat.
            view1_1.backgroundColor = UIColor(red: 228/255, green: 41/255, blue: 60/255, alpha: 1) //Do dam.
            imgFace.image = UIImage(named: "ic_mask")
            lblAdvice.text = "Có hại cho sức khoẻ"
            imgKhuyenNghi_1.image = UIImage(named: "ic_mask_red")
            imgKhuyenNghi_2.image = UIImage(named: "ic_air_purifier_red")
            imgKhuyenNghi_3.image = UIImage(named: "ic_close_window")
            imgKhuyenNghi_4.image = UIImage(named: "ic_bike_red")
            lblKhuyenNghi.text = "Đeo mặt nạ khi ra ngoài"
        }
        
        //Hiển thị thông số của 3 ngày trước đó
        lblThu1.text = curNgay1
        lblThu2.text = curNgay2
        lblThu3.text = curNgay3
        
        //Khuyến nghị về sức khoẻ
        lblValueSO2.text = String(curSO2) + "μg/m3"
        lblValueCO2.text = String(curCO2) + "μg/m3"
        lblValueBuiPM.text = String(curBuiPM) + "μg/m3"
        lblValueCO.text = String(curCO) + "μg/m3"
        
        //UI Lịch Sử
        lblGio.layer.borderColor = UIColor.darkText.cgColor
        lblGio.layer.borderWidth = 1.0
        lblGio.layer.cornerRadius = 5
        lblGio.clipsToBounds = true
        lblNgay.layer.borderColor = UIColor.gray.cgColor
        lblNgay.layer.borderWidth = 1.0
        lblNgay.layer.cornerRadius = 5
        lblNgay.clipsToBounds = true
        
        //Lấy ngày hôm qua hiển thị (Lịch sử)
        lblDate.text = dateBefore
        
        //Set giá trị cho mảng Hour
        gioArr = ["01:00","02:00","03:00","04:00","05:00","06:00",
                  "07:00","08:00","09:00","10:00","11:00","12:00",
                  "13:00","14:00","15:00","16:00","17:00","18:00",
                  "19:00","20:00","21:00","22:00","23:00","24:00"]
//        valueGioArrInt = [110,110,125,120,146,137,53,51,62,123,62,91,33,167,110,85,92,44,120,95,104,107,132,165]
        getChiSoKhung24Gio(curNode_ID: curNode_ID, date: isoDate1, slot: 24)
        
        //Set giá trị cho mảng Date
        //        valueDateArrInt = [85,92,110,33,42,152,94,18,120,110,45,32,67,83,92,95,167,152,124,145,124,34,45,62,71,89,120,167,129,130,141]
        getChiSoAQI31Ngay(curNode_ID: curNode_ID)
        
        isHourBarSelected = true
        isDateBarSelected = false
        
        //Set high màn hình để scroll tuỳ vào thiết bị
        if (UIScreen.main.nativeBounds.size.height >= 2436) {
            heightContentView = heightContentView.setMultiplier(multiplier: 1.3)
        } else {
            if (UIScreen.main.nativeBounds.size.height == 1792) /*ip11,  */ {
                heightContentView = heightContentView.setMultiplier(multiplier: 1.3)
            }
            if (UIScreen.main.nativeBounds.size.height == 2208) /*6+, 6s+, 7+, 8+*/ {
                heightContentView = heightContentView.setMultiplier(multiplier: 1.5)
            }
            else {
                heightContentView = heightContentView.setMultiplier(multiplier: 1.7)
            }
        }
    }
    
    override func viewDidDisappear(_ animated: Bool) {
        valueGioArrInt.removeAll()
        valueGioArrDouble.removeAll()
        dateArr.removeAll()
        valueDateArrInt.removeAll()
        valueDateArrDouble.removeAll()
        arr8Gio.removeAll()
        isHourBarSelected = true
        isDateBarSelected = false
    }
    
    //Button action khuyến nghị về sức khoẻ (click vào từng image)
    @IBAction func acKhuyenNghi_1(_ sender: UIButton) {
        if (curAQI > 0 && curAQI <= 50) {
            lblKhuyenNghi.text = "Mở cửa sổ để đưa không khí sạch và trong lành vào nhà"
        }
        if (curAQI > 50 && curAQI <= 100) {
            lblKhuyenNghi.text = "Đóng cửa sổ để tránh không khí bẩn bên ngoài"
        }
        if (curAQI > 100 && curAQI <= 150) {
            lblKhuyenNghi.text = "Các nhóm nhạy cảm nên đeo mặt nạ khi ra ngoài"
        }
        if (curAQI > 150) {
            lblKhuyenNghi.text = "Đeo mặt nạ khi ra ngoài"
        }
    }
    @IBAction func acKhuyenNghi_2(_ sender: UIButton) {
        if (curAQI > 0 && curAQI <= 50) {
            lblKhuyenNghi.text = "Tận hưởng các hoạt động ngoài trời"
        }
        if (curAQI > 50 && curAQI <= 100) {
            lblKhuyenNghi.text = "Các nhóm nhạy cảm nên giảm tập thể dục ngoài trời"
        }
        if (curAQI > 100 && curAQI <= 150) {
            lblKhuyenNghi.text = "Chạy máy lọc không khí"
        }
        if (curAQI > 150) {
            lblKhuyenNghi.text = "Chạy máy lọc không khí"
        }
    }
    @IBAction func acKhuyenNghi_3(_ sender: UIButton) {
        lblKhuyenNghi.text = "Đóng cửa sổ để tránh không khí bẩn bên ngoài"
    }
    @IBAction func acKhuyenNghi_4(_ sender: UIButton) {
        lblKhuyenNghi.text = "Tránh tập thể dục ngoài trời"
    }
    
    
    //Biểu đồ Hour
    func setHourBarChart(name:[String], value:[Double]) {
        //Nếu không có dữ liệu thì:
        myBarChartView.noDataText = "Không có dữ liệu"
        //Hiện tên trục X theo tên giờ
        myBarChartView.xAxis.valueFormatter = IndexAxisValueFormatter(values: gioArr)
        myBarChartView.xAxis.granularity = 1
        
        var dataArr:[BarChartDataEntry] = []
        for i in 0 ..< gioArr.count {
            let data:BarChartDataEntry = BarChartDataEntry(x: Double(i), y: value[i])
            dataArr.append(data)
        }
        let dataSet:BarChartDataSet = BarChartDataSet(entries: dataArr, label: "Chỉ số ô nhiễm")
        //Check giá trị rồi set màu tương ứng
        dataSet.colors = [setColorBarChart(value: valueGioArrDouble[0]), setColorBarChart(value: valueGioArrDouble[1]), setColorBarChart(value: valueGioArrDouble[2]),
                          setColorBarChart(value: valueGioArrDouble[3]), setColorBarChart(value: valueGioArrDouble[4]), setColorBarChart(value: valueGioArrDouble[5]),
                          setColorBarChart(value: valueGioArrDouble[6]), setColorBarChart(value: valueGioArrDouble[7]), setColorBarChart(value: valueGioArrDouble[8]),
                          setColorBarChart(value: valueGioArrDouble[9]), setColorBarChart(value: valueGioArrDouble[10]), setColorBarChart(value: valueGioArrDouble[11]),
                          setColorBarChart(value: valueGioArrDouble[12]), setColorBarChart(value: valueGioArrDouble[13]), setColorBarChart(value: valueGioArrDouble[14]),
                          setColorBarChart(value: valueGioArrDouble[15]), setColorBarChart(value: valueGioArrDouble[16]), setColorBarChart(value: valueGioArrDouble[17]),
                          setColorBarChart(value: valueGioArrDouble[18]), setColorBarChart(value: valueGioArrDouble[19]), setColorBarChart(value: valueGioArrDouble[20]),
                          setColorBarChart(value: valueGioArrDouble[21]), setColorBarChart(value: valueGioArrDouble[22]), setColorBarChart(value: valueGioArrDouble[23])]
        //Không hiện thông số trên mỗi bar
        dataSet.drawValuesEnabled = false
        //Ko hiện chú thích
        myBarChartView.legend.enabled = false
        //Ko hiện đường kẻ background
        myBarChartView.xAxis.drawGridLinesEnabled = false
        myBarChartView.leftAxis.drawGridLinesEnabled = false
        myBarChartView.rightAxis.drawGridLinesEnabled = false
        //Bỏ hiện giá trị bên phải
        myBarChartView.rightAxis.drawLabelsEnabled = false
        //Chuyển các label giờ xuống dưới bot
        myBarChartView.xAxis.labelPosition = XAxis.LabelPosition.bottom
        
        let dataChart:BarChartData = BarChartData(dataSet: dataSet)
        myBarChartView.data = dataChart
    }
    
    //Biểu đồ Date
    func setDateBarChart(name:[String], value:[Double]) {
        //Nếu không có dữ liệu thì:
        myBarChartView.noDataText = "Không có dữ liệu"
        //Hiện tên trục X theo tên giờ
        myBarChartView.xAxis.valueFormatter = IndexAxisValueFormatter(values: dateArr)
        myBarChartView.xAxis.granularity = 1
        
        var dataArr:[BarChartDataEntry] = []
        for i in 0 ..< dateArr.count {
            let data:BarChartDataEntry = BarChartDataEntry(x: Double(i), y: value[i])
            dataArr.append(data)
        }
        let dataSet:BarChartDataSet = BarChartDataSet(entries: dataArr, label: "Chỉ số ô nhiễm")
        //Check giá trị rồi set màu tương ứng
        dataSet.colors = [setColorBarChart(value: valueDateArrDouble[0]), setColorBarChart(value: valueDateArrDouble[1]), setColorBarChart(value: valueDateArrDouble[2]),
                          setColorBarChart(value: valueDateArrDouble[3]), setColorBarChart(value: valueDateArrDouble[4]), setColorBarChart(value: valueDateArrDouble[5]),
                          setColorBarChart(value: valueDateArrDouble[6]), setColorBarChart(value: valueDateArrDouble[7]), setColorBarChart(value: valueDateArrDouble[8]),
                          setColorBarChart(value: valueDateArrDouble[9]), setColorBarChart(value: valueDateArrDouble[10]), setColorBarChart(value: valueDateArrDouble[11]),
                          setColorBarChart(value: valueDateArrDouble[12]), setColorBarChart(value: valueDateArrDouble[13]), setColorBarChart(value: valueDateArrDouble[14]),
                          setColorBarChart(value: valueDateArrDouble[15]), setColorBarChart(value: valueDateArrDouble[16]), setColorBarChart(value: valueDateArrDouble[17]),
                          setColorBarChart(value: valueDateArrDouble[18]), setColorBarChart(value: valueDateArrDouble[19]), setColorBarChart(value: valueDateArrDouble[20]),
                          setColorBarChart(value: valueDateArrDouble[21]), setColorBarChart(value: valueDateArrDouble[22]), setColorBarChart(value: valueDateArrDouble[23]),
                          setColorBarChart(value: valueDateArrDouble[24]), setColorBarChart(value: valueDateArrDouble[25]), setColorBarChart(value: valueDateArrDouble[26]),
                          setColorBarChart(value: valueDateArrDouble[27]), setColorBarChart(value: valueDateArrDouble[28]), setColorBarChart(value: valueDateArrDouble[29]),
                          setColorBarChart(value: valueDateArrDouble[30])]
        //Không hiện thông số trên mỗi bar
        dataSet.drawValuesEnabled = false
        //Ko hiện chú thích
        myBarChartView.legend.enabled = false
        //Ko hiện đường kẻ background
        myBarChartView.xAxis.drawGridLinesEnabled = false
        myBarChartView.leftAxis.drawGridLinesEnabled = false
        myBarChartView.rightAxis.drawGridLinesEnabled = false
        //Bỏ hiện giá trị bên phải
        myBarChartView.rightAxis.drawLabelsEnabled = false
        //Chuyển các label giờ xuống dưới bot
        myBarChartView.xAxis.labelPosition = XAxis.LabelPosition.bottom
        
        let dataChart:BarChartData = BarChartData(dataSet: dataSet)
        myBarChartView.data = dataChart
    }
    
    //Màu tương ứng với giá trị trong BarChart
    func setColorBarChart(value: Double) ->UIColor {
        if (value > 0 && value <= 50) {
            return UIColor(red: 174/255, green: 231/255, blue: 102/255, alpha: 1) //Xanh la cay nhat.
        }
        else if (value > 50 && value <= 100) {
            return UIColor(red: 248/255, green: 217/255, blue: 76/255, alpha: 1) //Vang` nhat.
        }
        else if (value > 100 && value <= 150) {
            return UIColor(red: 232/255, green: 154/255, blue: 85/255, alpha: 1) //Cam nhat.
        }
        else if (value > 150) {
            return UIColor(red: 224/255, green: 155/255, blue: 155/255, alpha: 1) //Do nhat.
        }
        else {
            return UIColor.black
        }
    }
    
    //Action chọn từng ngày
    @IBAction func actionThu1(_ sender: UIButton) {
        getChiSoKhung8Gio(curNode_ID: curNode_ID, date: isoDate1, slot: 8)
        //        myCollectionView.reloadData()
        lblThu1.textColor = UIColor.darkText //Den
        viewThu1.backgroundColor = UIColor(red: 91/255, green: 155/255, blue: 213/255, alpha: 1) //Xanh
        lblThu2.textColor = UIColor(red: 174/255, green: 171/255, blue: 171/255, alpha: 1) //Xam
        viewThu2.backgroundColor = UIColor(red: 174/255, green: 171/255, blue: 171/255, alpha: 1) //Xam
        lblThu3.textColor = UIColor(red: 174/255, green: 171/255, blue: 171/255, alpha: 1) //Xam
        viewThu3.backgroundColor = UIColor(red: 174/255, green: 171/255, blue: 171/255, alpha: 1) //Xam
    }
    
    @IBAction func actionThu2(_ sender: UIButton) {
        getChiSoKhung8Gio(curNode_ID: curNode_ID, date: isoDate2, slot: 8)
        //        myCollectionView.reloadData()
        lblThu2.textColor = UIColor.darkText //Den
        viewThu2.backgroundColor = UIColor(red: 91/255, green: 155/255, blue: 213/255, alpha: 1) //Xanh
        lblThu1.textColor = UIColor(red: 174/255, green: 171/255, blue: 171/255, alpha: 1) //Xam
        viewThu1.backgroundColor = UIColor(red: 174/255, green: 171/255, blue: 171/255, alpha: 1) //Xam
        lblThu3.textColor = UIColor(red: 174/255, green: 171/255, blue: 171/255, alpha: 1) //Xam
        viewThu3.backgroundColor = UIColor(red: 174/255, green: 171/255, blue: 171/255, alpha: 1) //Xam
    }
    
    @IBAction func actionThu3(_ sender: UIButton) {
        getChiSoKhung8Gio(curNode_ID: curNode_ID, date: isoDate3, slot: 8)
        //        myCollectionView.reloadData()
        lblThu3.textColor = UIColor.darkText //Den
        viewThu3.backgroundColor = UIColor(red: 91/255, green: 155/255, blue: 213/255, alpha: 1) //Xanh
        lblThu2.textColor = UIColor(red: 174/255, green: 171/255, blue: 171/255, alpha: 1) //Xam
        viewThu2.backgroundColor = UIColor(red: 174/255, green: 171/255, blue: 171/255, alpha: 1) //Xam
        lblThu1.textColor = UIColor(red: 174/255, green: 171/255, blue: 171/255, alpha: 1) //Xam
        viewThu1.backgroundColor = UIColor(red: 174/255, green: 171/255, blue: 171/255, alpha: 1) //Xam
    }
    
    //Action Lịch sử
    //Chọn GIỜ
    @IBAction func actionGio(_ sender: UIButton) {
        isHourBarSelected = true
        isDateBarSelected = false
        lblGio.layer.borderColor = UIColor.darkText.cgColor
        lblNgay.layer.borderColor = UIColor.gray.cgColor
        lblGio.textColor = UIColor.white
        lblNgay.textColor = UIColor(red: 91/255, green: 155/255, blue: 213/255, alpha: 1) //Xanh nuoc bien nhat
        lblGio.backgroundColor = UIColor(red: 91/255, green: 155/255, blue: 213/255, alpha: 1) //Xanh nuoc bien nhat
        lblNgay.backgroundColor = UIColor.white
        lblDate.text = dateBefore
        setHourBarChart(name: gioArr, value: valueGioArrDouble)
        myBarChartView.reloadInputViews()
    }
    //Chọn NGÀY
    @IBAction func actionNgay(_ sender: UIButton) {
        isHourBarSelected = false
        isDateBarSelected = true
        lblNgay.layer.borderColor = UIColor.darkText.cgColor
        lblGio.layer.borderColor = UIColor.gray.cgColor
        lblNgay.textColor = UIColor.white
        lblGio.textColor = UIColor(red: 91/255, green: 155/255, blue: 213/255, alpha: 1) //Xanh nuoc bien nhat
        lblNgay.backgroundColor = UIColor(red: 91/255, green: 155/255, blue: 213/255, alpha: 1) //Xanh nuoc bien nhat
        lblGio.backgroundColor = UIColor.white
        lblDate.text = monthNow
        setDateBarChart(name: dateArr, value: valueDateArrDouble)
        myBarChartView.reloadInputViews()
    }
}

//MARK: Call API
extension DetailReport {
    func getChiSoKhung8Gio(curNode_ID: String, date: String, slot: Int) {
        //        var urlString = "/api/v1/nodes/hours/\(curNode_ID)/values?date=\(date)&slot=\(slot)"
        //        var urlString = "localhost:1234/api/v1/nodes/hours/last?node_ids="
        let strParam = "{\"date\":\"\(date)\",\"slot\":\"\(slot)\"}"
        let strParam64 = changeStringToBase64(str: strParam)
        var urlString = "http://52.221.233.65:1234/api/v1/nodes/hours/\(curNode_ID)/values?filter=\(strParam64)"
        guard let url = URL(string: urlString) else { return }
        let session = URLSession.shared
        
        arr8Gio.removeAll()
        
        let task = session.dataTask(with: url) { (data, response, error) in
            if let response = response {
                
            }
            if let data = data {
                do {
                    let json = try JSONSerialization.jsonObject(with: data, options: [])
                    if let myJson = json as? [String:Any] {
                        if let myData = myJson["data"] as? [[String:Any]] {
                            for my8GioDic in myData {
                                let my8Gio = ThongSoGioModel.init(dic: my8GioDic)
                                self.arr8Gio.append(my8Gio)
                            }
                        }
                    }
                    DispatchQueue.main.async {
                        self.myCollectionView.reloadData()
                    }
                }
                catch {
                    print (error)
                }
            }
        }
        task.resume()
    }
    
    func getChiSoKhung24Gio(curNode_ID: String, date: String, slot: Int) {
        //        var urlString = "/api/v1/nodes/hours/\(curNode_ID)/values?date=\(date)&slot=\(slot)"
        //        var urlString = "localhost:1234/api/v1/nodes/hours/last?node_ids="
        let strParam = "{\"date\":\"\(date)\",\"slot\":\"\(slot)\"}"
        let strParam64 = changeStringToBase64(str: strParam)
        var urlString = "http://52.221.233.65:1234/api/v1/nodes/hours/\(curNode_ID)/values?filter=\(strParam64)"
        guard let url = URL(string: urlString) else { return }
        let session = URLSession.shared
        
        valueGioArrInt.removeAll()
        
        let task = session.dataTask(with: url) { (data, response, error) in
            if let response = response {
                
            }
            if let data = data {
                do {
                    let json = try JSONSerialization.jsonObject(with: data, options: [])
                    if let myJson = json as? [String:Any] {
                        if let myData = myJson["data"] as? [[String:Any]] {
                            for my24GioDic in myData {
                                if let myAQI = my24GioDic["aqi"] as? Int {
                                    self.valueGioArrInt.append(myAQI)
                                }
                            }
                            self.valueGioArrDouble = self.valueGioArrInt.map {Double($0)}
                        }
                    }
                    DispatchQueue.main.async {
                        self.setHourBarChart(name: self.gioArr, value: self.valueGioArrDouble)
                        self.myBarChartView.reloadInputViews()
                    }
                }
                catch {
                    print (error)
                }
            }
        }
        task.resume()
    }
    
    func getChiSoAQI31Ngay(curNode_ID: String) {
        var urlString = "http://52.221.233.65:1234/api/v1/nodes/days/\(curNode_ID)/values"
        //        var urlString = "localhost:1234/api/v1/nodes/hours/last?node_ids="
        guard let url = URL(string: urlString) else { return }
        let session = URLSession.shared
        
        valueDateArrInt.removeAll()
        
        let task = session.dataTask(with: url) { (data, response, error) in
            if let response = response {
                
            }
            if let data = data {
                do {
                    let json = try JSONSerialization.jsonObject(with: data, options: [])
                    if let myJson = json as? [String:Any] {
                        if let myData = myJson["data"] as? [[String:Any]] {
                            for my31NgayDic in myData {
                                if let myAQI = my31NgayDic["aqi"] as? Int {
                                    self.valueDateArrInt.append(myAQI)
                                }
                            }
                            self.valueDateArrDouble = self.valueDateArrInt.map {Double($0)}
                        }
                    }
                    DispatchQueue.main.async {
                        self.myBarChartView.reloadInputViews()
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

//Collection View
extension DetailReport: UICollectionViewDelegate, UICollectionViewDataSource, UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return arrKhung8Gio.count
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        if let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "CollectionCell", for: indexPath) as? DetailRPCollectionViewCell {
            cell.lblGio.text = arrKhung8Gio[indexPath.row]
            if !arr8Gio.isEmpty {
                let valueAQI = arr8Gio[indexPath.row].aqi
                if (valueAQI > 0 && valueAQI <= 50) {
                    cell.lblAQI.text = "0-50"
                    cell.lblAQI.backgroundColor = UIColor(red: 174/255, green: 231/255, blue: 102/255, alpha: 1) //Xanh nhat.
                }
                else if (valueAQI > 50 && valueAQI <= 100) {
                    cell.lblAQI.text = "50-100"
                    cell.lblAQI.backgroundColor = UIColor(red: 248/255, green: 217/255, blue: 76/255, alpha: 1) //Vang nhat.
                }
                else if (valueAQI > 100 && valueAQI <= 150) {
                    cell.lblAQI.text = "100-150"
                    cell.lblAQI.backgroundColor = UIColor(red: 232/255, green: 154/255, blue: 85/255, alpha: 1) //Cam nhat.
                }
                else if (valueAQI > 150) {
                    cell.lblAQI.text = "150-200"
                    cell.lblAQI.backgroundColor = UIColor(red: 224/255, green: 155/255, blue: 155/255, alpha: 1) //Do nhat.
                }
                cell.lblDoAm.text = String(arr8Gio[indexPath.row].doam) + "%"
                cell.lblNhietDo.text = String(arr8Gio[indexPath.row].nhietdo) + "°C"
            }
            return cell
        }
        return UICollectionViewCell()
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        return CGSize(width: 76.0, height: 100.0)
    }
}

//Bấm vào cột trong biểu đồ hiển thị chỉ số trên label AQI
extension DetailReport: ChartViewDelegate {
    func chartValueSelected(_ chartView: ChartViewBase, entry: ChartDataEntry, highlight: Highlight) {
        if isHourBarSelected == true {
            let pos = NSInteger(entry.x)
            let valueInt:Int = Int(valueGioArrDouble[pos])
            lblAQI.text = String(valueInt)
        }
        if isDateBarSelected == true {
            let pos = NSInteger(entry.x)
            let valueInt:Int = Int(valueDateArrDouble[pos])
            lblAQI.text = String(valueInt)
        }
    }
}

extension DetailReport {
    //Lấy String từ 31 ngày trc rồi chuyển vào mảng dateArr(Dùng cho hiển thị biểu đồ trục x)
    func get31DateBefore() {
        var dateString:String = ""
        let formaterDate = DateFormatter()
        formaterDate.dateFormat = "dd/MM"
        
        for i in 0..<31 {
            let dateYesterday = Date().addingTimeInterval(TimeInterval(-60*60*24*(31-i)))
            dateString = formaterDate.string(from: dateYesterday)
            dateArr.append(dateString)
        }
    }
    
    //Lấy String từ ngày hôm qua
    func getDateBefore() {
        let dateYesterday = Date().addingTimeInterval(-60*60*24)
        
        let formaterDate = DateFormatter()
        formaterDate.dateFormat = "dd-MM-YYYY"
        
        dateBefore = formaterDate.string(from: dateYesterday)
    }
    
    //Lấy String tháng hiện tại
    func getMonthNow() {
        let dateNow = Date()
        let formaterDate = DateFormatter()
        formaterDate.dateFormat = "MM/YYYY"
        
        monthNow = formaterDate.string(from: dateNow)
    }
    
    //Lấy String giờ đẹp gần nhất
    func getPreTime() {
        let timeNow = Date()
        let timePre = timeNow.addingTimeInterval(-60*60)
        let formaterTime = DateFormatter()
        formaterTime.dateFormat = "HH:00"
        
        preTime = formaterTime.string(from: timePre)
    }
    
    //Lấy String dạng ISO 3 ngày trước đấy
    func getISO3DayBefore() {
        let dateYesterday1 = Date().addingTimeInterval(-60*60*24)
        let dateYesterday2 = Date().addingTimeInterval(-60*60*24*2)
        let dateYesterday3 = Date().addingTimeInterval(-60*60*24*3)
        
        let formaterDate = DateFormatter()
        formaterDate.dateFormat = "yyyy-MM-dd'T'07:00:00.000'Z'"
        
        isoDate1 = formaterDate.string(from: dateYesterday1)
        isoDate2 = formaterDate.string(from: dateYesterday2)
        isoDate3 = formaterDate.string(from: dateYesterday3)
    }
    
    func changeStringToBase64(str: String) -> String {
        let utf8str = str.data(using: .utf8)
        if let base64Encoded = utf8str?.base64EncodedString(options: Data.Base64EncodingOptions(rawValue: 0)) {
            return base64Encoded
        }
        return ""
    }
}

extension NSLayoutConstraint {
    func setMultiplier(multiplier:CGFloat) -> NSLayoutConstraint {
        
        NSLayoutConstraint.deactivate([self])
        
        let newConstraint = NSLayoutConstraint(
            item: firstItem as Any,
            attribute: firstAttribute,
            relatedBy: relation,
            toItem: secondItem,
            attribute: secondAttribute,
            multiplier: multiplier,
            constant: constant)
        
        newConstraint.priority = priority
        newConstraint.shouldBeArchived = self.shouldBeArchived
        newConstraint.identifier = self.identifier
        
        NSLayoutConstraint.activate([newConstraint])
        return newConstraint
    }
}
