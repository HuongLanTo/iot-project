//
//  SignUp.swift
//  TheoDoiMoiTruong
//
//  Created by Duc on 4/9/20.
//  Copyright © 2020 Duc. All rights reserved.
//

import UIKit

class SignUp: UIViewController {

    @IBOutlet weak var viewXanh: UIView!
    @IBOutlet weak var txtName: UITextField!
    @IBOutlet weak var txtEmail: UITextField!
    @IBOutlet weak var txtPasswordCreate: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.navigationItem.hidesBackButton = true
        viewXanh.layer.cornerRadius = viewXanh.frame.width / 2
        //Custom TextField
        txtName.setPadding()
        txtName.setBottomBorder()
        txtName.attributedPlaceholder = NSAttributedString(string: "Name", attributes: [NSAttributedString.Key.foregroundColor : UIColor.darkGray])
        txtEmail.setPadding()
        txtEmail.setBottomBorder()
        txtEmail.attributedPlaceholder = NSAttributedString(string: "Email", attributes: [NSAttributedString.Key.foregroundColor : UIColor.darkGray])
        txtPasswordCreate.setPadding()
        txtPasswordCreate.setBottomBorder()
        txtPasswordCreate.attributedPlaceholder = NSAttributedString(string: "Password", attributes: [NSAttributedString.Key.foregroundColor : UIColor.darkGray])
    }
    
    @IBAction func signUp(_ sender: UIButton) {
        print("SignUp Success")
    }
    
    @IBAction func toLogIn(_ sender: UIButton) {
        self.navigationController?.popViewController(animated: true)
    }
}
