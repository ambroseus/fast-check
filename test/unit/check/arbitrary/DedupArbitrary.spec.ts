import * as fc from '../../../../lib/fast-check.js';

import { dedup } from '../../../../src/check/arbitrary/DedupArbitrary.js';
import { nat } from '../../../../src/check/arbitrary/IntegerArbitrary.js';

import * as genericHelper from './generic/GenericArbitraryHelper.js';

import * as stubRng from '../../stubs/generators.js';
import { hasCloneMethod } from '../../../../src/check/symbols.js';
import { context } from '../../../../src/check/arbitrary/ContextArbitrary.js';
import { cloneMethod } from '../../../../lib/fast-check.js';
import { Arbitrary } from '../../../../src/check/arbitrary/definition/Arbitrary.js';
import { Shrinkable } from '../../../../src/check/arbitrary/definition/Shrinkable.js';

export const isStrictlySmaller = (arr1: number[], arr2: number[]) => {
  for (let idx = 0; idx !== arr1.length; ++idx) {
    if (arr2[idx] >= 0 && arr1[idx] >= arr2[idx]) return false;
    if (arr2[idx] <= 0 && arr1[idx] <= arr2[idx]) return false;
  }
  return true;
};

describe('DedupArbitrary', () => {
  describe('dedup', () => {
    it('Should produce cloneable tuple if cloneable', () => {
      const mrng = stubRng.mutable.counter(0);
      const g = dedup(context(), 2).generate(mrng).value;
      expect(hasCloneMethod(g)).toBe(true);
    });
    it('Should not produce cloneable tuple if not cloneable', () => {
      const mrng = stubRng.mutable.counter(0);
      const g = dedup(nat(), 2).generate(mrng).value;
      expect(hasCloneMethod(g)).toBe(false);
    });
    it('Should not clone on generate', () => {
      let numCallsToClone = 0;
      const withClonedAndCounter = new (class extends Arbitrary<any> {
        generate() {
          const v = {
            [cloneMethod]: () => {
              ++numCallsToClone;
              return v;
            }
          };
          return new Shrinkable(v);
        }
      })();
      const mrng = stubRng.mutable.counter(0);
      dedup(withClonedAndCounter, 2).generate(mrng);
      expect(numCallsToClone).toEqual(0);
    });
    it('Should offset the random exactly as many times as one source arbitrary', () =>
      fc.assert(
        fc.property(fc.integer(), fc.integer(1, 20), (seed, numValues) => {
          const mrngSource = stubRng.mutable.fastincrease(seed);
          dedup(nat(), numValues).generate(mrngSource).value;

          const mrng = stubRng.mutable.fastincrease(seed);
          nat().generate(mrng).value;

          expect(mrng.nextInt()).toEqual(mrngSource.nextInt());
        })
      ));
    describe('Given number of duplicates', () => {
      genericHelper.isValidArbitrary((numValues: number) => dedup(nat(), numValues), {
        seedGenerator: fc.nat(20),
        isStrictlySmallerValue: isStrictlySmaller,
        isValidValue: (g: number[], numValues: number) =>
          Array.isArray(g) && g.length === numValues && g.every(v => v === g[0])
      });
    });
  });
});
