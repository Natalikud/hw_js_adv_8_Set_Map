import Team from '../app';

test('error: personage is in the team', () => {
  const testTeam = new Team();
  expect(() => {
    testTeam.add('personage1');
    testTeam.add('personage2');
    testTeam.add('personage1');
  }).toThrow(new Error('Personage is in the team'));
});

test('Add new personage in the team', () => {
  const expected = new Set(['personage1', 'personage2', 'personage3']);
  const testTeam = new Team();
  testTeam.add('personage1');
  testTeam.add('personage2');
  testTeam.add('personage3');

  expect(testTeam.members).toEqual(expected);
});

test('test add all personages', () => {
  const expected = new Set(['personage1', 'personage2', 'personage3']);
  const testTeam = new Team();
  testTeam.addAll('personage1', 'personage2', 'personage3', 'personage1');

  expect(testTeam.members).toEqual(expected);
});

test('test toArray', () => {
  const expected = ['personage1', 'personage2', 'personage3'];
  const testTeam = new Team();
  testTeam.addAll('personage1', 'personage2', 'personage3', 'personage1');

  expect(testTeam.toArray()).toEqual(expected);
});
