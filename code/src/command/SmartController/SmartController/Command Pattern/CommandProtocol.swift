import Foundation

// interface class
protocol CommandProtocol {
    var title: String { get set }
    func execute()
}
