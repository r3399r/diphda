import { StringHelper } from './StringHelper';

/**
 * Tests of String helper.
 */
describe('StringHelper', () => {
  it('allAreCorrectId', () => {
    expect(StringHelper.allAreCorrectId(['123'])).toBe(true);
    expect(StringHelper.allAreCorrectId(['123', '1234567'])).toBe(true);
    expect(StringHelper.allAreCorrectId(['1234', 'A123456789'])).toBe(true);

    expect(StringHelper.allAreCorrectId(['12'])).toBe(false);
    expect(StringHelper.allAreCorrectId(['12', '1234'])).toBe(false);
    expect(StringHelper.allAreCorrectId(['12', '1234567890'])).toBe(false);
  });
});
