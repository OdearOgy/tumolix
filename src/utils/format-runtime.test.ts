import { describe, expect, it } from 'vitest'
import { formatRuntime } from './format-runtime'

describe('formatRuntime', () => {
  it('it should return formatted runtime for minutes', () => {
    expect(formatRuntime(148)).toBe('2h 28m')
    expect(formatRuntime(60)).toBe('1h')
    expect(formatRuntime(0)).toBe('')
    expect(formatRuntime(75)).toBe('1h 15m')
    expect(formatRuntime(133)).toBe('2h 13m')
    expect(formatRuntime(10)).toBe('10m')
  })
})
