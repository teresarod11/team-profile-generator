const Intern = require('../lib/Intern');

test('test get school name', () => {
    const intern = new Intern(10, "James", "james@test.com", "Georgia Tech University");
    expect(intern.school).toBe('Georgia Tech University');
});