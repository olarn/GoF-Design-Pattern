import Foundation

struct LightOnCommand: CommandProtocol {
    var title: String = "on"
    func execute() {
        print("\nLight on is press!")
    }
}

struct LightOffCommand: CommandProtocol {
    var title: String = "off"
    func execute() {
        print("\nLight off is press!")
    }
}
