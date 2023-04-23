/* istanbul ignore file */

import { sum } from 'library-1'

export const printSum = (a: number, b: number): void => { console.log(sum(a, b)) }

printSum(1, 2)
