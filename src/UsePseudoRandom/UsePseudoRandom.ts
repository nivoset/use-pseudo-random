import { useState, useEffect} from 'react'
import Prando from 'prando'
import { UsePseudoRandom } from './types';

export const usePseudoRandom: UsePseudoRandom = ({ seed, wholeNumber = false, range } = {}) => {
  const [ value, setValue ] = useState<number>(0)
  const [ random, setRandom] = useState<Pick<Prando, 'nextInt' | 'next'>>(new Prando(seed));

  const next = () => {
    const result = wholeNumber ? random.nextInt(range?.min, range?.max) : random.next(range?.min, range?.max);
    setValue(result);
  }

  useEffect(() => {
    setRandom(new Prando(seed));
  }, [seed]);

  return [
    value,
    next,
   ];
};
