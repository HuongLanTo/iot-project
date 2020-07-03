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

class TrackDestination: NSObject {
    let name: String
    let location: CLLocationCoordinate2D
    let aqi: String
    let zoom: Float
    
    init (name: String, location: CLLocationCoordinate2D, aqi: String, zoom: Float) {
        self.name = name
        self.location = location
        self.aqi = aqi
        self.zoom = zoom
    }
}

class GoogleMaps: UIViewController {
    
    var mapView:GMSMapView?
    
    var currentDestination: TrackDestination?
    
    var destinations:[TrackDestination] = [TrackDestination(name: "KDT Kim Văn Kim Lũ", location: CLLocationCoordinate2DMake(20.972998, 105.820044), aqi: "137 AQI", zoom: 18),                                      TrackDestination(name: "Royal City", location: CLLocationCoordinate2DMake(21.001763, 105.815960), aqi: "145 AQI", zoom: 15)]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let camera = GMSCameraPosition.camera(withLatitude: 20.976106, longitude: 105.815626, zoom: 15)
        mapView = GMSMapView.map(withFrame: CGRect.zero, camera: camera)
        view = mapView
        
        let currentLocation = CLLocationCoordinate2DMake(20.976096, 105.815593)
        let marker = GMSMarker(position: currentLocation)
        marker.title = "Thang Long University"
        marker.map = mapView
        marker.snippet = "124 AQI"
        
        navigationItem.rightBarButtonItem = UIBarButtonItem(title: "Next", style: .plain, target: self, action: #selector(nextL))
    
    }
    
    override func viewWillAppear(_ animated: Bool) {
        destinations.append(TrackDestination(name: "Thang Long University", location: CLLocationCoordinate2DMake(20.976096, 105.815593), aqi: "124 AQI", zoom: 15))
    }
    
    @objc func nextL() {
        
        if currentDestination == nil {
            currentDestination =  destinations.first
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
        
        mapView?.animate(to: GMSCameraPosition.camera(withTarget: currentDestination!.location, zoom: currentDestination!.zoom))
        
        CATransaction.commit()
        
        let marker = GMSMarker(position: currentDestination!.location)
        marker.title = currentDestination!.name
        marker.snippet = currentDestination!.aqi
        marker.map = mapView
    }

}
