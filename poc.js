const DMX = require('./index');
const config = require('./config');

const dmx = new DMX();

const universe = dmx.addUniverse('demo', config.driver, config.deviceId);

//universe.update({channel: 0-512, value: 0-255});
universe.update({1: 1, 2: 255});
