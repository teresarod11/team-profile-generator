const Engineer = require('../lib/Engineer');

test('test get github username', () => {
    const eng = new Engineer(10, "James", "james@test.com", "james10");
    expect(eng.github).toBe('james10');
});

