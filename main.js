function printNumbers(fine, tipo) {
    if (typeof fine !== 'number' || typeof tipo !== 'string') {
      console.error('fine and tipo must be numbers and strings, respectively');
      return;
    }
    for (let i = 1; i <= fine; i++) {
      if (i % 3 === 0) {
        console.log(i, 'dot');
      } else if (i % 5 === 0) {
        console.log(i, 'cross');
      } else if (tipo.toUpperCase() === 'D') {
        if (i % 3 === 0) {
          console.log(i, 'mar');
        } else if (i % 5 === 0) {
          console.log(i, 'print');
        }
      }
    }
  }

  printNumbers(25, "D");