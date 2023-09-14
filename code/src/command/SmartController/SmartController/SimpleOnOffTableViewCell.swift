//
//  TableViewCell.swift
//  SmartController
//
//  Created by Olarn U. on 14/9/2566 BE.
//

import UIKit

class SimpleOnOffTableViewCell: UITableViewCell {

    @IBOutlet weak var controllerImage: UIImageView!
    @IBOutlet weak var controllerTitle: UILabel!
    @IBOutlet weak var onSwitch: UIButton!
    @IBOutlet weak var offSwitch: UIButton!
    
    var controller: Controller!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    @IBAction func onSwitchTouched(_ sender: Any) {
        let onCommand: Command? = controller.commands[0]
        onCommand?.execute()
    }
    
    @IBAction func offSwitchTouched(_ sender: Any) {
        let offCommand: Command? = controller.commands[1]
        offCommand?.execute()
    }
}
