import ErrorRepository from '../ClassError';

test('test unknown error', () => {
  const error = new ErrorRepository();
  expect(error.translate(2)).toBe('Unknown error');
});

test('test translated error ', () => {
  const error = new ErrorRepository();
  expect(error.translate(1)).toBe('Personage is in the team');
});
