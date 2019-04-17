const shoppingList = [
    'diapers',
    'paper towels',
    'beer',
  ];

  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
  });
