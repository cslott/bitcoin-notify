#!/usr/bin/env node

var Bitcoin = require('bitcoinjs');

var init = require('bitcoinjs/daemon/init');
var config = init.getConfig();

node = new Bitcoin.Node(config);
node.start();
