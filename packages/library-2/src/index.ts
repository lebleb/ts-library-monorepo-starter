/* istanbul ignore file */

import { division, special, sum } from 'lebleb-library-1'

export const printCalculation = (a: number, b: number): void => { console.log(sum(a, b), division(4, 2), special(1, b, 3)) }

printCalculation(1, 2)
