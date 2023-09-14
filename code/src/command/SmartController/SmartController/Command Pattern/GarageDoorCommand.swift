//
//  GarageDoorCommand.swift
//  SmartController
//
//  Created by Olarn U. on 14/9/2566 BE.
//

import Foundation

struct GarageDoorUpCommand: Command {
    var title: String = "up"
    
    func execute() {
        print("Garage door is up!")
    }
}

struct GarageDoorDownCommand: Command {
    var title: String = "down"
    
    func execute() {
        print("Garage door is down!")
    }
}
