const humanYearsCatYearsDogYears = humanYears => [
    humanYears,
    ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
    ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
  ];

  function humanYearsCatYearsDogYears(humanYears) {
    switch (humanYears) {
      case 1:
        return [1, 15, 15]
      case 2:
        return [2, 24, 24];
      default:
        return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24 ];
    }
    
  }

  const humanYearsCatYearsDogYears = $ => 
      $ == 1 ? [1, 15, 15] : 
      $ == 2 ? [2, 24, 24] : 
      [$ , 24 + ( 4 * ($ - 2)), 24 + (5 * ($ - 2))];