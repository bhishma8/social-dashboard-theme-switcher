import Darkmode from 'darkmode-js';
 
new Darkmode().showWidget();

var options = {
    bottom: 'unset', // default: '32px'
    right: 'unset', // default: '32px'
    left: 'unset', // default: 'unset'
    top:'200px',
    time: '0.25s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: 'Click me', // default: ''
    autoMatchOsTheme: true // default: true
  }
   
  const darkmode = new Darkmode(options);
  darkmode.showWidget()