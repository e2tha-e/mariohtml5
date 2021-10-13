'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var win;

app.on('ready', function() {
  win = new BrowserWindow({width: 656, height: 500});
  win.webContents.session.clearCache(function() {
    win.loadURL(`file://${__dirname}/main.html`);
  });
});
