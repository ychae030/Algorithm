const solution = (num_str) =>
    num_str.split('').reduce((acc, cur) => acc + Number(cur), 0)