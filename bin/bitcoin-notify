#!/usr/bin/env node

var Bitcoin = require("bitcoinjs");

var cfg = new Bitcoin.Settings();
cfg.network.noListen = true;
cfg.network.connect = "localhost:8333";
cfg.storage.uri = "mongodb://localhost/bitcoin";

var node = new Bitcoin.Node(cfg);

node.start();
