export interface UsePseudoRandomOptions {
  seed?: number | string;
  wholeNumber?: boolean;
  range?: {
    min: number;
    max: number;
  };
}


export interface NextRandom {
  (): void;
}

export interface UsePseudoRandom {
  (options?: UsePseudoRandomOptions): [ lastValue: number, nextRandom: NextRandom, ];
}