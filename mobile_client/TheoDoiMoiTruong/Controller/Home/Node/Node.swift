//
//  Node.swift
//  TheoDoiMoiTruong
//
//  Created by Duc on 6/9/20.
//  Copyright © 2020 Duc. All rights reserved.
//

import UIKit

var arrNodeIDs:[String] = [] //mảng dùng để lưu những Node được chọn

protocol NodeDelegate {
    func reloadTable()
}

class Node: UIViewController {
    
    var nodeDelegate: NodeDelegate?
    
    var arrNode:[NodeModel] = [] //mảng dùng để gọi API
    var defaults = UserDefaults.standard
    
    @IBOutlet weak var tableViewListNode: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.navigationItem.title = "Node theo dõi"
        self.navigationItem.hidesBackButton = true
        self.tableViewListNode.tableFooterView = UIView()
        //Select/Deselect Row
        self.tableViewListNode.isEditing = true
        self.tableViewListNode.allowsMultipleSelectionDuringEditing = true
        
        tableViewListNode.register(UINib(nibName: "NodeCell", bundle: nil), forCellReuseIdentifier: "NodeCell")
        self.tableViewListNode.delegate = self
        self.tableViewListNode.dataSource = self
        
        getAllNode_ID()
    }
    
    func getAllNode_ID() {
//        let urlString = "http://52.221.233.65:1234/api/node"
        let urlString = "https://5ed9c5914378690016c6b36f.mockapi.io/api/area"
        guard let url = URL(string: urlString) else { return }
        let session = URLSession.shared
        
        arrNode.removeAll()
        
        let task = session.dataTask(with: url) { (data, response, error) in
            if let response = response {
                
            }
            if let data = data {
                do {
                    let json = try JSONSerialization.jsonObject(with: data, options: [])
                    if let myJson = json as? [String:Any] {
                        if let myResponseData = myJson["responseData"] as? [String:Any] {
                            if let myData = myResponseData["data"] as? [[String:Any]] {
                                for dicData in myData {
                                    let dicNode = NodeModel.init(dic: dicData)
                                    self.arrNode.append(dicNode)
                                }
                            }
                        }
                    }
                    DispatchQueue.main.async {
                        self.tableViewListNode.reloadData()
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
        arrNodeIDs.removeAll()
        self.navigationController?.popViewController(animated: true)
    }
    
    @IBAction func acDone(_ sender: UIButton) {
        if arrNodeIDs.count == 0 {
            self.nodeDelegate?.reloadTable()
            self.navigationController?.popViewController(animated: true)
        } else {
            defaults.removeObject(forKey: "Mang_Node_IDs")
            defaults.set(arrNodeIDs, forKey: "Mang_Node_IDs")
            self.nodeDelegate?.reloadTable()
            self.navigationController?.popViewController(animated: true)
        }
    }
}

extension Node: UITableViewDelegate {
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

extension Node: UITableViewDataSource {
    func numberOfSections(in tableView: UITableView) -> Int {
        var numOfSection: NSInteger = 0
        
        if arrNode.count > 0
        {
            tableViewListNode.backgroundView = nil
            numOfSection = 1
        }
        else
        {
            var noDataLabel: UILabel = UILabel(frame: CGRect(x: 0, y: 0, width: tableViewListNode.frame.size.width, height: tableViewListNode.frame.size.height))
            noDataLabel.text = "Không có dữ liệu để hiển thị"
            noDataLabel.textColor = UIColor(red: 22.0/255.0, green: 106.0/255.0, blue: 176.0/255.0, alpha: 1.0)
            noDataLabel.textAlignment = NSTextAlignment.center
            noDataLabel.font = UIFont(name: "Helvetica", size: 20)
            self.tableViewListNode.backgroundView = noDataLabel
        }
        
        return numOfSection
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return arrNode.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        if let cell = tableView.dequeueReusableCell(withIdentifier: "NodeCell", for: indexPath) as? NodeCell {
            cell.lblAreaName.text = "\(arrNode[indexPath.row].node_name ?? ""), \(arrNode[indexPath.row].location_info?.detail_location ?? "")"
            return cell
        }
        return UITableViewCell()
    }
}

extension Node {
    // Select and DeSelect TableViewCell
    
    func selectDeselectCell(tableView: UITableView, indexPath: IndexPath) {
        arrNodeIDs.removeAll()
        if let arr = tableView.indexPathsForSelectedRows{
            for index in arr {
                arrNodeIDs.append(arrNode[index.row].node_id ?? "")
            }
        }
    }
}
