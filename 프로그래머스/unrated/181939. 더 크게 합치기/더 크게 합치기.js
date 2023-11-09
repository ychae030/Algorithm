function solution(a, b) {
    const [strA, strB] = [a.toString(), b.toString()]
    return Math.max(Number(strA + strB),Number(strB + strA))
}