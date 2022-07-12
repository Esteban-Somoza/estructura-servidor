const {static} = require('express');
const {join} = require('path');

let public = join(__dirname, '../public');

module.exports = static (public)