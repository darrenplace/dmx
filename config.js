#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv;

const enntec = {
  driver: 'enttec-open-usb-dmx',
  deviceId: '/dev/tty.usbserial-AB0MRR2X'
}

const artnet = {
  driver: 'artnet',
  deviceId: '192.168.100.101'
}

const config = {
  ...argv.artnet ? artnet : enntec
}

console.log(config)

module.exports = config;
