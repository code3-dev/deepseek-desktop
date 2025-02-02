const { app, BrowserWindow, Menu, dialog, shell, ipcMain } = require('electron');
const path = require('path');

let win;
let splash;

function createSplash() {
  splash = new BrowserWindow({
    width: 400,
    height: 300,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    icon: path.join(__dirname, 'assets/icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  splash.loadFile('assets/splash.html');
}

function createWindow() {
  splash.close();

  win = new BrowserWindow({
    width: 850,
    height: 650,
    icon: path.join(__dirname, 'assets/icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.maximize();
  win.loadURL('https://chat.deepseek.com');

  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  const template = [
    {
      label: 'DeepSeek',
      submenu: [
        {
          label: 'Home',
          click: () => {
            if (win) {
              win.loadURL('https://chat.deepseek.com');
            }
          }
        },
        { type: 'separator' },
        { role: 'quit' }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'About',
          click: () => {
            dialog.showMessageBox(win, {
              type: 'info',
              title: 'About the DeepSeek',
              message: `DeepSeek Artificial Intelligence Co., Ltd. (referred to as "DeepSeek" or "深度求索") , founded in 2023, is a Chinese company dedicated to making AGI a reality.\nVersion: 1.5.0`,
              buttons: ['OK'],
            });
          }
        },
        { type: 'separator' },
        {
          label: 'Contact Developer',
          enabled: false
        },
        {
          label: 'Telegram',
          click: () => {
            shell.openExternal('https://t.me/h3dev');
          }
        },
        {
          label: 'Instagram',
          click: () => {
            shell.openExternal('https://instagram.com/h3dev.pira');
          }
        },
        {
          label: 'Email',
          click: () => {
            shell.openExternal('mailto:h3dev.pira@gmail.com');
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}


app.whenReady().then(() => {
  createSplash();
  setTimeout(createWindow, 2000);

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

ipcMain.on('open-external', (event, url) => {
  shell.openExternal(url);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
