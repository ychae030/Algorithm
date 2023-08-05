const solution = (my_string) =>
    [...my_string.replace(/[^0-9]/g, '')].map(v => Number(v)).sort((a,b) => a-b);