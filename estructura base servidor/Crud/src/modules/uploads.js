const {static} = require('express');
const {join} = require('path');

let uploads = join(__dirname, '../../uploads');

module.exports = static (uploads)