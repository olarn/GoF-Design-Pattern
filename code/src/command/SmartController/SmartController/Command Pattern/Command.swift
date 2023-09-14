import Foundation

protocol Command {
    var title: String { get set }
    func execute()
}
