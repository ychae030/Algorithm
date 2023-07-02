function solution(n) {
    const arr = Array.from(String(n), el => Number(el))
    return arr.reduce((cur, acc) => cur + acc, 0)   
}