test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

// 也可以用直接用字串，會檢查子字串
test('there is a "team" in steam', () => {
    expect('steam').toMatch('team');
});

test('match Regex rule', () => {
    expect('abc.js').toMatch(/.*[.]js$/);
});