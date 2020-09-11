//
//  GoogleMaps.swift
//  TheoDoiMoiTruong
//
//  Created by Duc on 5/4/20.
//  Copyright © 2020 Duc. All rights reserved.
//

import UIKit
import GoogleMaps
import GooglePlaces

class GoogleMaps: UIViewController {
    
    var mapView:GMSMapView?
    
    var currentDestination: TrackDestinationModel? //Địa điểm đầu tiên / hiện tại
    
    var destinations:[TrackDestinationModel] = [] //Mảng lưu danh sách địa điểm cùng chỉ số aqi
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.navigationItem.title = "AQI tại khu vực theo dõi"
        
        getAreaGGMap()
        navigationItem.rightBarButtonItem = UIBarButtonItem(title: "Next", style: .plain, target: self, action: #selector(nextL))
        
    }
    
    override func viewDidAppear(_ animated: Bool) {
        print("gg map did appear")
        //        destinations.append(TrackDestination(name: "Thang Long University", location: CLLocationCoordinate2DMake(20.976096, 105.815593), aqi: "124 AQI", zoom: 15))
    }
    
    @objc func nextL() {
        
        if currentDestination == nil {
            currentDestination =  destinations[1]
        } else {
            if let index = destinations.index(of: currentDestination!) {
                currentDestination = destinations[(index + 1) % destinations.count]
            }
        }
        
        setMapCamera()
    }
    
    private func setMapCamera() {
        CATransaction.begin()
        CATransaction.setValue(2, forKey: kCATransactionAnimationDuration)
        
        mapView?.animate(to: GMSCameraPosition.camera(withTarget: CLLocationCoordinate2D(latitude: Double(currentDestination!.lat) as! CLLocationDegrees, longitude: Double(currentDestination!.long) as! CLLocationDegrees), zoom: Float(Int.random(in: 15..<19))))
        
        CATransaction.commit()
        
        let marker = GMSMarker(position: CLLocationCoordinate2D(latitude: Double(currentDestination!.lat) as! CLLocationDegrees, longitude: Double(currentDestination!.long) as! CLLocationDegrees))
        marker.title = currentDestination!.nameArea
        marker.snippet = String(currentDestination!.aqi ?? 0) + " AQI"
        marker.map = mapView
    }
}

// MARK: Call API
extension GoogleMaps {
    func getAreaGGMap() {
        var urlString = "http://52.221.233.65:1234/api/v1/areas/hours/last"
        //        var urlString = "localhost:1234/api/v1/nodes/hours/last?node_ids="
        //        let urlString = "https://5ed9c5914378690016c6b36f.mockapi.io/api/ranking"
        guard let url = URL(string: urlString) else { return }
        let session = URLSession.shared
        
        destinations.removeAll()
        
        let task = session.dataTask(with: url) { (data, response, error) in
            if let response = response {
                
            }
            if let data = data {
                do {
                    let json = try JSONSerialization.jsonObject(with: data, options: [])
                    if let myJson = json as? [String:Any] {
                        if let myData = myJson["data"] as? [[String:Any]] {
                            for myAreaDic in myData {
                                let myArea = TrackDestinationModel.init(dic: myAreaDic)
                                self.destinations.append(myArea)
                            }
                        }
                    }
                }
                catch {
                    print(error)
                }
                DispatchQueue.main.async {
                    let camera = GMSCameraPosition.camera(withLatitude: Double(self.destinations[0].lat) as! CLLocationDegrees, longitude: Double(self.destinations[0].long) as! CLLocationDegrees, zoom: Float(Int.random(in: 15..<19)))
                    self.mapView = GMSMapView.map(withFrame: CGRect.zero, camera: camera)
                    self.view = self.mapView
                    
                    let currentLocation = CLLocationCoordinate2DMake(Double(self.destinations[0].lat) as! CLLocationDegrees, Double(self.destinations[0].long) as! CLLocationDegrees)
                    let marker = GMSMarker(position: currentLocation)
                    marker.title = self.destinations[0].nameArea
                    marker.map = self.mapView
                    marker.snippet = String(self.destinations[0].aqi) + " AQI"
                    
                }
            }
        }
        task.resume()
    }
}
