import { describe, expect, it } from 'vitest'
import { formatCurrency } from './format-currency'

describe('formatCurrency', () => {
  it('should format USD values with commas and $ sign', () => {
    expect(formatCurrency(150000000)).toBe('$150,000,000')
    expect(formatCurrency(836800000)).toBe('$836,800,000')
    expect(formatCurrency(0)).toBe('$0')
    expect(formatCurrency(1)).toBe('$1')
  })

  it('it should round up fractional parts', () => {
    expect(formatCurrency(1999999.99)).toBe('$2,000,000')
    expect(formatCurrency(19999999.99)).toBe('$20,000,000')
    expect(formatCurrency(199999999.99)).toBe('$200,000,000')
  })
})
