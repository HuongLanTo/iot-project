//
//  DetailInformation.swift
//  TheoDoiMoiTruong
//
//  Created by Duc on 6/29/20.
//  Copyright © 2020 Duc. All rights reserved.
//

import UIKit
import WebKit

class DetailInformation: UIViewController {
    
    @IBOutlet weak var wvInformation: WKWebView!
    override func viewDidLoad() {
        super.viewDidLoad()
        
        //Load trang web lên WebView
        let urlString = curURLInfor
        guard let url:URL = URL(string: urlString) else { return }
        let urlRequest = URLRequest(url: url)
        wvInformation.load(urlRequest)
    }
    
}
