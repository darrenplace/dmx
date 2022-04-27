const DMX = require('./index');
const config = require('./config');
const dmx = new DMX();

// const universe = dmx.addUniverse('demo', 'socketio', null, {port: 17809, debug: true});
var universe = dmx.addUniverse('demo', config.driver, config.deviceId);

let on = false;

setInterval(() => {
  if (on) {
    on = false;
    universe.updateAll(0);
    console.log('off');
  } else {
    on = true;
    universe.updateAll(250);
    console.log('on');
  }
}, 1000);
