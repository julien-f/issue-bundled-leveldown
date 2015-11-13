> This repository illustrate the issue with leveldown which does not
> work when reinstalled as a bundled dependency.

The module *foo* has leveldown has a bundled dependency.

First, we have to install foo's dependency to ensure the bundle
dependencies behavior:

```
> cd foo
> npm i
> cd ..
```


When installed for the first time, it works normally:

```
> npm i ./foo
> ./node_modules/.bin/foo
it works!
```

When reinstalled, it failed:

```
> npm i ./foo
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
