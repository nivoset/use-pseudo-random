import { useState, useMemo} from 'react'
import Prando from 'prando'
import { UsePseudoRandom } from './types';

export const usePseudoRandom: UsePseudoRandom = ({ seed, wholeNumber = false, range } = {}) => {
  const [ value, setValue ] = useState<number>(0)
  const random = useMemo(() => new Prando(seed), [seed]);

  const next = () => {
    const result = wholeNumber ? random.nextInt(range?.min, range?.max) : random.next(range?.min, range?.max);
    setValue(result);
    return result;
  }

  return [
    value,
    next,
   ];
};
