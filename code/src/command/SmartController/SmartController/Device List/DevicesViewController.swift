import UIKit

class DevicesViewController: UIViewController, UITableViewDataSource, AddControllerViewControllerDelegate {
    
    @IBOutlet weak var DeviceTableView: UITableView!
    
    var controllers: [Controller] = [
        Controller(
            icon: UIImage(named: "light")!,
            name: "Smart Light",
            commands: [
                LightOnCommand(),
                LightOffCommand()
            ]
        ),
        Controller(
            icon: UIImage(named: "garage")!,
            name: "Smart Garage Door",
            commands: [
                GarageDoorUpCommand(),
                GarageDoorDownCommand()
            ]
        ),
    ]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        DeviceTableView.dataSource = self
        DeviceTableView.reloadData()
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return controllers.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let controller = controllers[indexPath.row]
        guard
            let cell = tableView.dequeueReusableCell(withIdentifier: "simpleOnOffCell") as? SimpleOnOffTableViewCell
        else {
            return UITableViewCell()
        }
        
        cell.controller = controller
        cell.controllerImage.image = controller.icon
        cell.controllerTitle.text = controller.name
        cell.onSwitch.setTitle(controller.commands[0].title, for: .normal)
        cell.offSwitch.setTitle(controller.commands[1].title, for: .normal)
        
        return cell
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "addSegue" {
            if let addVC = segue.destination as? AddControllerViewController {
                addVC.delegate = self
            }
        }
    }
    
    func didAddController(controller: Controller) {
        self.controllers.append(controller)
        self.DeviceTableView.reloadData()
    }
}

