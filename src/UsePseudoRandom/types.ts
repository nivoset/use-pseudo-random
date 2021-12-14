export interface PseudoRandomOptions {
  wholeNumber?: boolean;
  range?: {
    min: number;
    max: number;
  }
}

export interface UsePseudoRandomOptions extends PseudoRandomOptions {
  seed?: number | string;
}


export interface NextRandom {
  (options?: PseudoRandomOptions): number;
}

export interface UsePseudoRandom {
  (options?: UsePseudoRandomOptions): [ lastValue: number, nextRandom: NextRandom, ];
}
