import weather from '../src';

test('weather', () => {
  expect(weather(6)).toBe(3);
});
