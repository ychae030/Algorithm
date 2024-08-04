
function solution(arr, n) {
    return arr.length % 2 // 홀수
    ? arr.map((v, i) => i%2 ? v : v+n)
    : arr.map((v, i) => !(i%2) ? v: v+n)
}