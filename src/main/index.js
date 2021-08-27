import { app, BrowserWindow, ipcMain } from 'electron'
import '../renderer/store'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow,childWindow;
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    x:50,
    y:100,
    height: 563,
    useContentSize: true,
    width: 800,
    minHeight: 563,
    minWidth:800,
    center:false,
    maximizable: false,
    title:'chat'
  })

  mainWindow.loadURL(winURL)
  
  mainWindow.on('closed', () => {
    mainWindow = null;
    childWindow=null
  })

  mainWindow.once('ready-to-show', () => {
    console.log('/index.js [34]--1','ready-to-show');
    mainWindow.show()
    // childWindow.show()
  })
}
// 准备阶段，创建窗口
app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

// 打开子窗口
ipcMain.on('addChild',(event,url)=>{
  // console.log('/index.js [61]--1',event.sender);
  event.sender.send('asynchronous-reply', 'pong')
  if(!childWindow) {
    childWindow = new BrowserWindow({
      x:930,
      y:100,
      height: 563,
      useContentSize: true,
      width: 600,
      minHeight: 563,
      minWidth:600,
      center:false,
      maximizable: false,
      parent:mainWindow,
      title:'chat-info'
      // webPreferences:{
      //   // devTools:false
      // }
    })
  }
  console.log('/index.js [79]--  1',url);
  // childWindow.webContents.send('asynchronous-reply', 'apply');
  // childWindow.loadURL(winURL,{hash:'info'})
  childWindow.loadURL(winURL+'#/info')
  // 异步消息
  // ipcMain.on('asynchronous-message', (event, arg) => {
  //   console.log(arg) // prints "ping"
  //   // event.reply('asynchronous-reply', 'pong')
  //   event.sender.send('asynchronous-reply', 'pong')
  // })
  
  // 同步消息
  // ipcMain.on('open-child', (event, arg) => {
  //   console.log(arg) // prints "ping"
  //   // event.returnValue = 'open'
  // })
  // event.reply('asynchronous-reply', 'pong')
  childWindow.on('closed', () => {
    childWindow=null
  })
})
/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
