function solution(n) {
  let i = 1;
  const fac = (i) => i <= 1 ? 1 : i * fac(i - 1);
  while(fac(i) <= n) i++;
  return i - 1;
}