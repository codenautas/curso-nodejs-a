"use strict"
const mongojs = require('mongojs');

const db=mongojs("port:27030/sistemas",["personas"]);
console.log("");