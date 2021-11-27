import { renderHook, act } from '@testing-library/react-hooks'
import { usePseudoRandom } from './UsePseudoRandom'

test('should return the same random sequence of numbers with a seed', () => {
  const { result } = renderHook(() => usePseudoRandom({ seed: 1, wholeNumber: true}))
  const output = new Array(20).fill(0).map(() => {
    act(() => {
      result.current[1]()
    })
    return result.current[0]
  });
  expect(output).toMatchSnapshot();
})


test('should return within bounds', () => {
  const { result } = renderHook(() => usePseudoRandom({ wholeNumber: true, range: { min: 0, max: 10 } }))

  for (let i = 100; i > 0; i--) {
    act(() => {
      result.current[1]();
      expect(result.current[0]).toBeGreaterThanOrEqual(0);
      expect(result.current[0]).toBeLessThanOrEqual(10);
      expect(Math.floor(result.current[0])).toEqual(result.current[0]);
    })
  }
})
test('should work with no options passed in', () => {
  const { result } = renderHook(() => usePseudoRandom())

  for (let i = 100; i > 0; i--) {
    act(() => {
      result.current[1]();
      expect(result.current[0]).toBeGreaterThanOrEqual(0);
      expect(result.current[0]).toBeLessThanOrEqual(1);
    })
  }
})

test('should return decimal number', () => {
  const { result } = renderHook(() => usePseudoRandom({ seed: 1337 }))

  act(() => {
    result.current[1]()
  })
  
  expect(result.current[0]).toEqual(0.5791554550126091);
})
test('should return decimal number', () => {
  const { result } = renderHook(() => usePseudoRandom({ seed: 'decimal number', range: { min: 0, max: 100 } }))

  expect(new Array(100).fill(0).map(() => {
    act(() => {
      result.current[1]();

    })
    return result.current[0]
  })).toMatchSnapshot();
  
})