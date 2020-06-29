//
//  Area.swift
//  TheoDoiMoiTruong
//
//  Created by Duc on 6/9/20.
//  Copyright © 2020 Duc. All rights reserved.
//

import UIKit

class Area: UIViewController {

    var arrArea:[AreaClass] = []
    
    @IBOutlet weak var tableViewListArea: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.navigationItem.title = "Khu vực theo dõi"
        self.navigationItem.hidesBackButton = true
        self.tableViewListArea.tableFooterView = UIView()
        //Select/Deselect Row
        self.tableViewListArea.isEditing = true
        self.tableViewListArea.allowsMultipleSelectionDuringEditing = true
        
        tableViewListArea.register(UINib(nibName: "AreaCell", bundle: nil), forCellReuseIdentifier: "AreaCell")
        self.tableViewListArea.delegate = self
        self.tableViewListArea.dataSource = self
        
        getArea()
    }
    
    func getArea() {
        let urlString = "https://5ed9c5914378690016c6b36f.mockapi.io/api/area"
        guard let url = URL(string: urlString) else { return }
        let session = URLSession.shared
        
        arrArea.removeAll()
        
        let task = session.dataTask(with: url) { (data, response, error) in
            if let response = response {
                
            }
            if let data = data {
                do {
                    let json = try JSONSerialization.jsonObject(with: data, options: [])
                    if let myJson = json as? [[String:Any]] {
                        for myAreaDic in myJson {
                            let myArea = AreaClass.init(dic: myAreaDic)
                            self.arrArea.append(myArea)
                        }
                    }
                    DispatchQueue.main.async {
                        self.tableViewListArea.reloadData()
                    }
                }
                catch {
                    print(error)
                }
            }
        }
        task.resume()
    }

    @IBAction func acBack(_ sender: UIButton) {
        self.navigationController?.popViewController(animated: true)
    }
    
    @IBAction func acDone(_ sender: UIButton) {
        self.navigationController?.popViewController(animated: true)
    }
}

extension Area: UITableViewDelegate {
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 44.0
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        print("Select")
        self.selectDeselectCell(tableView: tableView, indexPath: indexPath)
    }
    
    func tableView(_ tableView: UITableView, didDeselectRowAt indexPath: IndexPath) {
        print("Deselect")
        self.selectDeselectCell(tableView: tableView, indexPath: indexPath)
    }
}

extension Area: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return arrArea.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        if let cell = tableView.dequeueReusableCell(withIdentifier: "AreaCell", for: indexPath) as? AreaCell {
            cell.lblAreaName.text = "\(arrArea[indexPath.row].district!), \(arrArea[indexPath.row].province!)"
            return cell
        }
        return UITableViewCell()
    }
}

extension Area {
    // Select and DeSelect TableViewCell
    
    func selectDeselectCell(tableView: UITableView, indexPath: IndexPath) {
        if let arr = tableView.indexPathsForSelectedRows{
            for index in arr {
                
            }
        }
    }
}
