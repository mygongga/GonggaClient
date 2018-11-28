// Modules to control application life and create native browser window
const {app, BrowserWindow, globalShortcut} = require('electron')
const fs = require("fs");
const { exec } = require('child_process');
const {shell} = require('electron')
const shelljs = require('shelljs');

const {dialog} = require('electron')
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

const appData= app.getPath('appData');
console.log(appData);

const {powerSaveBlocker} = require('electron')

const id = powerSaveBlocker.start('prevent-display-sleep')
console.log(powerSaveBlocker.isStarted(id))
powerSaveBlocker.stop(id)



function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800,height: 570,icon: __dirname + '/img/icon.png',frame:false })
  mainWindow.setMenu(null)
  // mainWindow.openDevTools();

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
    app.quit()
  })
}

function init_node(){

  shelljs.mkdir("-p",appData+"/GonggaPeer");
  shelljs.touch(appData+"/GonggaPeer/lang");
  shelljs.touch(appData+"/GonggaPeer/nodeid");
  shelljs.touch(appData+"/GonggaPeer/account");
  shelljs.cp('-R', __dirname+'/gongga/', appData+"/GonggaPeer/gongga/" );
}

const isSecondInstance = app.makeSingleInstance((commandLine, workingDirectory) => {
  // Someone tried to run a second instance, we should focus our window.
  if (mainWindow) {
    if (mainWindow.isMinimized()) mainWindow.restore()
    mainWindow.focus()
  }
})

if (isSecondInstance) {
  app.quit()
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', function(){

  globalShortcut.register('CommandOrControl+Shift+g', () => {
    mainWindow.webContents.toggleDevTools();
  })
   
  try{
    fs.statSync(appData+"/GonggaPeer/").isDirectory()
  }
  catch(e){
    
    init_node();
  }

 createWindow()
} )

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
    

  }
})
app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})
 

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

const {ipcMain} = require('electron')

ipcMain.on('quit', (event) => {
  event.sender.send('app_exit')
  app.quit();
})
 

ipcMain.on('save-key', (event) => {
  dialog.showOpenDialog({
    properties: [ 'openDirectory']
  }, (files) => {
   
    if (files) {
      event.sender.send('saved', files)
    }
  })
})

ipcMain.on('appDataPath', (event) => {
  event.returnValue = appData+"/GonggaPeer/";
   
})

ipcMain.on('getOs', (event) => {
  event.returnValue = process.platform;
   
})
ipcMain.on('open-transferFrom-dialog', (event,arg) => {
  const options = {
    type: 'info',
    message: arg,
  }
  dialog.showMessageBox(options, (index) => {

  })
})

ipcMain.on('open-error-dialog', (event,arg) => {
  dialog.showErrorBox('Error', arg)
})

ipcMain.on('open-up-dialog', (event,arg) => {
  const options = {

    message: arg.msg,
    buttons: [arg.yes, arg.no]
  }
  dialog.showMessageBox(options, (index) => {
     if(index==0){
     let  url="https://gongga.org/#peers"
        if(arg.url!==""){
          url=arg.url
        }
        shell.openExternal(url)
     }
     if(arg.upgrade=="1"){
      app.quit();
    }
  })
})

ipcMain.on('open-reset-dialog', (event,arg) => {
  const options = {
    type: 'warning',
    message: arg.msg,
    buttons: [ arg.no, arg.yes]
  }
  dialog.showMessageBox(options, (index) => {
    event.sender.send('reset-dialog-selection', index)
  })
})
 

Date.prototype.Format = function (fmt) {  
  var o = {
      "M+": this.getMonth() + 1,  
      "d+": this.getDate(), 
      "h+": this.getHours(),  
      "m+": this.getMinutes(), 
      "s+": this.getSeconds(), 
      "q+": Math.floor((this.getMonth() + 3) / 3),  
      "S": this.getMilliseconds()  
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
  if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
  }
 