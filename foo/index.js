#!/usr/bin/env node

try {
  require('leveldown')
  console.log('it works!')
} catch (e) {
  console.error('it does not work :(')
  console.error(e.stack)

  process.exit(1)
}

// var db = require('leveldown')(__dirname + '/db')

// db.open(function (error) {
//   console.log('db.open', error)

//   if (!error) {
//     db.close(function (error) {
//       console.log('db.close()', error)
//     })
//   }
// })
