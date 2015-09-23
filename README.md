Flat
============

This Meteor package is a wrapper for Hughsk Flat node package: https://github.com/hughsk/flat
Take a nested Javascript object and flatten it, or unflatten an object with delimited keys.

## Methods

### flatten(original, options)

Flattens the object - it'll return an object one level deep, regardless of how
nested the original object was:

``` javascript
flatten({
    key1: {
        keyA: 'valueI'
    },
    key2: {
        keyB: 'valueII'
    },
    key3: { a: { b: { c: 2 } } }
})

// {
//   'key1.keyA': 'valueI',
//   'key2.keyB': 'valueII',
//   'key3.a.b.c': 2
// }
```

### unflatten(original, options)

Flattening is reversible too, you can call `flatten.unflatten()` on an object:

``` javascript
unflatten({
    'three.levels.deep': 42,
    'three.levels': {
        nested: true
    }
})

// {
//     three: {
//         levels: {
//             deep: 42,
//             nested: true
//         }
//     }
// }
```

## Documentation
You can find documentation, options and more about Flat node package here:
* Flat GIT: https://github.com/hughsk/flat

## Contributors
* Pascal Richier @pascalrichier

## TODO
1. Add testing

## License
MIT
