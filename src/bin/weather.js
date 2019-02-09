#!/usr/bin/env node

import weather from '..';

console.log(weather(Number(process.argv[process.argv.length - 1])));
