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

        addLightCommand(actionSheet)
        addGarageCommand(actionSheet)
        
        present(actionSheet, animated: true)
    }
}

extension AddControllerViewController {
    fileprivate func addLightCommand(_ actionSheet: UIAlertController) {
        actionSheet.addAction(UIAlertAction(
            title: "Light",
            style: .default,
            handler: { [weak self] action in
                self?.delegate?.didAddController(
                    controller: Controller(             // <- Add `light` controller
                        icon: UIImage(named: "light")!,
                        name: "Smart Light",
                        commands: [
                            LightOnCommand(),
                            LightOffCommand()
                        ]))
                self?.navigationController?.popViewController(animated: true)
            }))
    }
    
    fileprivate func addGarageCommand(_ actionSheet: UIAlertController) {
        actionSheet.addAction(UIAlertAction(
            title: "Garage Door",
            style: .default,
            handler: { [weak self] action in
                self?.delegate?.didAddController(
                    controller: Controller(             // <- Add `garage` controller
                        icon: UIImage(named: "garage")!,
                        name: "Smart Garage Door",
                        commands: [
                            GarageDoorUpCommand(),
                            GarageDoorDownCommand()
                        ]))
                self?.navigationController?.popViewController(animated: true)
            }))
    }
}
