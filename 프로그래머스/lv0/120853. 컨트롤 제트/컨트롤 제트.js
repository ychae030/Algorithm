function solution(s) {
  return s.split(" ").reduce((acc, cur, i, arr) =>
      cur === 'Z'
      ? Number(acc) - Number(arr[i-1])
      : Number(acc) + Number(cur)
  , 0)
}