import { describe, expect, it } from 'vitest'
import { heroOverlapsHeader } from '@/lib/hero-overlap'

describe('Hero-position header transition', () => {
  it('keeps the header transparent while the hero extends behind it', () => {
    expect(heroOverlapsHeader(101, 100)).toBe(true)
  })
  it('switches at the hero boundary rather than a fixed scroll distance', () => {
    expect(heroOverlapsHeader(100, 100)).toBe(false)
    expect(heroOverlapsHeader(79, 80)).toBe(false)
    expect(heroOverlapsHeader(81, 80)).toBe(true)
  })
})