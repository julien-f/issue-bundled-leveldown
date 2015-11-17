> This repository illustrate the issue with leveldown which does not
> work when reinstalled as a bundled dependency.

The module *foo* has leveldown has a bundled dependency.

First, we have to install foo's dependency to ensure the bundle
dependencies behavior:

```
> cd foo
> npm i
> cd ..
> npm pack ./foo
```

## with npm 2

The installation fails:

```
> npm i ./foo-0.0.0.tgz
  |
  > leveldown@1.4.2 install /tmp/issue-bundled-leveldown/node_modules/foo/node_modules/leveldown
  > prebuild --download

  sh: 1: prebuild: not found
  npm ERR! Linux 3.16.0-4-amd64
  npm ERR! argv "/usr/local/bin/node" "/tmp/issue-bundled-leveldown/node_modules/.bin/npm" "i" "./foo-0.0.0.tgz"
  npm ERR! node v4.2.2
  npm ERR! npm  v2.14.11
  npm ERR! file sh
  npm ERR! code ELIFECYCLE
  npm ERR! errno ENOENT
  npm ERR! syscall spawn

  npm ERR! leveldown@1.4.2 install: `prebuild --download`
  npm ERR! spawn ENOENT
  npm ERR!
  npm ERR! Failed at the leveldown@1.4.2 install script 'prebuild --download'.
  npm ERR! This is most likely a problem with the leveldown package,
  npm ERR! not with npm itself.
  npm ERR! Tell the author that this fails on your system:
  npm ERR!     prebuild --download
  npm ERR! You can get their info via:
  npm ERR!     npm owner ls leveldown
  npm ERR! There is likely additional logging output above.

  npm ERR! Please include the following file with any support request:
  npm ERR!     /tmp/issue-bundled-leveldown/npm-debug.log
```

## with npm 3


When installed for the first time, it works normally:

```
> npm i ./foo-0.0.0.tgz
> ./node_modules/.bin/foo
  it works!
```

When reinstalled, it failed:

```
> npm i ./foo-0.0.0.tgz
> ./node_modules/.bin/foo
  it does not work :(
  Error: Could not locate the bindings file. Tried:
   → /tmp/node_modules/foo/node_modules/leveldown/build/leveldown.node
   → /tmp/node_modules/foo/node_modules/leveldown/build/Debug/leveldown.node
   → /tmp/node_modules/foo/node_modules/leveldown/build/Release/leveldown.node
   → /tmp/node_modules/foo/node_modules/leveldown/out/Debug/leveldown.node
   → /tmp/node_modules/foo/node_modules/leveldown/Debug/leveldown.node
   → /tmp/node_modules/foo/node_modules/leveldown/out/Release/leveldown.node
   → /tmp/node_modules/foo/node_modules/leveldown/Release/leveldown.node
   → /tmp/node_modules/foo/node_modules/leveldown/build/default/leveldown.node
   → /tmp/node_modules/foo/node_modules/leveldown/compiled/4.2.2/linux/x64/leveldown.node
      at bindings (/tmp/node_modules/foo/node_modules/bindings/bindings.js:88:9)
      at Object.<anonymous> (/tmp/node_modules/foo/node_modules/leveldown/leveldown.js:4:46)
      at Module._compile (module.js:435:26)
      at Object.Module._extensions..js (module.js:442:10)
      at Module.load (module.js:356:32)
      at Function.Module._load (module.js:311:12)
      at Module.require (module.js:366:17)
      at require (module.js:385:17)
      at Object.<anonymous> (/tmp/node_modules/foo/index.js:4:3)
      at Module._compile (module.js:435:26)
```
