function solution(my_string) {
    const arr = [];
    [...my_string].map((v,i) => arr.push(my_string.slice(i, my_string.length)))
    return arr.sort()
}