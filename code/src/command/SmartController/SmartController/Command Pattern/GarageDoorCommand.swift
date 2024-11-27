import Foundation

struct GarageDoorUpCommand: CommandProtocol {
    var title: String = "up"
    
    func execute() {
        print("\nGarage door light is on")
        print("Garage door is starting \(title)...")
        print("Garage door is openned.")
    }
}

struct GarageDoorDownCommand: CommandProtocol {
    var title: String = "down"
    
    func execute() {
        print("\nGarage door is starting \(title)...")
        print("Garage door shutted down.")
        print("Garage door light is off.")
    }
}
