# DeepSeek Desktop Application

DeepSeek is a desktop application developed by DeepSeek Artificial Intelligence Co., Ltd. It provides an easy-to-use interface for interacting with our AI-powered platform. The app is built using Electron and provides features such as web access to DeepSeek Chat, a clean and responsive interface, and customizable settings.

## Features

- Splash screen during startup.
- Built-in menu with options for Home, Edit, View, and Help.
- Easy access to the official DeepSeek website and developer contact info.
- External link opening (Telegram, Instagram, Email).

## Installation

### Prerequisites

Before installing, make sure you have the following installed:
- Node.js
- npm (or yarn)

### Clone the repository

```bash
git clone https://github.com/code3-dev/deepseek-desktop.git
cd deepseek-desktop
```

### Install dependencies

```bash
npm install
```

### Run the application

You can start the application using:

```bash
npm start
```

This will launch the application with Electron in development mode.

## Building the Application

To create a production build, use the following commands based on your platform.

### Build for Windows

```bash
npm run build:win
```

### Build for Linux

```bash
npm run build:linux
```

### Build for all platforms

```bash
npm run build
```

After the build process is complete, you will find the executable in the `release` directory.

## Configuration

You can customize the build by modifying the `build` section in `package.json`. This includes changing the app icon, application ID, and adding any additional files required for packaging.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Author: Hossein Pira
- Email: [h3dev.pira@gmail.com](mailto:h3dev.pira@gmail.com)
- Telegram: [h3dev Telegram](https://t.me/h3dev)
- Instagram: [@h3dev.pira](https://instagram.com/h3dev.pira)

## Links

- [DeepSeek Website](https://chat.deepseek.com)