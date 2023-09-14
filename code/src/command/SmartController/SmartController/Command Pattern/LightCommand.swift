import Foundation

struct LightOnCommand: Command {
    var title: String = "on"
    func execute() {
        print("Light on is press!")
    }
}

struct LightOffCommand: Command {
    var title: String = "off"
    func execute() {
        print("Light off is press!")
    }
}
