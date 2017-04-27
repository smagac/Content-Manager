'use strict'

import { app, BrowserWindow, protocol } from 'electron'
const path = require('path')

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:${require('../../../config').port}`
  : `file://${__dirname}/index.html`

global.configuration = {
  assetsPath: ''
};

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  // eslint-disable-next-line no-console
  console.log('mainWindow opened')
  protocol.registerFileProtocol('asset', (request, callback) => {
    const url = request.url.substr(8);
    const location = path.normalize(`${global.configuration.assetsPath}/${url}`)
    console.log(location);
    callback({path: location});
  }, (error) => {
    if (error) console.error('Failed to register protocol')
  })
}

protocol.registerStandardSchemes(['asset'])
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

app.on('open-url', function(event, urlToOpen) {
   event.preventDefault();
   console.log(urlToOpen);
});