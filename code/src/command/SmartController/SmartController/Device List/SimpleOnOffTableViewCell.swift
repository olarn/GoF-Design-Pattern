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
        let onCommand: CommandProtocol? = controller.commands[0]
        onCommand?.execute()
    }
    
    @IBAction func offSwitchTouched(_ sender: Any) {
        let offCommand: CommandProtocol? = controller.commands[1]
        offCommand?.execute()
    }
}
