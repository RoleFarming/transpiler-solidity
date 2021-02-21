#!/usr/bin/env node

const Transpiler = require('./transpiler');

const fs = require('fs');
const file_name = process.argv[2];
const data = fs.readFileSync(file_name, 'utf-8');

Transpiler(file_name, data)
  .then(res => console.log(res))
  .catch(err => {
    console.error(err);
    process.exit(1);
});

