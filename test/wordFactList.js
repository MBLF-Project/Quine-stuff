#!/usr/bin/env node
const assert = require('assert')
const fs = require('fs')

fs.readFile("out.bf", (_, output) => {
  assert.equal(output, "<+[-<+]-.<<<<<<<[.>]")
})
