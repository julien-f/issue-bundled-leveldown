#!/usr/bin/env node

try {
  require('leveldown')
  console.log('it works!')
} catch (e) {
  console.error('it does not work :(')
  console.error(e.stack)

  process.exit(1)
}
