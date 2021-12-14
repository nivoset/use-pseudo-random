# Pseudo random number generator

This is a wrapper hook for a pseudo random number generator. (it also can do pure random) based on Prando library

### How to Use
```TypeScript
  const [ randomValue, getNext ] = usePseudoRandom()
  // randomValue = some random number from 0 to 1 with no options

  getNext()
  // now randomValue is updated with the next number
```

## Options

Option | required | type | description 
--- | --- | --- | ---
seed | no | string or number | seed used to generate the numbers
WholeNumber | no | boolean | dictate if using a whole number or not
range | no | { min: number, max: number } | Between a min (inclusive) and a max (exclusive) for non whole numbers, inclusive for whole numbers

# Use Pseudo Random Number

This hook returns a tuple of the random number and a function to get the next number.

```TypeScript
  const [ randomValue, getNext ] = usePseudoRandom()
  // randomValue = some random number from 0 to 1 with no options

  getNext()
  // now randomValue is updated with the next number
```

Options for the random number generator can be passed in as an object.
```TypeScript
  const [ randomValue, getNext ] = usePseudoRandom({
    seed: 'some seed', // text or number can be a seed
    wholeNumber: true,
    range: { min: 0, max: 10 }
  })
```

under the hood this is using the Prando library.
