//
//  MenuViewController.swift
//  TheoDoiMoiTruong
//
//  Created by Duc on 4/13/20.
//  Copyright © 2020 Duc. All rights reserved.
//

import UIKit

class MenuViewController: UIViewController {

    @IBOutlet weak var menu_tableView: UITableView!
    
    var menuArr:[Menu] = [Menu(title: "Trang chủ", img: "ic_home"),
                          Menu(title: "Đăng nhập", img: "ic_login"),
                          Menu(title: "Bản đồ", img: "ic_map"),
                          Menu(title: "Xếp hạng", img: "ic_ranking"),
                          Menu(title: "Đăng xuất", img: "ic_logout")]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        menu_tableView.tableFooterView = UIView()
        menu_tableView.delegate = self
        menu_tableView.dataSource = self
    }
}

extension MenuViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 44.0
    }
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        if indexPath.row == 0 {
            let sb = UIStoryboard.init(name: "Main", bundle: nil)
            let vc = sb.instantiateViewController(withIdentifier: "Home") as? Home
            self.navigationController?.pushViewController(vc!, animated: true)
        }
        if indexPath.row == 1 {
            let sb = UIStoryboard.init(name: "Main", bundle: nil)
            let vc = sb.instantiateViewController(withIdentifier: "Login") as? Login
            self.navigationController?.pushViewController(vc!, animated: true)
        }
        if indexPath.row == 2 {
            let sb = UIStoryboard.init(name: "Main", bundle: nil)
            let vc = sb.instantiateViewController(withIdentifier: "GoogleMaps") as? GoogleMaps
            self.navigationController?.pushViewController(vc!, animated: true)
        }
        if indexPath.row == 3 {
            let sb = UIStoryboard.init(name: "Main", bundle: nil)
            let vc = sb.instantiateViewController(withIdentifier: "Ranking") as? Ranking
            self.navigationController?.pushViewController(vc!, animated: true)
        }
    }
}

extension MenuViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return menuArr.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "MenuCell", for: indexPath) as! MenuTableViewCell
        cell.lblTitle.text = menuArr[indexPath.row].TITLE
        cell.imgHinh.image = UIImage(named: menuArr[indexPath.row].IMG ?? "")
        return cell
    }
    
    
}
