const merge = require('merge');
const ts_preset = require('ts-jest/jest-preset');
const reaact_native_preset = require('jest-react-native');

module.exports = merge.recursive(ts_preset, reaact_native_preset)
