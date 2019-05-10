import { defaultTitle } from './formatters';
describe('formatters', function () {
  test('defaultTitle', function () {
    expect(defaultTitle('test')).toBe('test');
    expect(defaultTitle({
      title: 'test'
    })).toBe('test');
  });
});