//
//  AddControllerViewController.swift
//  SmartController
//
//  Created by Olarn U. on 14/9/2566 BE.
//

import UIKit

protocol AddControllerViewControllerDelegate: AnyObject {
    func didAddController(controller: Controller)
}

class AddControllerViewController: UIViewController {
    weak var delegate: AddControllerViewControllerDelegate?
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    @IBAction func addButtonTouched(_ sender: Any) {
        let actionSheet = UIAlertController(
            title: "Controller Type",
            message: "Please choose controller type", preferredStyle: .actionSheet)
        
        actionSheet.addAction(UIAlertAction(
            title: "Light",
            style: .default,
            handler: { [weak self] action in
                self?.delegate?.didAddController(
                    controller: Controller(
                        icon: UIImage(named: "light")!,
                        name: "Smart Light",
                        commands: [
                            LightOnCommand(),
                            LightOffCommand()
                        ]
                    ))
                self?.navigationController?.popViewController(animated: true)
            }))
        
        actionSheet.addAction(UIAlertAction(
            title: "Garage Door",
            style: .default,
            handler: { [weak self] action in
                self?.delegate?.didAddController(
                    controller: Controller(
                        icon: UIImage(named: "garage")!,
                        name: "Smart Garage Door",
                        commands: [
                            GarageDoorUpCommand(),
                            GarageDoorDownCommand()
                        ]
                ))
                self?.navigationController?.popViewController(animated: true)
            }))
        
        present(actionSheet, animated: true)
    }
}
