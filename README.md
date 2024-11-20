# Design Patterns Code Kata

This project contains implementations of Gang-of-Four Design Patterns, based on examples from the Head First Design Patterns book with NodeJS and Typescript. Each pattern is organized in its own directory under the `code` folder.

## Project Structure
Each design pattern folder contains three sub-directories:
- `begin/` - Contains starter code for practicing the pattern
- `finish/` - Contains the complete implementation as reference
- `lab/` - Your workspace for implementing the pattern

```
code/
  ├── pattern1/
  │   ├── begin/
  │   ├── finish/
  │   └── lab/
  ├── pattern2/
  │   ├── begin/
  │   ├── finish/
  │   └── lab/
  └── ...
```

> **Note:** Before starting the code kata, it's recommended to delete the `begin` and `finish` folders to avoid IDE confusion due to duplicate class names. Keep only the `lab` folder for your implementation.

### Cleanup Command
To remove `begin` and `finish` folders:

For Unix/Linux/MacOS:
```bash
find . -type d \( -name "begin" -o -name "finish" \) \
    -exec rm -rf {} +
```

For Windows (PowerShell):
```powershell
Get-ChildItem -Directory -Recurse -Filter "begin","finish" | 
    Remove-Item -Recurse -Force
```

## Project Setup

### Prerequisites
- Node.js
- Typescript
- Nix (optional)
- StarUML (optional - for viewing diagrams)

### Development Environment

#### Using Nix (Optional)
To set up the development environment using Nix:
```bash
nix-shell
```
For more information about Nix, visit [nixos.org](https://nixos.org)

## Running the Project

### Tests
To run tests with watch mode, navigate to the `/code` directory and execute:
```bash
npm run test
```

### Development Server
To run the application in development mode with watch:
```bash
npm run dev
```

## Project Documentation

### UML Diagrams
The project includes UML diagrams created with StarUML. To view them:
1. Download and install StarUML from [staruml.io](https://staruml.io)
2. Open the `Diagram.mdj` file in StarUML

## References
- [Head First Design Patterns](https://www.oreilly.com/library/view/head-first-design/9780596007124/)
- [Design Patterns: Elements of Reusable Object-Oriented Software](https://www.amazon.com/Design-Patterns-Object-Oriented-Addison-Wesley-Professional-ebook/dp/B000SEIBB8)
