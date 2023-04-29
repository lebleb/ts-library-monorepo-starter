/* istanbul ignore file */

import { division, sum } from 'lebleb-library-1'

export const printCalculation = (a: number, b: number): void => { console.log(sum(a, b), division(4, 2)) }

printCalculation(1, 2)
