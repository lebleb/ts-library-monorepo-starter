import { describe, expect, test } from '@jest/globals'
import { sum } from './sum'
import { diff } from './diff'
import { multiple } from './multiple'
import { division } from './divison'

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})

describe('diff module', () => {
  test('diff 2 - 1 to equal 1', () => {
    expect(diff(2, 1)).toBe(1)
  })
})

describe('multiple module', () => {
  test('multiple 2 x 3 to equal 6', () => {
    expect(multiple(2, 3)).toBe(6)
  })
})

describe('division module', () => {
  test('division 2 x 3 to equal 6', () => {
    expect(division(4, 2)).toBe(2)
  })
})
