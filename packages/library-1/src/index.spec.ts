import { describe, expect, test } from '@jest/globals'
import { sum } from './sum'
import { diff } from './diff'

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})

describe('diff module', () => {
  test('diifs 2 - 1 to equal 1', () => {
    expect(diff(2, 1)).toBe(1)
  })
})
