const DMX = require('./index');
const config = require('./config');

const dmx = new DMX();

const universe = dmx.addUniverse('demo', config.driver, config.deviceId);

// universe.update({dmxChannel: value, dmxChannel: value, etc});

// on
universe.update({ 1: 255, 2: 255, 3: 255, 4: 255, 5: 255, 6: 255, 7: 255, 8: 255, 9: 255, 10: 255, 11: 255, 12: 255 });

// off
// universe.update({ 1: 0, 2: 255, 3: 0, 4: 255, 5: 0, 6: 255, 7: 0, 8: 255, 9: 0, 10: 255, 11: 0, 12: 255 });
