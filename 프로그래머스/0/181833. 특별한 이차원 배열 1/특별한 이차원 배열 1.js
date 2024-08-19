function solution(n) {
    let arr = Array(n).fill(Array(n).fill(0))
    return arr.map((v,i) =>  v.map((x, idx) => i === idx ? 1 : x))
}