describe('test', function() {
  it('returns given string', function() {
    expect(test('Hello World')).toEqual('Hello World');
  });
});

describe('factorial', function() {
  it('takes an integer n and returns the value of n!', function() {
    expect(factorial(1)).toEqual(1);
  });

  it('takes an integer n and returns the value of n!', function() {
    expect(factorial(5)).toEqual(120);
  });

  it('takes an integer n and returns the value of n!', function() {
    expect(factorial(9)).toEqual(362880);
  });

  it('takes an integer n and returns the value of n!', function() {
    expect(factorial(15)).toEqual(1307674368000);
  });
});

describe('removeChars', function() {
  it('removes the first and last character of a string', function() {
    expect(removeChars('country')).toEqual('ountr');
  });

  it('removes the first and last character of a string', function() {
    expect(removeChars('eloquent')).toEqual('loquen');
  });
});

describe('prefill', function() {
  it('returns an array of n elements that all have the same value v, using recursion', function() {
    expect(prefill(2, 'abc')).toEqual(['abc', 'abc']);
  });

  it('returns an array of n elements that all have the same value v, using recursion', function() {
    expect(prefill(3, 1)).toEqual([1, 1, 1]);
  });

  it('returns an array of n elements that all have the same value v, using recursion', function() {
    expect(prefill('1', 1).toEqual([1]));
  });

  it('returns an array of n elements that all have the same value v, using recursion', function() {
    expect(prefill(3, prefill(2, '2d'))).toEqual([['2d', '2d'], ['2d', '2d'], ['2d', '2d']]);
  });
});

describe('wave', function() {
  it('returns a wave of a given string', function() {
    expect(wave('hello')).toEqual(['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']);
  });

  it('returns a wave of a given string', function() {
    expect(wave('two words')).toEqual(['Two words',
                                       'tWo words',
                                       'twO words',
                                       'two Words',
                                       'two wOrds',
                                       'two woRds',
                                       'two worDs',
                                       'two wordS']);
  });
});

describe('squareDigits', function() {
  it('returns any given integer in square', function() {
    expect(squareDigits(9119)).toEqual(811181);
  });

  it('returns any given integer in square', function() {
    expect(squareDigits(23456)).toEqual(49162536);
  });
});

describe('nearestToCero', function() {
  it('Given a list of integers find the closest to zero If there is a tie, choose the positive value.', function() {
    expect(nearestToCero([8, 30, 1358, 2])).toEqual(2);
  });

  it('Given a list of integers find the closest to zero If there is a tie, choose the positive value.', function() {
    expect(nearestToCero([-2, 2, 5, 9])).toEqual(2);
  });

  it('Given a list of integers find the closest to zero If there is a tie, choose the positive value.', function() {
    expect(nearestToCero([-2, 5, 9])).toEqual(-2);
  });
})

describe('findEvenIndex', function() {
  it('finds an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N', function() {
    expect(findEvenIndex([1, 100, 50, -51, 1, 1])).toEqual(1);
  });

  it('it returns -1 if it does not finds an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N', function() {
    expect(findEvenIndex([1, 2, 3, 4, 5, 6])).toEqual(-1);
  });

  it('finds an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N', function() {
    expect(findEvenIndex([20, 10, 30, 10, 10, 15, 35])).toEqual(3);
  });
});

describe('sortedAndHow', function() {
  it('returns if an array is sorted and how', function() {
    expect(sortedAndHow([1, 2, 3])).toEqual('yes, asscending');
  });

  it('returns if an array is sorted and how', function() {
    expect(sortedAndHow([8, 5, 1])).toEqual('yes, descending');
  });

  it('returns if an array is sorted and how', function() {
    expect(sortedAndHow([1, 5, 8, 10, 12, 6])).toEqual('no');
  });
});

describe('rot13', function() {
  it('resolve a rot13 string', function() {
    expect(rot13('abc')).toEqual('nop');
  });

  it('resolve a rot13 string', function() {
    expect(rot13('abc dez')).toEqual('nop qrm');
  });
});

describe('pigIt', function() {
  it("Move the first letter of each word to the end of it, then add 'ay' to the end of the word", function() {
    expect(pigIt('Pig latin is cool')).toEqual('igPay atinlay siay oolcay');
  });

  it("Move the first letter of each word to the end of it, then add 'ay' to the end of the word", function() {
    expect(pigIt('This is my string')).toEqual('hisTay siay ymay tringsay');
  });
})
