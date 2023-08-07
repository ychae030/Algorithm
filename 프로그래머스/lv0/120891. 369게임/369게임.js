function solution(order) {
    let arr = Array.from(String(order), v => Number(v))
    return arr.filter(v => v !==0 && v % 3 === 0).length
}