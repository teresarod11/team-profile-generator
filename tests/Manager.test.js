const Manager = require('../lib/Manager');

test('test get office number', () => {
    const manager = new Manager(10, "James", "james@test.com", 2);
    expect(manager.officeNumber).toBe(2);
});