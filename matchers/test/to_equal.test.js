test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

test('check array data', () => {
    const ary = [{foo:1}, 2, {bar:3}];

    expect(ary)
      .toEqual([{foo:1}, 2, {bar:3}]);
});