const solution = (num_str) =>
    num_str.split('').map(v => Number(v)).reduce((acc, cur) => acc + cur)