//
//  Login.swift
//  TheoDoiMoiTruong
//
//  Created by Duc on 4/9/20.
//  Copyright © 2020 Duc. All rights reserved.
//

import UIKit

class Login: UIViewController {

    @IBOutlet weak var txtUsername: UITextField!
    @IBOutlet weak var txtPassword: UITextField!
    @IBOutlet weak var viewXanh: UIView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.navigationItem.hidesBackButton = true
        viewXanh.layer.cornerRadius = viewXanh.frame.width / 2
        //Custom TextField
        txtUsername.setPadding()
        txtUsername.setBottomBorder()
        txtUsername.attributedPlaceholder = NSAttributedString(string: "Username", attributes: [NSAttributedString.Key.foregroundColor : UIColor.darkGray])
        txtPassword.setPadding()
        txtPassword.setBottomBorder()
        txtPassword.attributedPlaceholder = NSAttributedString(string: "Password", attributes: [NSAttributedString.Key.foregroundColor : UIColor.darkGray])
    }
    
    @IBAction func loginToHome(_ sender: UIButton) {
        let sb = UIStoryboard.init(name: "Main", bundle: nil)
        let vc = sb.instantiateViewController(withIdentifier: "Home") as? Home
        self.navigationController?.pushViewController(vc!, animated: true)
    }
    
    @IBAction func guest(_ sender: UIButton) {
        let sb = UIStoryboard.init(name: "Main", bundle: nil)
        let vc = sb.instantiateViewController(withIdentifier: "Home") as? Home
        self.navigationController?.pushViewController(vc!, animated: true)
    }
    
    @IBAction func signUp(_ sender: UIButton) {
        let sb = UIStoryboard.init(name: "Main", bundle: nil)
        let vc = sb.instantiateViewController(withIdentifier: "SignUp") as? SignUp
        self.navigationController?.pushViewController(vc!, animated: true)
    }
    
}

extension UITextField {
    func setPadding() {
        let paddingView = UIView(frame: CGRect(x: 0, y: 0, width: 10, height: self.frame.height))
        self.leftView = paddingView
        self.leftViewMode = .always
    }
    
    func setBottomBorder() {
        self.layer.shadowColor = UIColor.darkGray.cgColor
        self.layer.shadowOffset = CGSize(width: 0.0, height: 1.0)
        self.layer.shadowOpacity = 1.0
        self.layer.shadowRadius = 0.0
    }
}
